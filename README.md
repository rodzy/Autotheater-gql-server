# Auto Theater server 🎪

Auto theater server the GraphQL + Node.js version of the REST API build with Laravel 7.x and specifically done for an auto cinema application.

[The REST version](https://github.com/rodzy/Autotheater-server)

## Set up
### Prerequisites

1. Node
2. Yarn v.1.22.4+
3. PostgreSQL 9.5+

### Installation

1. `fork` the repository to your account.
2. `clone` your `fork` into your local machine.
3. `cd autotheater-gql-server` on your terminal.
4. Run `yarn install` on your terminal to get all the dependencies used.
5. Setup your database environment keep in mind that this server was made using PostgreSQL in mind <br> Create a `.env` file as the following
   ```
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_NAME=autotheatergql
   DB_USERNAME= <your-username>
   DB_PASSWORD= <password>
   ```
6. Run `yarn db:migrate` to run the migrations and generate the database model.
7. Run `yarn watch` to compile all the `*.ts` files into `*.js`.
8. Run `yarn dev`, and you're ready to go server must be online on `http://localhost:4000/graphql`.

## Scripts

This project uses TypeScript watch to compile the code to JavaScript for a faster load time and better optimazation for *production*

The npm scripts:

```json
  "scripts": {
    "watch":"tsc -w",
    "dev":"nodemon dist/index.js",
    "dev:ts":"nodemon --exec src/index.ts",
    "start":"node dist/index.js",
    "start:ts":"ts-node src/index.ts"
  },
```

> Keep in mind that using dev:ts will be slower because of the re-compiling step 


## Data model

The current data model is composed by:

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

> AutoTheater is licensed under the [MIT license](https://opensource.org/licenses/MIT), developed and manatined by [@rodzy](https://github.com/rodzy)
