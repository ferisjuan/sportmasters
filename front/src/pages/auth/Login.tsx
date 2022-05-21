// @vendors
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { TextInput, Button, Loader, Text, PasswordInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @components
import { SMContainer } from '~/components'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { useForgotPasswordMutation, useSigninMutation } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'

const Login = (): JSX.Element => {
    const { t } = useTranslation('login')

    const navigate = useNavigate()

    const [isDissabled, setIsDissabled] = useState(true)
    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validationRules: {
            email: value => /^\S+@\S+$/.test(value),
        },
    })

    const { mutate: signin } = useSigninMutation({
        onSuccess: () => {
            navigate(`../${ROUTES.dashboard}`, { replace: true })

            setIsLoginLoading(true)

            localStorage.setItem('email', form.values.email)
        },
        onError: () => {
            showSMNotification(t('wrongCredentials'), 'ERROR', false)
        },
    })

    const { mutate: reqPasswordChange } = useForgotPasswordMutation({
        onSuccess: () => {
            showSMNotification(t('resetPassword'), 'INFO', false)
        },
        onError: () => {
            showSMNotification(t('wrongEmail'), 'ERROR', false)
        },
    })

    useEffect(() => {
        setIsDissabled(!form.errors.email && form.values.password.length === 0)
    }, [form.errors.email, form.values.password])

    const handleFormSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>): void => {
            event.preventDefault()

            signin(form.values)
        },
        [form.values.email, form.values.password],
    )

    const handleForgotPassword = useCallback(
        (email: string): void => {
            reqPasswordChange({ email })
        },
        [form.values.email],
    )

    return (
        <SMContainer>
            {isLoginLoading ? (
                <Loader color="indigo" variant="bars" />
            ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    <TextInput
                        required
                        label={t('emailLabel')}
                        placeholder={t('emailPlaceholder')}
                        error={form.errors.email && t('emailError')}
                        value={form.values.email}
                        onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                    />

                    <PasswordInput
                        label={t('passwordLabel')}
                        placeholder={t('passwordPlaceholder')}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                        }
                        icon={<AiTwotoneLock />}
                        {...form.getInputProps('password')}
                    />

                    <Button disabled={isDissabled} sx={{ marginTop: '20px' }} type="submit">
                        {t('loginButton')}
                    </Button>

                    <Text size="xs" sx={{ cursor: 'pointer' }} onClick={() => handleForgotPassword(form.values.email)}>
                        {t('forgotPassword')}
                    </Text>
                </form>
            )}
        </SMContainer>
    )
}

export default Login
