<template>
  <div>
    <Navbar />
    <User />
  </div>
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import User from "../components/user/User.vue";

export default {
  name: "IndexPage",
  components: {
    Navbar,
    User: User,
  },
};
</script>

<style>
</style>
