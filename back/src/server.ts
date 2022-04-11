// @vendors
import "reflect-metadata"
import "dotenv/config"
import { ApolloServer } from "apollo-server";

// @schema
import { schema } from "./schema/index";

console.log(process.env.PORT)

const server = new ApolloServer({
    schema,
})

server.listen(process.env.PORT || 4000).then(({ url }) => { console.log(`🚀 Server ready at ${url}`) })
