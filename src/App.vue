<template>
  <section class="Game" ref="game"></section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Logic } from "./three/scene";

const game = ref();
let logic;

onMounted(() => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Safari
    document.documentElement.webkitRequestFullscreen();
  }
  logic = new Logic(game.value);
});
</script>

<style scoped>
.Game {
  height: 100vh;
  width: 100vw;
  background: url('/textures/backgroundstar.jpg') no-repeat center center;
  background-size: cover;
}
</style>