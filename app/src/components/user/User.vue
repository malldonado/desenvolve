<template>
    <div class="container">
        <div class="row justify-content-center" id="perfil">
            <div class="__container-profile col-12 col-lg-12 mx-auto">
                <div class="my-4">
                    <div class="__user-main row mt-5 align-items-center justify-content-start">
                        <div class="__avatar col-md-1 text-center mb-4">
                            <img src="../../assets/avatar.svg" class="__avatar-sub" alt="User Avatar" />
                        </div>
                        <div class="col __user-element">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <h4 class="mb-1 mt-2"><strong>Matheus Maldonado</strong></h4>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <p class="small mb-0 text-muted">@matheusmaldonado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent="updateUser" class="__form-inputs">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" v-model="email" placeholder="joao_kleber@gmail.com" />
                        </div>
                        <div class="caixaAlterarSenha">
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="password">Nova senha</label>
                                    <input type="password" id="password" class="form-control" v-model="password" placeholder="******" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="confirmPassword">Confirmar senha</label>
                                    <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword" placeholder="******" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async getUser() {
            try {
                const response = await axios.get('http://localhost/desenvolve/api/user.php');
                const user = response.data;
                this.email = user.email; // Atualiza o valor do email no input
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        async updateUser() {
            if (this.password !== this.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const userData = {
                    email: this.email,
                    password: this.password
                };
                const response = await axios.post('http://localhost/desenvolve/api/user.php', userData);
                console.log('User updated:', response.data);
            } catch (error) {
                console.error('Error updating user data:', error);
            }
        }
    }
}
</script>

<style scoped>
/* Adicione seus estilos personalizados aqui */
</style>
