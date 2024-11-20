<template>
  <section class="Game" ref="game">
    <div v-if="life > 0" class="Life">PV: {{ life }}</div>
    <div v-if="life <= 0" class="Lose">
      <p>PERDU</p>
      <button @click="reload()">Recommencer</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Logic } from "./three/scene";

const game = ref();
const life = ref(10);
let logic;

const reload = () => {
  location.reload();
}

onMounted(() => {
  logic = new Logic(game.value);
  window.addEventListener("collision", (e) => {
    life.value = e.detail;
  });
});
</script>

<style scoped>
.Game {
  height: 100vh;
  width: 100vw;
  background: url("/textures/backgroundstar.jpg") no-repeat center center;
  background-size: cover;
}
.Life {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2em;
  color: white;
}
.Lose {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
  filter: drop-shadow(0px 0px 25px #000000)
}

button {
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 15px #00fff2)
}
</style>
