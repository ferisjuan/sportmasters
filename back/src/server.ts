// @vendors
import "reflect-metadata"
import "dotenv/config"
import { ApolloServer } from "apollo-server"
import pkg from '@prisma/client'

// @schema
import { schema } from "./schema/index"

const { PrismaClient } = pkg
const prisma = new PrismaClient()

const server = new ApolloServer({
    context: () => ({prisma}),
    schema,
})

server.listen(process.env.PORT || 4000).then(({ url }) => { console.log(`🚀 Server ready at ${url}`) })
