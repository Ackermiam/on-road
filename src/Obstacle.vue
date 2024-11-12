<template>
  <section class="Obstacle" ref="obstacle">
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { TestObstacle } from "./three/testObstacle";

const obstacle = ref();
let testObs;

onMounted(() => {
  testObs = new TestObstacle(obstacle.value);
})
</script>

<style scoped>

</style>
