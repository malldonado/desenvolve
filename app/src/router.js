import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import User from './pages/User.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
