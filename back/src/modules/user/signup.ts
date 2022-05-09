// @vendors
import "reflect-metadata"
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { User } from '@generated/type-graphql'
import { SignupInput } from './signup/SignupInput';

// @context
import { Context } from '../../context';

// @utils
import { createConfirmationUrl, sendMail } from '../../utils'

@Resolver(User)
export class SignupResolver {
    @Mutation(() => User)
    async signup(@Arg("data") {
        acceptsPrivacyPolicy,
        acceptsTermsOfService,
        email,
        firstName,
        lastName,
        password,
        schoolId
    }: SignupInput,
        @Ctx() ctx: Context): Promise<Partial<User> | null> {
        try {
            const hashedPassword = await bcrypt.hash(password, 12);

            const user = await ctx.prisma.user.create({
                data: {
                    acceptsPrivacyPolicy,
                    acceptsTermsOfService,
                    email,
                    firstName,
                    lastName,
                    password: hashedPassword,
                    schoolId
                }
            })

            await sendMail(user.email, await createConfirmationUrl(user.id))

            return user
        } catch (error) {
            return error
        }
    }
}
