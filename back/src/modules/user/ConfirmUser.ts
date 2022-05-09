// @vendors
import "reflect-metadata"
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'

// @context
import { Context } from '../../context';

// @redis
import { redis } from '../../redis';

@Resolver()
export class ConfirmUserResolver {
    @Mutation(() => Boolean)
    async confirmUser(
        @Arg("token") token: string,
        @Ctx() ctx: Context
    ) {
        try {
            const userId = await redis.get(token)

            if (!userId) return false

            await ctx.prisma.user.update({ where: { id: userId }, data: { confirmed: true } })

            await redis.del(token)

            return true
        } catch (error) {
            return error
        }
    }
}
