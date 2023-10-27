import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutComponent.vue')
    },
    {
      path: '/',
      name: 'portfolio',
      component: () => import('../views/PortfolioComponent.vue')
    },

  
  ]
})

export default router
