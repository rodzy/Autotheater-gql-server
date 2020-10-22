require("dotenv").config();

module.exports= {
    "default": true,
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": parseInt(process.env.DB_PORT),
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": true,
    "entities": ["src/entities"]
}