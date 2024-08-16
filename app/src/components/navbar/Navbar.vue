<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container navbar-container">
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
        <form class="form-inline my-2 my-lg-0 custom-form-inline">
          <input
            class="form-control custom-form-input"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            @click.prevent="redirectToHome"
            class="btn btn-outline-light my-2 my-sm-0 custom-button"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <router-link to="/login">
            <button class="btn btn-outline-light my-2 my-sm-0 custom-button">
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
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.custom-navbar {
  background-color: #000; /* Adjust color as needed */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-form-inline {
  display: flex;
  align-items: center;
}

.custom-form-input {
  margin-right: 0.5rem;
  max-width: 200px; /* Adjust as needed */
  border-radius: 0 !important;
  height: 40px;
}

.custom-button {
  margin-left: 0.5rem;
  border: none !important;
  display: flex;
  align-items: end;
}

.custom-button ion-icon {
  font-size: 20px !important;
}

.navbar-brand img {
  height: 34px;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;base64,..."); /* Adjust or remove if needed */
}
</style>
