
<template>
    some page content
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts-zhangsan/1">Post zhangsan 1</NuxtLink></li>
        <li><NuxtLink to="/posts-lisi/2">Post lisi 2</NuxtLink></li>
        <li><NuxtLink to="/changeLayout">changeLayout</NuxtLink></li>
        <li><NuxtLink to="/demo1">demo1</NuxtLink></li>
        <li><button @click="hellow">hellow</button></li>
        <li><button @click="hellow1">hellow1</button></li>
      </ul>
    </nav>
    <div><BaseFooBotton/></div>
    <div>{{ foo }}</div>
</template>

<script setup lang="ts">
const foo = useFoo()
// definePageMeta({
//   layout: "custom",
// });
const hellow = async()=>{
  const res = await $fetch("/api/hellow")
  console.log(res)
}
const hellow1  =async () => {
  const res = await $fetch("/hellow")
  console.log(res)
}
</script>