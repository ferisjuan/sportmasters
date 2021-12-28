import * as Yup from 'yup'

export const PlayerFormSchema = Yup.object().shape({
    guardianEmail: Yup.string().email('email').required('required'),
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
    playerEmail: Yup.string().email('email').notRequired(),
    playerId: Yup.string().required('required'),
    playerIdType: Yup.string().required('required'),
    playerPhone: Yup.string().min(10, 'phoneLenght').max(10, 'phoneLenght').notRequired(),
    weight: Yup.number().typeError('number').required('required'),
})
