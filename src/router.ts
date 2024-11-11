import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Obstacle from './Obstacle.vue'
import Game from './Game.vue'

const routes = [
  { path: '/on-road', component: App },
  { path: '/on-road/game', component: Game },
  { path: '/on-road/obstacle', component: Obstacle },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router