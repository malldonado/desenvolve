<template>
    <section class="container-login">
        <div class="login-content">
            <div class="login-left">
                <img class="login-banner" src="../../assets/banner.svg" alt="Logo">
            </div>
            <div class="login-right">
                <div class="card-login">
                    <div class="card-body">
                        <h3 class="login-title">SIGN IN</h3>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="email" type="email" id="email" placeholder="name@example.com" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="password" type="password" id="password" placeholder="password" required>
                            </div>
                            <div class="form-group">
                                <input v-model="rememberMe" type="checkbox" id="remember_me">
                                <label for="remember_me">Keep me logged in</label>
                            </div>
                            <button class="btn-login" type="submit">Log in</button>
                        </form>
                        <p class="signup-link">Don't have an account? <router-link to="/register">Sign up</router-link></p>
                        <router-link class="forgot-password-link" to="/forgot-password">Forgot your password?</router-link>
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
            password: '',
            rememberMe: false
        };
    },
    methods: {
        async login() {
            try {
                const user = {
                    email: this.email,
                    password: this.password
                };
                const response = await axios.post('http://localhost/desenvolve/api/login.php', user);
                console.log(response.data);
                if (response.data.message === "successfully") {
                    this.$router.push('/');
                } else {
                    alert(response.data.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>

.container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    background-color: #f8f9fa; /* Adjust to match your design */
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
    max-width: 100%;
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
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 400px;
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
    border-radius: 4px;
}

.btn-login {
    width: 100%;
    padding: 10px;
    background-color: #343a40;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.btn-login:hover {
    background-color: #495057;
}

.signup-link {
    text-align: center;
    margin-top: 20px;
}

.forgot-password-link {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
}

.forgot-password-link:hover {
    text-decoration: underline;
}


</style>
