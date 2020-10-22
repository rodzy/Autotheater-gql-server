require("dotenv").config();
import entities from "../entities";
import { Connection, createConnection } from "typeorm";

export const testConnection = async (): Promise<Connection> => {
    const conn = await createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT as string),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_TEST_NAME,
        synchronize: true,
        logging: false,
        entities: [...entities],
    });

    return conn;
};
