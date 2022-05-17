// @vendors
import "reflect-metadata"
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { compare } from 'bcryptjs'

// @context
import { Context } from '../../context';
import { createConfirmationUrl, sendMail } from '../../utils';

// @generated
import { User } from '../../generated/typegraphql-prisma.ts';

@Resolver(User)
export class SigninResolver {
    @Mutation(() => User, { nullable: true })
    async signin(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: Context
    ) {
        try {
            const user = await ctx.prisma.user.findUnique({ where: { email } });

            if (!user) return null

            const valid = await compare(password, user.password);

            if (!valid) return null

            if (!user.confirmed) {
                await sendMail(user.email, await createConfirmationUrl(user.id))

                throw new Error('Please check your email and confirm your email address')
            }

            ctx.req.session.userId = user.id
        } catch (error) {
            return error
        }
    }
}
