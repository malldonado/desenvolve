<template>
  <Navbar />
  <Main />
  <!-- <Response /> -->
  <Pagination />
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import Main from "../components/main/Main.vue";
import Pagination from "../components/pagination/Pagination.vue";
import User from "../components/user/User.vue";
// import Response from "../components/response/Response.vue";

export default {
  name: "Index",
  components: {
    Navbar,
    Main,
    Pagination,
  },
};
</script>

<style>
/* Estilos específicos da página Index */
</style>
