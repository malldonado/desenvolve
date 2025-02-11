import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import User from "./pages/User.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Response from "./pages/Response.vue";
import Search from "./pages/Search.vue";
import Post from "./pages/Post.vue";
import ForgotPassword from "./pages/ForgotPassword.vue";
import PopularWeek from "./pages/PopularWeek.vue";
import PopularAllTime from "./pages/PopularAllTime.vue";
import Resolved from "./pages/Resolved.vue";
import NotResolved from "./pages/NotResolved.vue";
import NoAnswerYet from "./pages/NoAnswerYet.vue";
import YourQuestion from "./pages/YourQuestion.vue";
import YourAnswers from "./pages/YourAnswers.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/user", component: User },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/response", component: Response },
  { path: "/search", component: Search },
  { path: "/post", component: Post },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/popular-this-week", component: PopularWeek },
  { path: "/popular-all-time", component: PopularAllTime },
  { path: "/resolved", component: Resolved },
  { path: "/not-resolved", component: NotResolved },
  { path: "/no-answer-yet", component: NoAnswerYet },
  { path: "/your-question", component: YourQuestion },
  { path: "/your-answers", component: YourAnswers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
