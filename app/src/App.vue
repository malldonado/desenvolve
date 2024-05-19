<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import router from './router';

export default {
  name: 'App',
  setup() {
    const app = createApp({});
    app.use(router);
    return { app };
  }
}
</script>

<style>

</style>
