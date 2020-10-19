import { MikroORM } from "@mikro-orm/core";
require("dotenv").config();
import path from "path";
import { __prod__ } from "./utils/constants.util";


export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [],
    dbName: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    type: "postgresql",
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];