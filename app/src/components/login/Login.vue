<template>
    <section class="__container-login py-3 py-md-5 py-xl-8">
        <div class="container">
            <div class="row gy-4 align-items-center">
                <div class="col-12 col-md-6 col-xl-6">
                    <div class="d-flex justify-content-center text-bg-primary">
                        <div class="__left-login-text c col-12 col-xl-9">
                            <img class="img-fluid rounded mb-4" loading="lazy" src="../../assets/banner.svg" width="800"
                                height="400" alt="BootstrapBrain Logo">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-6">
                    <div class="__card-login card border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                <h3 class="__login-title">SIGN IN</h3>
                                </div>
                            </div>
                            <form @submit.prevent="login">
                                <div class="__form-login-sub row gy-3 overflow-hidden">
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input v-model="email" type="email" class="form-control" name="email"
                                                id="email" placeholder="name@example.com" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input v-model="password" type="password" class="form-control"
                                                name="password" id="password" value="" placeholder="password" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="__form-login-remember form-check">
                                            <input v-model="rememberMe" class="form-check-input" type="checkbox"
                                                value="" name="remember_me" id="remember_me">
                                            <label class="form-check-label" for="remember_me">
                                                Keep me logged in
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button class="__btn-login btn btn-dark btn-lg" type="submit">Log in</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <div
                                        class="d-flex gap-2 gap-md-4 flex-column justify-content-md-start">
                                        <p class="mt-4">Don't have an account? <router-link to="/register" class="__sign-up">Sign
                                            up</router-link></p>
                                            
                                        <router-link class="__forgot-password" to="/forgot-password">Forgot your password?</router-link>
                                    </div>
                                </div>
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
/* Add your scoped styles here */
</style>
