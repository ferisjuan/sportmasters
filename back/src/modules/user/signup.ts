// @vendors
import 'reflect-metadata'
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { SignupInput } from './signup/Signup.input'

// @context
import { Context } from '../../context'

// @generated
import { User } from '../../generated/typegraphql-prisma.ts'

// @utils
import { createConfirmationUrl, sendMail } from '../../utils'
import { HASH_SALT } from '../../constants/encryptation'

@Resolver(User)
export class SignupResolver {
    @Mutation(() => User)
    async signup(
        @Arg('data')
        { acceptsPrivacyPolicy, acceptsTermsOfService, email, firstName, lastName, password, schoolEmail }: SignupInput,
        @Ctx() ctx: Context,
    ): Promise<Partial<User> | null> {
        try {
            const hashedPassword = await bcrypt.hash(password, HASH_SALT)

            const user = await ctx.prisma.user.create({
                data: {
                    acceptsPrivacyPolicy,
                    acceptsTermsOfService,
                    email,
                    firstName,
                    lastName,
                    password: hashedPassword,
                    school: {
                        connect: {
                            email: schoolEmail,
                        },
                    },
                },
            })

            await sendMail(user.email, await createConfirmationUrl(user.id))

            return user
        } catch (error) {
            return error
        }
    }
}
