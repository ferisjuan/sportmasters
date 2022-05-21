import * as Yup from 'yup'

import { getNsTranslation } from '~/i18n'

const t = getNsTranslation('addPlayerFormErrors')

export const PlayerFormSchema = Yup.object().shape({
    birthday: Yup.date().required(t('birthdayRequired')),
    guardianEmail: Yup.string().email(t('guardianEmail')).required(t('guardianEmailIsRequired')),
    guardianId: Yup.string().required('required'),
    guardianIdType: Yup.string().required('required'),
    guardianLastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianPhone: Yup.number()
        .typeError(t('phoneErrors.phoneInvalidNumber'))
        .test('len', t('phoneErrors.phoneInvalidLenght'), val => val?.toString().length === 10)
        .required(t('phoneErrors.phoneRequired')),
    guardianType: Yup.string().required('required'),
    height: Yup.number().typeError('number').required('required'),
    lastName: Yup.string().min(2, 'min').max(10, 'max').required('required'),
    name: Yup.string().min(2, 'min').max(10, 'max').required('required'),
    playerEmail: Yup.string().email(t('email')).required(t('required')),
    playerId: Yup.string().required('required'),
    playerIdType: Yup.string().required('required'),
    playerPhone: Yup.number()
        .typeError(t('phoneErrors.phoneInvalidNumber'))
        .test('len', t('phoneErrors.phoneInvalidLenght'), val => val?.toString().length === 10)
        .required(t('phoneErrors.phoneRequired')),
    weight: Yup.number().typeError('number').required('required'),
})
