// @vendors
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { Button, PasswordInput } from '@mantine/core'
import { yupResolver, useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'

// @components
import { SMContainer } from '~/components'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { useChangePasswordMutation } from '~/generated/graphql'

// @schema
import { ChangePasswordFormSchema } from './ChangePasswordForm.schema'

// @utils
import { showSMNotification } from '~/utils'

export const ChangePasswordForm: React.FC = () => {
    const { t } = useTranslation('changePasswordForm')

    const { token } = useParams()
    const navigate = useNavigate()

    const { mutate: changePassword } = useChangePasswordMutation({
        onSuccess: () => {
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

    return (
        <SMContainer>
            <form onSubmit={handleFormSubmit}>
                <PasswordInput
                    label={t('passwordLabel')}
                    placeholder={t('passwordPlaceholder')}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                    {...form.getInputProps('password')}
                />

                <PasswordInput
                    label={t('passwordConfirmLabel')}
                    placeholder={t('passwordConfirmPlaceholder')}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                    {...form.getInputProps('passwordConfirm')}
                />

                <Button sx={{ marginTop: '20px' }} type="submit">
                    {t('changePasswordButton')}
                </Button>
            </form>
        </SMContainer>
    )
}
