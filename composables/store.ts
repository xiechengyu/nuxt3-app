import { defineStore } from "pinia";

export const useUserStore = defineStore("user-info", {
  state: (): any => ({
    user: null,
  }),

  actions: {
    async login(data: any) {
      this.user = data;

      // setStorage("user", data);
    },

    async logout() {
      this.user = null;

      // removeStorage("user");
    },
  },

  persist: true, // 持久化
});
