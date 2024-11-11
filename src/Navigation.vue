<template>
  <main class="Navigation">
    <RouterLink to="/on-road/game" class="Navigation__link">Game</RouterLink>
    <RouterLink to="/on-road/obstacle" class="Navigation__link">Obstacle</RouterLink>
  </main>
</template>

<style lang="css" scoped>
.Navigation {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
  color: white;
}

a {
  margin-right: 20px;
  background: pink;
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
}

a:last-child {
  margin-right: 0;
}
</style>