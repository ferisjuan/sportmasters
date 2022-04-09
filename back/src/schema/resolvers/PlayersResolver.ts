import { Query, Resolver } from 'type-graphql';
import { PlayerType } from '../types/index';

@Resolver(PlayerType)
export class PlayersResolver {
    @Query(() => [PlayerType])
    players(): PlayerType[] {
        return [
            { name: 'John' },
            { name: 'Jane' },
        ]
    }
}
