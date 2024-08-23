import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './refatorado.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Index from './pages/Index.vue';
import Login from './pages/Login.vue';
import Question from './pages/Question.vue';
import Register from './pages/Register.vue';
import Response from './pages/Response.vue';
import Search from './pages/Search.vue';
import User from './pages/User.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/user', component: User },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/response', component: Response },
    { path: '/search', component: Search },
    { path: '/question', component: Question },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
