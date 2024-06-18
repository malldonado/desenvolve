<template>
  <nav class="navbar navbar-expand-lg __navbar">
    <div class="container __navbar-container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.svg" alt="Logo" height="34" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0 __form-inline">
          <input
            class="form-control mr-sm-2 __form-input"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            @click="redirectToHome"
            class="btn btn-outline-light my-2 my-sm-0 mr-2 __button-access"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <router-link to="/login">
            <button class="btn btn-outline-light my-2 my-sm-0 __button-access">
              <ion-icon name="person-outline"></ion-icon>
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>
