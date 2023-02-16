<template>
  <Suspense>
    <MainScene />
    <template #fallback>
      <PreLoader />
    </template>
  </Suspense>
</template>

<script setup>
import PreLoader from "./components/PreLoader.vue";
import MainScene from "./components/MainScene.vue";
</script>
