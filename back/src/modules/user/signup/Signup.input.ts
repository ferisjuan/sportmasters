// @vendors
import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

// @decorators
import { IsEmailAlreadyExists } from './IsEmailAlreadyExists';

// @shared
import { PasswordInput } from '../../shared';

@InputType()
export class SignupInput extends PasswordInput {
    @Field()
    acceptsPrivacyPolicy: boolean

    @Field()
    acceptsTermsOfService: boolean

    @Field()
    @IsEmail()
    @IsEmailAlreadyExists({ message: 'Email already exists' })
    email: string

    @Field()
    @Length(2, 15)
    firstName: string

    @Field()
    @Length(2, 15)
    lastName: string

    @Field()
    @IsEmail()
    schoolEmail: string
}
