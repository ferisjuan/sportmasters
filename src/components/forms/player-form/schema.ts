import * as Yup from 'yup'

function validateNumberLength(val: number | undefined): boolean {
    if (!val) return false
    return val?.toString().length > 9 && val?.toString().length <= 10
}

export const PlayerFormSchema = Yup.object().shape({
    guardian: Yup.string().required('required'),
    guardianEmail: Yup.string().email('email').required('required'),
    guardianLastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    guardianPhone: Yup.number()
        .typeError('number')
        .test('len', 'phoneLenght', validateNumberLength)
        .required('required'),
    playerBirthday: Yup.date().typeError('date').required('required'),
    playerEmail: Yup.string().email('email').required('required'),
    playerHeight: Yup.number().typeError('number').required('required'),
    playerLastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    playerName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    playerPhone: Yup.number().typeError('number').test('len', 'phoneLenght', validateNumberLength).required('required'),
    playerWeight: Yup.number().typeError('number').required('required'),
})
