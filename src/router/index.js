import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetallePlayas from '../views/PlayasDetallesView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/detalle_playas/:id',
    name: 'detalle_playas',
    component: DetallePlayas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
