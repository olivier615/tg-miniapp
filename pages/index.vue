<template>
  <h1>{{route.query.chatId}}</h1>
</template>
<script setup>
const route = useRoute();
const { $modelsRef } = useNuxtApp();
// const runtimeConfig = useRuntimeConfig()
onMounted(() =>
console.log($modelsRef),
console.log(route.query)

);
</script>