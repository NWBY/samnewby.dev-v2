import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Content from '../pages/Content.vue';
import SingleContent from '../pages/SingleContent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/content',
      name: 'content',
        component: Content
    },
      {
          path: '/content/:slug',
              name: 'single content',
              component: SingleContent
      }
  ]
})

export default router
