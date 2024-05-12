<template>
    <Navbar />
    <!-- <Main /> -->
    <Response />
    <!-- <Pagination /> -->
  </template>
  
  <script>
  import Navbar from "../components/navbar/Navbar.vue";
  import Response from "../components/response/Response.vue";
  
  export default {
    name: "Response",
    components: {
      Navbar,
      Response,
      // Pagination,
    },
  };
  </script>
  
  <style>

  </style>
  