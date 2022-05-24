import * as Yup from 'yup'

import { getNsTranslation } from '~/i18n'

const t = getNsTranslation('changePasswordForm')

export const ChangePasswordFormSchema = Yup.object().shape({
    password: Yup.string().required(t('errors.passwordRequired')).min(5, t('errors.passwordTooShort')),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], t('errors.passwordsMismatch')),
})
