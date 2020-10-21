import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import Express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { __prod__ } from "./utils/constants.util";
import { UserResolver } from './resolvers/UserResolver';

const main = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().up();

    const app = Express();

    const schema = await buildSchema({
        resolvers: [UserResolver],
        validate: false,
    });

    const apolloServer = new ApolloServer({
        schema,
        context: () => ({ em: orm.em }),
    });

    apolloServer.applyMiddleware({ app });

    const port = __prod__ ? process.env.PORT : 4000;

    app.listen(port, () => {
        console.log(`⚡ Server up at: http://localhost:${port}/graphql`);
    });
};

main();
