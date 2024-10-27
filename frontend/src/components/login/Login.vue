<template>
    <a class="navbar-brand" @click.prevent="redirectToHome">
        <img src="../../assets/icon.svg" alt="Logo" height="34" />
    </a>
    <span @click="$router.push('/')" class="close">
      <ion-icon name="close-circle-outline"></ion-icon>
    </span>
    <section class="container-login">
      <div class="login-content">
        <div class="login-left">
            <img class="login-banner" src="../../assets/banner.svg" alt="Logo" />
        </div>
        <div class="login-right">
          <div class="card-login">
            <div class="card-body">
              <h3 class="login-title">LOGIN</h3>
              <form @submit.prevent="login">
                <div class="form-group form-login">
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
                  <label for="remember_me">Mantenha-me conectado</label>
                </div>
                <button class="btn-login" type="submit">LOGIN</button>
              </form>
              <p class="signup-link">
                Não tem uma conta?
                <router-link to="/register" class="router-link"
                  >Registrar</router-link
                >
              </p>
              <router-link class="forgot-password-link" to="/forgot-password"
                >Esqueceu sua senha?</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
      };
    },
    methods: {
      async login() {
        try {
        const apiUrl = 'http://localhost:3333/sessions';
          const response = await axios.post(
            `${apiUrl}`,
            {
              email: this.email,
              password: this.password
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
  
          if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.user.name);
            this.$router.push('/');
          } else {
            console.error('Login error:', response.data.message);
          }
        } catch (error) {
          if (error.response) {
            // Show server error details
            console.error('Network error:', error.response.data);
          } else {
            console.error('Network error:', error.message);
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
  
  .navbar-brand {
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
  
  .container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    background-color: #f8f9fa;
    /* Adjust to match your design */
  }
  
  .login-content {
    display: flex;
    max-width: 1200px;
    width: 100%;
  }
  
  .login-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-banner {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
  }
  
  .login-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card-login {
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
  
  .login-title {
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
  
  .form-group.form-login {
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
  
  .btn-login {
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
  
  .btn-login:hover {
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
    .login-left {
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
  