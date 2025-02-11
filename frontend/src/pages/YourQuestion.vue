<template>
    <div>
      <Navbar />
      <div class="container">
        <div class="main-body">
          <!-- <Sidebar /> -->
          <div class="inner-wrapper">
            <div class="inner-main">
              <Filter/>
              <!-- <Main /> -->
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import Navbar from "../components/navbar/Navbar.vue";
  import Main from "../components/main/Main.vue";
  import Filter from "../components/filter/Filter.vue";
  import Pagination from "../components/pagination/Pagination.vue";
  import Sidebar from "../components/sidebar/Sidebar.vue";
  
  export default {
    name: "YourQuestionPage",
    components: {
      Navbar,
      Sidebar,
      Filter,
      Main,
      Pagination,
    },
  };
  </script>
  
  
  <style>
  .inner-main {
    flex: 1;
    padding: 1rem;
    margin-top: 20px;
  }
  
  .container {
    display: flex;
    height: 100vh;
    padding: 0;
  }
  
  .main-body {
    display: flex;
    width: 100%;
  }
  
  .inner-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  @media screen and (max-width: 790px) {
    .main-body {
      display: block !important;
    }
  }
  </style>
  
  