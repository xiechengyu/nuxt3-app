<template>
  some page content
  <nav>
    <ul>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/posts-zhangsan/1">Post zhangsan 1</NuxtLink></li>
      <li><NuxtLink to="/posts-lisi/2">Post lisi 2</NuxtLink></li>
      <li><NuxtLink to="/changeLayout">changeLayout</NuxtLink></li>
      <li><NuxtLink to="/demo1">demo1</NuxtLink></li>
      <li><ElButton @click="hellow">hellow</ElButton></li>
      <li><ElButton @click="hellow1">hellow1</ElButton></li>
      <li><ElButton @click="test">test</ElButton></li>
      <li><ElButton @click="get">get</ElButton></li>
      <li><ElButton @click="post">post</ElButton></li>
    </ul>
  </nav>
  <div><BaseFooBotton /></div>
  <div class="foo">{{ foo }}</div>
</template>

<script setup lang="ts">
const foo = useFoo();
// definePageMeta({
//   layout: "custom",
// });
const hellow = async () => {
  const res = await $fetch("/api/hellow");
  console.log(res);
};
const hellow1 = async () => {
  const res = await $fetch("/hellow");
  console.log(res);
};
const test = async () => {
  const res = await $fetch("/api/test/haha");
  console.log(res);
};
const get = async () => {
  const res = await $fetch("/api/check", { method: "get" });
  console.log(res);
};
const post = async () => {
  const res = await $fetch("/api/check", { method: "post" });
  console.log(res);
};
</script>
<style lang="scss">
.foo {
  width: 100px;
}
</style>
