import { registerDecorator, ValidationOptions } from 'class-validator';
import { prisma } from '../../../context';

export function IsSchoolExists(validationOptions?: ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: {
                async validate(schoolId: string) {
                    const school = await prisma.school.findUnique({ where: { id: schoolId } })

                    return !!school
                }
            }
        })
    }
}
