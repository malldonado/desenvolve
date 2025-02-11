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
                            <h4 class="user-name"><strong>{{ name }}</strong></h4>
                            <p class="user-handle">@{{ username }}</p>
                        </div>
                    </div>
                    <form @submit.prevent="updateUser" class="form">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" placeholder="email@example.com" required />
                        </div>
                        <div class="form-group">
                            <label for="username">Usuário</label>
                            <input type="text" id="username" v-model="username" placeholder="username" required />
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
                        <button type="submit" class="btn-submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'User',
    data() {
        return {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            avatar: '',
        };
    },
    async mounted() {
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error("Token não encontrado. Faça login novamente.");

            const response = await axios.get('http://localhost:3333/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const user = response.data;
            this.name = user.name;
            this.username = user.username;
            this.email = user.email;
            this.avatar = user.avatar || this.defaultAvatar;

        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
    },
    methods: {
        async updateUser() {
            if (this.password && this.password !== this.confirmPassword) {
                alert("As senhas não coincidem!");
                return;
            }

            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error("Token não encontrado. Faça login novamente.");

                const updatedData = {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    ...(this.password && { password: this.password }), // Envia a senha apenas se for alterada
                };

                await axios.put('http://localhost:3333/profile', updatedData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                alert("Perfil atualizado com sucesso!");

            } catch (error) {
                console.error("Erro ao atualizar usuário:", error);
                alert("Erro ao atualizar perfil. Tente novamente.");
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem !important;
}

.profile {
    width: 100%;
}

.profile-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 0rem;
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
    border-radius: 0;
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
    background-color: #000;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    cursor: pointer;
    font-size: 1rem;
}

.btn-submit:hover {
    background-color: #00ce81;
}

@media screen and (max-width: 790px) {
    .container {
        padding: 2rem 8px;
    }

    .profile-header {
        padding: 1rem 0 0 0;
    }

    .password-change {
        margin-bottom: 15px; 
    }
}
</style>
