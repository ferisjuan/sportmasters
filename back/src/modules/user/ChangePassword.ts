// @vendors
import "reflect-metadata"
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { User } from '@generated/type-graphql'
import { hash } from 'bcryptjs';

// @contants
import { HASH_SALT, forgotPasswordPrefix } from '../../constants';

// @context
import { Context } from '../../context';

// @redis
import { redis } from '../../redis';

// @types
import { ChangePasswordInput } from './changePassword/ChangePassword.input';

@Resolver()
export class ChangePasswordResolver {
    @Mutation(() => User, { nullable: true })
    async changePassword(
        @Arg("data") { token, password }: ChangePasswordInput,
        @Ctx() ctx: Context
    ): Promise<User | null> {
        try {
            const userId = await redis.get(`${forgotPasswordPrefix}${token}`)

            if (!userId) return null

            const user = await ctx.prisma.user.findUnique({ where: { id: userId } })

            if (!user) return null

            redis.del(token)

            const hashedPassword = await hash(password, HASH_SALT)

            await ctx.prisma.user.update({ where: { id: userId }, data: { password: hashedPassword } })

            ctx.req.session.userId = user.id

            return user
        } catch (error) {
            return error
        }
    }
}
