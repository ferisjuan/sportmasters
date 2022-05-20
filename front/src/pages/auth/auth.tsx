// @vendors
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { TextInput, Button, PasswordInput, Container, Loader } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { useForgotPasswordMutation, useSigninMutation } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'

const Auth = (): JSX.Element => {
    const { t } = useTranslation('notifications')

    const navigate = useNavigate()

    const [isDissabled, setIsDissabled] = useState(true)
    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const signin = useSigninMutation()
    const reqPasswordChange = useForgotPasswordMutation()

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validationRules: {
            email: value => /^\S+@\S+$/.test(value),
        },
    })

    useEffect(() => {
        setIsDissabled(!form.errors.email && form.values.password.length === 0)
    }, [form.errors.email, form.values.password])

    const handleFormSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>): Promise<void> => {
            event.preventDefault()

            try {
                signin.mutate(form.values)

                setIsLoginLoading(true)

                localStorage.setItem('email', form.values.email)

                navigate(`../${ROUTES.dashboard}`, { replace: true })
            } catch (error) {
                showSMNotification(t('auth.wrongCredentials'), 'ERROR', false)
            }
        },
        [form.values.email, form.values.password, t],
    )

    const handleForgotPassword = useCallback(
        async (email: string): Promise<void> => {
            try {
                reqPasswordChange.mutate({ email })

                showSMNotification(t('auth.resetPassword'), 'INFO', false)
            } catch (error) {
                showSMNotification(t('auth.wrongEmail'), 'ERROR', false)
            }
        },
        [form.values.email, t],
    )

    return (
        <Container size="xs" sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            {isLoginLoading ? (
                <Loader color="indigo" variant="bars" />
            ) : (
                <form
                    onSubmit={event => handleFormSubmit(event)}
                    style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
                >
                    <TextInput
                        required
                        label="Email"
                        placeholder="your@email.com"
                        error={form.errors.email && 'Please specify valid email'}
                        value={form.values.email}
                        onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        value={form.values.password}
                        onChange={event => form.setFieldValue('password', event.currentTarget.value)}
                        visibilityToggleIcon={({ reveal, size }) =>
                            reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                        }
                        icon={<AiTwotoneLock />}
                    />

                    <Button disabled={isDissabled} sx={{ marginTop: '20px' }} type="submit">
                        Login
                    </Button>

                    <Button
                        disabled={!form.values.email}
                        sx={{ marginTop: '20px' }}
                        onClick={() => handleForgotPassword(form.values.email)}
                    >
                        Olvidé mi password
                    </Button>
                </form>
            )}
        </Container>
    )
}

export default Auth
