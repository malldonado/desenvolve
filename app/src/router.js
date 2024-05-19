import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import User from './pages/User.vue';
import Login from './pages/Login.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/user', component: User },
    { path: '/login', component: Login },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
