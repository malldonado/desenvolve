<template>
  <nav class="__navbar navbar-expand-lg navbar">
    <div class="__navbar-container container">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.svg" alt="Logo" width="auto" height="34">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="__form-inline form-inline my-2 my-lg-0">
          <input class="__form-input form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
          <button @click="redirectToHome" to="/" class="__button-access btn btn-outline-light my-2 my-sm-0 mr-2"><ion-icon name="search-outline"></ion-icon></button>
              <button class="__button-access btn btn-outline-light my-2 my-sm-0"><ion-icon name="person-outline"></ion-icon></button>
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
}
</script>