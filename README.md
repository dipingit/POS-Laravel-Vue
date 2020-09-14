## Installation

<p>Use the package manager (composer and npm) for installing.

1. Do the following commands for installing</p>

<!-- Github Markdown -->
```bash
git clone https://github.com/dipingit/POS-Laravel-Vue.git
cd POS-Laravel-Vue
composer install
npm install
copy .env.example .env
php artisan key:generate
```

1. Create a database and import apidev.sql
2. Setting database name, username, and password in your .env file
3. Do the following instructions if you're done setting database in .env

```bash
php artisan jwt:secret
php artisan config:cache
```

## To Run the application

```
php artisan serve
npm run serve
```

## Account Demo

1. email: admin@gmail.com Password: adminadmin

This is an edited version.