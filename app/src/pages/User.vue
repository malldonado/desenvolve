<template>
  <div>
    <Navbar />
    <User />
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue';
import UserComponent from '../components/user/User.vue';

export default {
  name: "UserPage",
  components: {
    Navbar,
    User: UserComponent,
  },
};
</script>

<style>
</style>
