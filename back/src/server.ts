// @vendors
import "reflect-metadata"
import { ApolloServer } from "apollo-server";
import { Arg, buildSchema, Field, ID, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
export class Player {
    @Field(() => ID)
    name: string = ''
}

@Resolver(Player)
export class PlayersResolver {
    @Query(() => [Player])
    players(): Player[] {
        return [
            { name: 'John' },
            { name: 'Jane' },
        ]
    }
}

const schema = await buildSchema({
    resolvers: [PlayersResolver],
})

const server = new ApolloServer({
    schema,
})

server.listen(process.env.PORT || 4000).then(({ url }) => { console.log(`🚀 Server ready at ${url}`) })
