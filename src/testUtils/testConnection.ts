require("dotenv").config();
import { MikroORM } from "@mikro-orm/core/MikroORM";
// import { IDatabaseDriver } from "@mikro-orm/core";
import entities from "../entities";
import { UmzugMigration } from "@mikro-orm/migrations";

export const testConnection = async (): Promise<UmzugMigration[]> => {
    const orm = await MikroORM.init({
        entities: [...entities],
        dbName: process.env.DB_TEST_NAME,
        password: process.env.DB_PASSWORD,
        type: "postgresql",
    });
    return await orm.getMigrator().up();
};
