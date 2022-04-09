import { buildSchema } from 'type-graphql';
import { PlayersResolver } from './resolvers';

export const schema = await buildSchema({
    resolvers: [PlayersResolver],
})
