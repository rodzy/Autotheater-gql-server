import "reflect-metadata";
import Express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
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
        context: ({ req, res }) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(parseInt(process.env.PORT), () => {
        console.log(
            `⚡ Server up at: http://localhost:${process.env.PORT}/graphql`
        );
    });
};

main().catch((err) => {
    console.log(err);
});
