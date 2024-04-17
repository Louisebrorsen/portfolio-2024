import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/kontakt',
      name: 'kontak',
      component: () => import('../views/KontaktView.vue')
    },
    {
      path: '/PortfolioDetailView/:id',
      name: 'PortfolioDetailView',
      component: () => import('../views/PortfolioDetailView.vue')
    }
    
    
  ]
})

export default router
