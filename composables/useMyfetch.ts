import { ElMessage } from "element-plus";

// import config from "~~/config";

const fetch = $fetch.create({
  // 请求拦截器

  async onRequest({ options }) {
    // options.baseURL = config.baseurl; // 添加请求头,没登录不携带token

    const userStore = useUserStore();

    const userInfo = userStore.user;

    if (!userInfo) return;

    options.headers = new Headers(options.headers);

    options.headers.set("x-access-token", `${userInfo.token}`);
  }, // 响应拦截

  onResponse({ response }) {
    const userStore = useUserStore();

    let data = response._data;

    if (data.code != 200) {
      ElMessage.error(data.message);

      if (data.message == "请先登录!") {
        userStore.logout();
      }
    }

    if (response.headers.get("content-disposition") && response.status === 200)
      return response; // 在这里判断错误

    if (response._data.code !== 200) return Promise.resolve(response._data); // 成功返回

    return response._data;
  }, // 错误处理

  onResponseError(error) {
    const err = (text: string) => {
      ElMessage.error(error?.response?._data.message ?? text);
    };

    if (error?.response?._data) {
      switch (error.response.status) {
        case 404:
          err("服务器资源不存在");

          break;

        case 500:
          err("服务器内部错误");

          break;

        case 401: // 清除缓存
          err("登录状态已过期，需要重新登录"); // TODO 跳转到登录界面

          break;

        case 403:
          err("没有权限访问该资源");

          break;

        default:
          err("未知错误！");
      }
    } else {
      err("请求超时，服务器无响应！");
    }

    return Promise.reject(error?.response?._data ?? null);
  },
});

// 自动导出

export const useHttp = {
  get: (url: string, params?: any) => {
    return fetch(url, { method: "get", params });
  },

  post: (url: string, params?: any) => {
    return fetch(url, { method: "post", body: params });
  },

  put: (url: string, params?: any) => {
    return fetch(url, { method: "put", body: params });
  },

  patch: (url: string, params?: any) => {
    return fetch(url, { method: "patch", body: params });
  },

  delete: (url: string, params?: any) => {
    return fetch(url, { method: "delete", body: params });
  },
};
