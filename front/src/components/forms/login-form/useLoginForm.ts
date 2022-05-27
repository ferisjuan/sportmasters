// @vendors
import { SyntheticEvent } from 'react'
import { useForm, yupResolver } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @components

// @constants
import { ROUTES } from '~/constants'

// @generated
import { useForgotPasswordMutation, useSigninMutation } from '~/generated/graphql'

// @schema
import { LoginFormSchema } from './LoginForm.schema'

// @utils
import { showSMNotification } from '~/utils'

interface UseLoginForm {
    getInputProps: (field: 'email' | 'password') => void
    isLoginLoading: boolean
    handleFormSubmit: (e: SyntheticEvent) => void
    handleForgotPassword: () => void
}

export const useLoginForm = (): UseLoginForm => {
    const { t } = useTranslation('login')
    const navigate = useNavigate()

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        schema: yupResolver(LoginFormSchema),
    })

    const { mutate: signin, isLoading: isLoginLoading } = useSigninMutation({
        onSuccess: () => {
            navigate(`../${ROUTES.dashboard}`, { replace: true })

            localStorage.setItem('email', form.values.email)
        },
        onError: () => {
            showSMNotification(t('wrongCredentials'), 'ERROR', false)
        },
    })

    const { mutate: reqPasswordChange, isLoading: isPasswordChangeLoading } = useForgotPasswordMutation({
        onSuccess: () => {
            showSMNotification(t('resetPassword'), 'INFO', false)
        },
    })

    const handleFormSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()

        const { hasErrors } = form.validate()

        if (hasErrors) return

        signin(form.values)
    }

    const handleForgotPassword = (): void => {
        if (!form.values.email) {
            showSMNotification(t('emailRequired'), 'ERROR', false)

            return
        }

        reqPasswordChange({ email: form.values.email })
    }

    return {
        getInputProps: (field: 'email' | 'password') => form.getInputProps(field),
        isLoginLoading: isLoginLoading || isPasswordChangeLoading,
        handleFormSubmit,
        handleForgotPassword,
    }
}
