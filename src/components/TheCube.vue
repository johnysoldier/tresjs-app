<template>
  <TresMesh v-bind="model" />
  <TresMesh
    @pointer-enter="currentAction.play()"
    @pointer-leave="currentAction.stop()"
    :position="[0, 0, 0]"
  >
    <TresSphereGeometry :args="[1.5]" />
    <TresMeshBasicMaterial transparent opacity="0" />
  </TresMesh>
</template>

<script setup>
import { useGLTF, useAnimations } from "@tresjs/cientos";

const { scene: model, animations } = await useGLTF(
  "/src/assets/models/cube_cascade/scene.gltf",
  {
    draco: true,
  }
);

const { actions, mixer } = useAnimations(animations, model);
let currentAction = actions.Animation;
mixer.timeScale = 1;

model.position.set(0, 0, 0);
model.rotation.y = Math.PI / 4;
model.rotation.x = Math.PI / 8;
model.scale.set(1, 1, 1);
model.updateMatrixWorld();
</script>
