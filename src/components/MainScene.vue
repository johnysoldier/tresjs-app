<template>
  <TresCanvas
    window-size
    power-preference="high-performance"
    :output-encoding="sRGBEncoding"
    physically-correct-lights
  >
    <!-- <OrbitControls :enable-zoom="false" /> -->
    <TresPerspectiveCamera
      :position="[0, 0, 10]"
      :fov="45"
      :aspect="1"
      :near="0.1"
      :far="1000"
    />
    <TresScene>
      <TresAmbientLight :color="0xffffff" :intensity="0.25" />
      <TresDirectionalLight :position="[0, 10, 5]" :intensity="0.7" />
      <TheCube />
      <FireShader />
    </TresScene>
  </TresCanvas>
</template>

<script setup>
import { sRGBEncoding } from "three";
import { OrbitControls } from "@tresjs/cientos";
import TheCube from "./TheCube.vue";
import FireShader from "./FireShader.vue";
</script>
