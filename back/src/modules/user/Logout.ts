import { Ctx, Mutation, Resolver } from "type-graphql"
import { AUTH_COOKIE_NAME } from '../../constants'
import { Context } from '../../context'
import { logger } from '../../logger'

@Resolver()
export class LogoutResolver {
    @Mutation(() => Boolean)
    async logout(
        @Ctx() { req, res }: Context
    ): Promise<Boolean> {
        return new Promise(
            (responce, rej) => req.session!.destroy(err => {
                if (err) {
                    logger.error(err)
                    return rej(false)
                }

                res.clearCookie(AUTH_COOKIE_NAME)

                responce(true)
            })
        )
    }
}
