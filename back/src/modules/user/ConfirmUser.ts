// @vendors
import 'reflect-metadata'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'

// @constants
import { CONFIRM_USER_PREFIX } from '../../constants'

// @context
import { Context } from '../../context'

// @redis
import { redis } from '../../redis'

@Resolver()
export class ConfirmUserResolver {
    @Mutation(() => Boolean)
    async confirmUser(@Arg('token') token: string, @Ctx() ctx: Context): Promise<boolean> {
        try {
            const userId = await redis.get(`${CONFIRM_USER_PREFIX}${token}`)

            if (!userId) return false

            const user = await ctx.prisma.user.update({ where: { id: userId }, data: { confirmed: true } })

            await redis.del(token)

            ctx.req.session.userId = user.id

            return true
        } catch (error) {
            return error
        }
    }
}
