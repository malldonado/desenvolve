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
              <div class="form-group form-register">
                <label for="email">Email</label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  placeholder="name@example.com"
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
              <div class="form-group form-check">
                <input v-model="rememberMe" type="checkbox" id="remember_me" />
                <label for="remember_me">Agree with Terms & Conditions</label>
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
export default {
  methods: {
        redirectToHome() {
            this.$router.push('/');
        }
    }
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
  height: 470px;
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
  margin-bottom: 20px;
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

.form-group.form-register {
  margin-bottom: 20px;
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

@media screen and (max-width: 790px) {
  .register-left {
    display: none !important;
  }

  .navbar-brand {
    left: 20px;
  }

  .close {
    right: 20px;
  }
}
</style>
