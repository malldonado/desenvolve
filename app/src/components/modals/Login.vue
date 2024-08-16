<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-dialog" @click.stop>
        <div class="modal-content">
          <img class="sign-in-img-logo" src="../../resources/img/logo.png" alt="Logo">
          <img class="sign-in-img" src="../../resources/img/sign-in.svg" alt="Sign In">
          <div class="modal-header">
            <h5 class="modal-title">Bem-vindo a Desenvolve</h5>
            <button type="button" class="close-button" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group">
              <input type="email" v-model="email" class="form-control login-input" placeholder="Email" aria-label="Email">
            </div>
            <div class="input-group">
              <input type="password" v-model="password" class="form-control login-input" placeholder="Senha" aria-label="Senha">
            </div>
            <button @click="login" class="btn btn-secondary button-sign-in">Acessar</button>
            <button @click="loginWithGoogle" class="btn btn-outline-light button-google">
              <i class="fab fa-google icon-social-media"></i>Acessar com Google
            </button>
            <p class="p-sign-in">
              Ainda não tem uma conta?
              <span @click="openRegisterModal" class="link">Registrar</span>
            </p>
            <p class="p-sign-in">
              <span @click="openForgotPasswordModal" class="link">Esqueceu sua senha?</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['showModal'],
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      closeModal() {
        this.$emit('update:showModal', false);
      },
      login() {
        // Lógica de login
        console.log('Login:', this.email, this.password);
      },
      loginWithGoogle() {
        // Lógica para login com Google
        console.log('Login with Google');
      },
      openRegisterModal() {
        this.$emit('openRegisterModal');
      },
      openForgotPasswordModal() {
        this.$emit('openForgotPasswordModal');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-dialog {
    background: white;
    border-radius: 8px;
    width: 400px;
    padding: 20px;
    position: relative;
  }
  
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sign-in-img-logo,
  .sign-in-img {
    width: 100px;
    margin-bottom: 20px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .modal-title {
    font-size: 18px;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .input-group {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .login-input {
    width: 100%;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .button-sign-in {
    background-color: #007bff;
    color: white;
    border: none;
  }
  
  .button-google {
    border: 1px solid #ddd;
    color: #333;
  }
  
  .icon-social-media {
    margin-right: 8px;
  }
  
  .p-sign-in {
    margin-top: 10px;
    text-align: center;
  }
  
  .link {
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
  }
  </style>
  