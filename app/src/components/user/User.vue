<template>
    <div class="container">
        <div class="profile" id="perfil">
            <div class="profile-container">
                <div class="profile-header">
                    <div class="user-main">
                        <div class="avatar">
                            <img src="../../assets/avatar.svg" class="avatar-img" alt="User Avatar" />
                        </div>
                        <div class="user-details">
                            <h4 class="user-name"><strong>Matheus Maldonado</strong></h4>
                            <p class="user-handle">@matheusmaldonado</p>
                        </div>
                    </div>
                    <form @submit.prevent="updateUser" class="form">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" placeholder="joao_kleber@gmail.com" />
                        </div>
                        <div class="password-change">
                            <div class="password-group">
                                <div class="form-group">
                                    <label for="password">Nova senha</label>
                                    <input type="password" id="password" v-model="password" placeholder="******" />
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword">Confirmar senha</label>
                                    <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="******" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn-submit">Update</button>
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
.container {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.profile {
    width: 100%;
}

.profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    background-color: #fff;
}

.profile-header {
    padding: 1rem 0;
}

.user-main {
    display: flex;
    align-items: center;
}

.avatar {
    flex: 0 0 100px;
    text-align: center;
    margin-right: 1rem;
}

.avatar-img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
}

.user-details {
    flex: 1;
}

.user-name {
    margin: 0;
    font-size: 1.25rem;
    color: #333;
}

.user-handle {
    margin: 0;
    color: #6c757d;
}

.form {
    margin-top: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
}

.password-change {
    margin-top: 1rem;
}

.password-group {
    display: flex;
    gap: 1rem;
}

.password-group .form-group {
    flex: 1;
}

.btn-submit {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
}

.btn-submit:hover {
    background-color: #218838;
}
</style>

