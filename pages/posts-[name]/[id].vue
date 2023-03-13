<template>
  <div>id:{{ id }}</div>
  <div>name:{{ name }}</div>
  {{ $route.params.name }}
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const name = ref(route.params.name);
</script>

<style></style>
