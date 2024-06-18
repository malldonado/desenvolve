<template>
  <Navbar />
  <Main />
  <Pagination />
</template>

<script>
import Navbar from "../components/navbar/Navbar.vue";
import Main from "../components/main/Main.vue";
import Pagination from "../components/pagination/Pagination.vue";

export default {
  name: "IndexPage",
  components: {
    Navbar,
    Main,
    Pagination,
  },
};
</script>

<style>
</style>
