<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container navbar-container">
      <a class="navbar-brand" @click.prevent="redirectToHome">
        <img src="../../assets/logo.svg" alt="Logo" />
      </a>
      <form class="custom-form-inline">
        <input class="form-control custom-form-input" type="search" placeholder="pesquise agora..." aria-label="search" />
        <button @click.prevent="redirectToSearch" class="btn btn-outline-light custom-button">
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <div @click.prevent="redirectToProfile" class="navbar-user" v-if="userName">
          <button @click.prevent="redirectToLogin" class="btn btn-outline-light custom-button-login">
            <img src="../../assets/avatar.svg" class="avatar" alt="User" />
          </button>
        </div>
        <div v-else>
            <router-link to="/login">
              <button @click.prevent="redirectToLogin" class="btn btn-outline-light custom-button">
                <ion-icon name="person-outline"></ion-icon>
              </button>
            </router-link>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userName: null,
    };
  },
  created() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('token');
      const userName = localStorage.getItem('userName');

      if (!token) {
        // Redirect to login if no token
        this.$router.push('/login');
      } else {
        // Set userName if token is present
        this.userName = userName;
        // You might also want to verify the token with an API call here
      }
    },
    redirectToHome() {
      this.$router.push("/");
    },
    redirectToSearch() {
      this.$router.push("/search");
    },
    redirectToProfile() {
      this.$router.push("/user");
    },
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>


<style scoped>
.custom-navbar {
  background-color: #000;
  padding: 2px 10px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
}

.navbar-brand {
  cursor: pointer;
}

.navbar-brand img {
  height: 34px;
}

.custom-form-inline {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
}

.custom-form-input {
  margin-right: 1px;
  max-width: 250px;
  border-radius: 0;
  height: 45px;
  padding: 0 10px;
  border: 1px solid transparent;
  outline: none;
}

.custom-form-input::placeholder {
  color: #000 !important;
  font-size: 15px;
}

.form-control {
  color: #000 !important;
}

.form-control:focus {
  color: #000;
  border-color: #000;
  outline: 0;
  box-shadow: none;
}

.navbar-user {
  color: #fff;
  font-size: 15px;
}

.custom-button {
  margin-left: 0;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0;
  border-color: transparent !important;
}

.custom-button-login {
  margin-left: 0;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 0;
  border-color: transparent !important;
  background-color: transparent;
  color: #fff;
  width: 55px;
}

.custom-button-login:focus {
  box-shadow: none !important;
  background-color: #000 !important;
  border-color: transparent !important;
}

.custom-button ion-icon {
  font-size: 22px;
  height: 31px;
}

.custom-button:focus {
  box-shadow: none !important;
  border-color: transparent !important;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

@media screen and (max-width: 790px) {

  .custom-navbar {
    padding: 0px 10px;
  }

  .navbar {
    overflow-x: hidden !important;
  }

  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px 0;
    overflow-x: hidden !important;
  }

  .navbar-brand {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .navbar-brand img {
    height: 32px;
  }

  .custom-form-inline {
    width: 100%;
    justify-content: space-between;
  }

  .custom-form-input {
    flex-grow: 1;
    max-width: 100%;
  }

  .custom-button {
    margin-left: 5px;
  }

  .custom-button ion-icon {
    font-size: 20px;
  }
}
</style>
