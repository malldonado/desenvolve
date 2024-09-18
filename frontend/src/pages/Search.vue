<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main-body">
        <div class="inner-wrapper">
          <div class="inner-main">
            <Filter/>
            <Search />
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/navbar/Navbar.vue";
import Filter from "../components/filter/Filter.vue";
import Pagination from "../components/pagination/Pagination.vue";
import Search from "../components/search/Search.vue";

export default {
  name: "IndexPage",
  components: {
    Navbar,
    Filter,
    Search,
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
</style>

