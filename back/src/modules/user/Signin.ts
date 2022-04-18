// @vendors
import "reflect-metadata"
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { compare } from 'bcryptjs'
import { Context, prisma } from '../../context';
import { User } from '@generated/type-graphql'

@Resolver(User)
export class SigninResolver {
    @Mutation(() => User, { nullable: true })
    async signin(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: Context
    ) {
        try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) return null

            const valid = await compare(password, user.password);

            if (!valid) return null

            ctx.req.session!.userId = user.id
        } catch (error) {
            return error
        }
    }
}
