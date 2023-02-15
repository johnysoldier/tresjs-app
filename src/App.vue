<template>
  <Suspense>
    <TheExperience />
    <template #fallback>
      <PreLoader />
    </template>
  </Suspense>
</template>

<script setup>
import PreLoader from "./components/PreLoader.vue";
import TheExperience from "./components/MainScene.vue";
</script>
