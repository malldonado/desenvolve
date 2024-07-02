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
git clone https://github.com/malldonado/desenvolve.git
```

## Backend Setup

Navigate to the backend directory:

```bash
cd desenvolve/api
```

### Install PHP Dependencies

To install PHP dependencies, run the following command:

```bash
composer install
```

### Configure and Migrate Database

Before running your application, follow these steps:

1. Configure your `.env` file with your database settings.

2. To migrate the necessary tables to the database, run the following command:

```bash
php artisan migrate
```

### Start Laravel Server

To start the Laravel server locally, run the following command:

```bash
php artisan serve
```

### Frontend Setup

To set up the frontend of the application, follow these steps:

1. Navigate to the frontend directory:

```bash
cd ../app
```

### Install JavaScript Dependencies

Before running the frontend of the application, install the necessary JavaScript dependencies by running the following command:

```bash
npm install
```

### Start Vite.js Development Server

To start the Vite.js development server, run the following command:

```bash
npm run dev
```

### Access the Application

To access the application:

- Frontend: Open your browser and go to [http://localhost:3000](http://localhost:3000).
- Backend API: Open your browser and go to [http://localhost:8000](http://localhost:8000).

### Usage

Use the application by following these steps:

- Register or log in to your account.
- Post questions, provide answers, and participate in discussions.
- Manage your profile and view your activity.

### Contributions

Contributions are welcome! Feel free to fork this repository and submit pull requests with your improvements.

### Licence

This project is licensed under the MIT License..
