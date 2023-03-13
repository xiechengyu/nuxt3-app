<template>
  <div>
    <h2>父组件的页面的内容</h2>
    <ul>
      <!-- 进行切换子页面，写法同vue.js -->
      <li><NuxtLink to="/parent/child">child</NuxtLink></li>
      <li><NuxtLink to="/parent/child2">child2</NuxtLink></li>
    </ul>
    <hr />
    <div class="box">
      <p>嵌套子页面内容区</p>
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>
<script setup lang="ts">
// This compiler macro works in both <script> and <script setup>
// definePageMeta({
//   // you can also pass a string or a computed property
//   key: route => route.slug,
//   transition: {
//     name: 'page',
//   },
//   keepalive: {
//     exclude: ['modal']
//   },
// })
</script>