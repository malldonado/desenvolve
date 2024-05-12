<template>
  <div id="app">
    <router-view />
    <Index />
    <!-- <User/> -->
    <Response />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import router from './router';
// import User from './pages/User.vue';
import Index from './pages/Index.vue';
// import Response from './pages/Response.vue';

export default {
  name: 'App',
  components: {
    Index,
    // Response
  },
  router
}
</script>

<style>

</style>
