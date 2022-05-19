import * as Yup from 'yup'

import { getNsTranslation } from '~/i18n'

const t = getNsTranslation('playerDataErrors')
const tc = getNsTranslation('playerCategory')

export const PlayerFormSchema = Yup.object().shape({
    birthday: Yup.date().required(t('birthdayRequired')),
    guardianEmail: Yup.string().email(t('email')).required(),
    guardianId: Yup.string().required('required'),
    guardianIdType: Yup.string().required('required'),
    guardianLastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianPhone: Yup.string().min(10, 'phoneLenght').max(10, 'phoneLenght').required('required'),
    guardianType: Yup.string().required('required'),
    height: Yup.number().typeError('number').required('required'),
    lastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    name: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    playerBirthday: Yup.date().typeError('date').required('required'),
    playerEmail: Yup.string().email(t('email')).required(t('required')),
    playerId: Yup.string().required('required'),
    playerIdType: Yup.array()
        .max(1)
        .of(
            Yup.object().shape({
                label: Yup.string().required('Este campo es requerido'),
                value: Yup.string().required('Este campo es requerido'),
            }),
        ),
    playerPhone: Yup.number()
        .typeError(t('phoneErrors.phoneInvalidNumber'))
        .min(10, t('phoneErrors.phoneInvalidLenght'))
        .required(t('phoneErrors.phoneRequired')),
    weight: Yup.number().typeError('number').required('required'),
})
