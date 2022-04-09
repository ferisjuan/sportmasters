import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class PlayerType {
    @Field(() => ID)
    name: string = ''
}
