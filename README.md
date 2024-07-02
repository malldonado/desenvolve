# Desenvolve

📚 A forum tailored for developers, crafted with Vue.js and Vite.js, integrating Bootstrap for the frontend, and PHP with Laravel framework and MySQL for the backend, providing a platform for questions, answers, and discussions on development and languages.

## Technologies Used

**Frontend:** HTML, CSS, Bootstrap, JavaScript (Vue.js, Vite.js, AJAX)

**Backend:** PHP (Laravel)

**Database:** MySQL

## Features

- Responsive design using Bootstrap.
- Dynamic and interactive frontend with Vue.js and Vite.js.
- Robust backend with Laravel.
- Secure authentication and user management.
- Comprehensive Q&A and discussion platform.

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/desenvolve.git
```

## Backend Setup

Navigate to the backend directory:

```bash
cd desenvolve/backend
```

### Instalar Dependências PHP

Para instalar as dependências PHP, execute o seguinte comando:

```bash
composer install
```

### Configurar e Migrar Banco de Dados

Antes de executar sua aplicação, siga estes passos:

1. Configure seu arquivo `.env` com as configurações do seu banco de dados.

2. Para migrar as tabelas necessárias para o banco de dados, execute o seguinte comando:

```bash
php artisan migrate
```

### Iniciar o Servidor Laravel

Para iniciar o servidor Laravel localmente, execute o seguinte comando:

```bash
php artisan serve
```

### Configuração do Frontend

Para configurar o frontend da aplicação, siga estes passos:

1. Navegue até o diretório do frontend:

```bash
cd ../frontend
```

### Instalar Dependências JavaScript

Antes de executar o frontend da aplicação, instale as dependências JavaScript necessárias executando o seguinte comando:

```bash
npm install
```

### Iniciar Servidor de Desenvolvimento Vite.js

Para iniciar o servidor de desenvolvimento Vite.js, execute o seguinte comando:

```bash
npm run dev
```

### Acessar a Aplicação

Para acessar a aplicação:

- Frontend: Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000).
- Backend API: Abra seu navegador e vá para [http://localhost:8000](http://localhost:8000).

### Uso

Utilize a aplicação seguindo estas etapas:

- Registre-se ou faça login em sua conta.
- Publique perguntas, forneça respostas e participe de discussões.
- Gerencie seu perfil e visualize sua atividade.

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para bifurcar este repositório e enviar pull requests com suas melhorias.

### Licença

Este projeto está licenciado sob a Licença MIT.
