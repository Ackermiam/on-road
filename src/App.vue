<template>
  <section class="Game" ref="game">
    <div v-if="life" class="Life">
      <div
        class="Life__points"
        v-for="(point, index) in life"
        :key="index"
      ></div>
    </div>

    <div v-if="life <= 0" class="Lose">
      <h2>PERDU</h2>
      <button @click="reload()">Recommencer</button>
    </div>
    <div v-if="loading" class="Loading">
      <img src="/loading.png"/>
      <h3>CHARGEMENT</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Logic } from "./three/scene";

const game = ref();
const life = ref(10);
const loading = ref(true);
let logic;

const reload = () => {
  location.reload();
};

onMounted(() => {
  logic = new Logic(game.value);
  window.addEventListener("collision", (e) => {
    e.detail >= 0 ? (life.value = e.detail) : (life.value = 0);
  });

  window.addEventListener("loading", (e) => {
    loading.value = e.detail;
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
  display: flex;
}
.Life__points {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px rgb(255, 255, 255) solid;
  background: red;
  margin-right: 5px;
}

.Lose {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 90vw;
}

@media (min-width: 900px) {
  .Lose {
    font-size: 10vw;
  }

  img {
    max-width: 60vw;
  }
}

.Loading {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h2 {
  margin: 0;
  filter: drop-shadow(0px 0px 25px #000000);
}

button {
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 15px #00fff2);
}


h3 {
  color: white;
  filter: drop-shadow(0 0 10px #00ffff)
}
</style>
