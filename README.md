# Auto Theater server 🎪

Auto theater server the GraphQL + Node.js version of the REST API build with Laravel 7.x and specifically done for an auto cinema application.

[The REST version](https://github.com/rodzy/Autotheater-server)

<!-- ## Set up
### Prerequisites

1. PHP 7.2+
2. Composer (a dependency manager for PHP)
3. PostgreSQL 9.5+

### Installation

1. `fork` the repository to your account.
2. `clone` your `fork` into your local machine.
3. `cd autotheater-server` on your terminal.
4. Run `composer install` on your terminal to get all the dependecies used.
5. Setup your database environment keep in mind that this server was made using PostgreSQL in mind <br> Here's a quick example of the database connection on the .env file 
   ```
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=autotheater
   DB_USERNAME= <your-username>
   DB_PASSWORD= <password>
   ```
6. Run `composer dump-autoload` to generate optimized files.
7. Once your environment is all setup, run the migrations and seeders.
```
php artisan migrate:refresh --seed
```
8. Run `php artisan serve`, and you're ready to go server must be online on `http://127.0.0.1:8000/`. -->

## Data structure

The current data structure is composed by:

- Roles
- Users
- Genres
- Classifications (Movies)
- Movies
- Likes (Movies)
- Locations
- Billboards
- Product_Types
- Classification_Products (Products)
- Products
- Rating (Products)
- Tickets
- Reservations

<p align="center"><img src="https://github.com/rodzy/Autotheater-server/blob/master/AutoTheater-Database-v.3.PNG"/></p>
<em>Diagram to understand the basic flow of the aplication, <strong>some tables are not in the current data structure </strong></em>
<strong>Misc:</strong>
<p align="center">🔵 Primary Keys 🟠 Foreign keys 🟢 Dynamic API types for the frontend ⚪ Basic fields.</p>


## License

AutoTheater is licensed under the [MIT license](https://opensource.org/licenses/MIT).
