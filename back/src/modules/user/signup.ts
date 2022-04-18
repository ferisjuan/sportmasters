// @vendors
import "reflect-metadata"
import { Arg, Mutation, Resolver } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { prisma } from '../../context';
import { User } from '@generated/type-graphql'
import { SignupInput } from './signup/SignupInput';

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
    }: SignupInput): Promise<Partial<User> | null> {
        const hashedPassword = await bcrypt.hash(password, 12);

        try {
            return await prisma.user.create({
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
        } catch (error) {
            return error
        }
    }
}
