<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main-body">
        <div class="inner-wrapper">
          <div class="inner-main">
            <Response />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/navbar/Navbar.vue";
import Pagination from "../components/pagination/Pagination.vue";
import Response from "../components/response/Response.vue";

export default {
  name: "ResponsePage",
  components: {
    Navbar,
    Response,
    Pagination,
  },
};
</script>


<style>
.inner-main {
  flex: 1;
  padding: 1rem 0 !important;
  margin-top: 20px;
}

.container {
  display: flex;
  height: 100% !important;
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
</style>

