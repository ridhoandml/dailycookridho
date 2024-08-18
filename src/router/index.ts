import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import RecommendationsPage from '@/pages/RecommendationsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: RecommendationsPage
    }
  ]
})

export default router
