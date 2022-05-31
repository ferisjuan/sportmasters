// @vendors
import { SyntheticEvent } from 'react'
import { GetInputPropsPayload } from '@mantine/form/lib/types'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { yupResolver, useForm } from '@mantine/form'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { useChangePasswordMutation } from '~/generated/graphql'

// @schema
import { ChangePasswordFormSchema } from './ChangePasswordForm.schema'

// @utils
import { showSMNotification } from '~/utils'

interface UseChangePasswordForm {
    getInputProps: (key: 'password' | 'passwordConfirm') => GetInputPropsPayload
    handleFormSubmit: (e: SyntheticEvent) => void
    isChangePasswordLoading: boolean
}

export const useChangePasswordForm = (): UseChangePasswordForm => {
    const { t } = useTranslation('changePasswordForm')
    const { token } = useParams()

    const navigate = useNavigate()

    const { mutate: changePassword, isLoading: isChangePasswordLoading } = useChangePasswordMutation({
        onSuccess: () => {
            showSMNotification(t('success.passwordChanged'), 'INFO', false)

            navigate(`../${ROUTES.login}`, { replace: true })
        },
        onError: error => {
            showSMNotification(`${error}`, 'ERROR', false)
        },
    })

    const form = useForm({
        initialValues: {
            password: '',
            passwordConfirm: '',
        },
        schema: yupResolver(ChangePasswordFormSchema),
    })

    const handleFormSubmit = (e: { preventDefault: () => void }): void => {
        e.preventDefault()

        const { hasErrors } = form.validate()

        if (hasErrors) return

        changePassword({
            data: {
                password: form.values.password,
                token: token || '',
            },
        })
    }

    return {
        getInputProps: form.getInputProps,
        handleFormSubmit,
        isChangePasswordLoading,
    }
}
