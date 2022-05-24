import * as Yup from 'yup'

import { getNsTranslation } from '~/i18n'

const t = getNsTranslation('loginForm')

export const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required(t('errors.email.required')).email(t('errors.email.invalid')),
    password: Yup.string().required(t('errors.password.equired')),
})
