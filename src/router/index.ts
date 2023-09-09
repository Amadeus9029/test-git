import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Log from '../pages/Log.vue'
import Reg from '../pages/Reg.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/log',
    component: Log
  },
  {
    path: '/reg',
    component: Reg
  }
]

const Router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default Router
