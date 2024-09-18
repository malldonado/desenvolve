<template>
  <a class="navbar-brand" @click.prevent="redirectToHome">
    <img src="../../assets/icon.svg" alt="Logo" height="34" />
  </a>
  <span @click="$router.push('/')" class="close">
    <ion-icon name="close-circle-outline"></ion-icon>
  </span>
  <section class="container-register">
    <div class="register-content">
      <div class="register-left">
        <img class="register-banner" src="../../assets/banner.svg" alt="Logo" />
      </div>
      <div class="register-right">
        <div class="card-register">
          <div class="card-body">
            <h3 class="register-title">REGISTER</h3>
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  v-model="name"
                  type="name"
                  id="name"
                  placeholder="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  v-model="username"
                  type="username"
                  id="username"
                  placeholder="username"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  placeholder="password"
                  required
                />
              </div>
              <button class="btn-register" type="submit">REGISTER</button>
            </form>
            <p class="signup-link">
              I Already have an account
              <router-link class="router-link" to="/login">Sign in</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const apiUrl = 'http://localhost:3333/users';
      
      console.log("Registering with data:", {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      });

      try {
        const response = await axios.post(
          `${apiUrl}`,
          {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response data:", response.data);

        if (response.status === 200) {
          this.$router.push("/login");
        } else {
          console.error("Registration error:", response.data.message);
        }
      } catch (error) {
        if (error.response) {
          console.error("Network error:", error.response.data);
        } else {
          console.error("Network error:", error.message);
        }
      }
    },
  },
};
</script>

<style scoped>
.navbar-brand {
  position: absolute;
  left: 50px;
  top: 20px;
  z-index: 999;
  cursor: pointer;
}

.close {
  position: absolute;
  right: 50px;
  top: 20px;
  z-index: 999;
  opacity: 1;
}

.close ion-icon {
  font-size: 40px;
  cursor: pointer;
}

.navbar-brand img {
  height: 40px;
  opacity: 1 !important;
}

.close ion-icon:hover {
  opacity: 1 !important;
  color: #00da88 !important;
}

.container-register {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f8f9fa; /* Adjust to match your design */
}

.register-content {
  display: flex;
  max-width: 1200px;
  width: 100%;
}

.register-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-banner {
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  height: 400px;
}

.register-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-register {
  background-color: white;
  border-radius: 0px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  height: 550px;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.register-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 0px;
  outline: none !important;
}

.form-group.form-check {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0;
}

.form-group.form-check input#remember_me {
  margin-right: 5px;
  width: 15px;
}

.form-group.form-check label {
  font-size: 14px;
  line-height: 1;
  padding-top: 3px;
}

.btn-register {
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 0px;
  font-size: 16px;
  border: 1px solid #000;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.btn-register:hover {
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}

.signup-link {
  text-align: left;
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 10px !important;
}

.signup-link .router-link {
  color: #000 !important;
  font-weight: 700;
}

.forgot-password-link {
  display: block;
  text-align: left;
  font-size: 14px;
  color: #000;
  font-weight: 700;
  text-decoration: none;
}

.forgot-password-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 900px) {
  .register-left {
    display: none !important;
  }

  .navbar-brand {
    left: 20px;
  }

  .close {
    right: 20px;
    top: 25px;
  }
}
</style>
