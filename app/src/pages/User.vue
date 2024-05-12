<template>
    <Navbar />
    <User />
    <Pagination />
  </template>
<script>

import Navbar from '../components/navbar/Navbar.vue';
import Pagination from '../components/pagination/Pagination.vue';
import User from '../components/user/User.vue';

export default {
  name: "User",
  components: {
    Navbar,
    User,
    Pagination,
  },
};
</script>

<style>
</style>