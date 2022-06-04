// @vendors
import 'reflect-metadata'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { v4 } from 'uuid'
import { FORGOT_PASSWORD_PREFIX } from '../../constants'

// @context
import { Context } from '../../context'

// @redis
import { redis } from '../../redis'

// @utils
import { sendMail } from '../../utils'

@Resolver()
export class ForgotPassword {
    @Mutation(() => Boolean)
    async forgotPassword(@Arg('email') email: string, @Ctx() ctx: Context): Promise<boolean> {
        try {
            const user = await ctx.prisma.user.findUnique({ where: { email } })

            if (!user) return true

            const token = v4()

            await redis.set(`${FORGOT_PASSWORD_PREFIX}${token}`, user.id, 'EX', 60 * 15) // 15 min expiration

            await sendMail(user.email, `${process.env.FRONT_URL}/user/change-password/${token}'`)

            return true
        } catch (error) {
            return error
        }
    }
}
