import * as Yup from 'yup'

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const PlayerFormSchema = Yup.object().shape({
    birthday: Yup.date().required('required'),
    email: Yup.string().email('email').required('required'),
    guardian: Yup.string().required('required'),
    height: Yup.number().required('required'),
    lastName: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    name: Yup.string().min(3, 'min').max(10, 'max').required('required'),
    phone: Yup.string().matches(phoneRegExp, 'phone').min(10, 'minPhone').max(10, 'maxPhone').required('required'),
    weight: Yup.number().required('required'),
})
