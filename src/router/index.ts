import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'presentation',
      component: () => import('../views/Presentation.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/Playground.vue'),
    }
  ],
})

export default router
