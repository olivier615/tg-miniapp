<template>
  <h1>fire~</h1>
</template>
<script setup>
const { $modelsRef } = useNuxtApp();
const runtimeConfig = useRuntimeConfig()
onMounted(() => console.log($modelsRef))
</script>