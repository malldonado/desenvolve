<template>
    <section class="container-login">
      <div class="container">
        <div class="row align-items-center">
          <!-- Image Section -->
          <div class="col-12 col-md-6">
            <div class="image-container">
              <img class="login-image" src="../../assets/banner.svg" alt="Banner" />
            </div>
          </div>
          <!-- Form Section -->
          <div class="col-12 col-md-6">
            <div class="login-card">
              <div class="card-body">
                <h3 class="login-title">REGISTER</h3>
                <form @submit.prevent="registerUser">
                  <div class="form-group">
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
                  <button type="submit" class="btn-submit">Register</button>
                </form>
                <div class="links">
                  <p>Already have an account? <router-link to="/login" class="link">Login</router-link></p>
                  <router-link to="/forgot-password" class="link">Forgot your password?</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const user = { email: this.email, password: this.password };
          const response = await axios.post('http://localhost/desenvolve/api/register.php', user);
          if (response.data.message === "successfully") {
            this.$router.push('/login');
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container-login {
    padding: 3rem 1rem;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    background-color: #007bff; /* Primary color */
    padding: 1rem;
  }
  
  .login-image {
    max-width: 100%;
    border-radius: 0.5rem;
  }
  
  .login-card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    background-color: #fff;
  }
  
  .login-title {
    margin-bottom: 1rem;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  
  .btn-submit {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .btn-submit:hover {
    background-color: #0056b3;
  }
  
  .links {
    margin-top: 1rem;
  }
  
  .link {
    color: #007bff;
    text-decoration: none;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  