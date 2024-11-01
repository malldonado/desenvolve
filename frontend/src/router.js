import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import User from './pages/User.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Response from './pages/Response.vue';
import Search from './pages/Search.vue';
import Post from './pages/Post.vue';
import ForgotPassword from './pages/ForgotPassword.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/user', component: User },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/response', component: Response },
    { path: '/search', component: Search },
    { path: '/post', component: Post },
    { path: '/forgot-password', component: ForgotPassword },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
