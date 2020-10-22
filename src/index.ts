import "reflect-metadata";
import Express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { __prod__ } from "./utils/constants.util";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";

const main = async () => {
    await createConnection();

    const app = Express();

    const schema = await buildSchema({
        resolvers: [UserResolver],
        validate: false,
    });

    const apolloServer = new ApolloServer({
        schema,
        context: (req: any, res: any) => ({ req: req, res: res }),
    });

    apolloServer.applyMiddleware({ app });

    const port = __prod__ ? process.env.PORT : 4000;

    app.listen(port, () => {
        console.log(`⚡ Server up at: http://localhost:${port}/graphql`);
    });
};
main();
