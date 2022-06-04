import { registerDecorator, ValidationOptions } from 'class-validator'
import { prisma } from '../../../context'

export function IsEmailAlreadyExists(validationOptions?: ValidationOptions) {
    return function (object: unknown, propertyName?: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: {
                async validate(email: string) {
                    const user = await prisma.user.findUnique({ where: { email } })

                    return !user
                },
            },
        })
    }
}
