// @vendors
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from '@firebase/auth'
import { TextInput, Button, PasswordInput, Container, Loader } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useNavigate } from 'react-router'

// @utils
import { showSMNotification } from '~/utils'

const newLocal = true
export const Auth = (): JSX.Element => {
    const { t } = useTranslation('notifications')
    const [isDissabled, setIsDissabled] = useState(newLocal)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

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
                setIsLoading(true)

                const auth = getAuth()
                await signInWithEmailAndPassword(auth, form.values.email, form.values.password)

                navigate('/dashboard')

                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)

                showSMNotification(t('auth.wrongCredentials'), 'ERROR', false)
            }
        },
        [form.values.email, form.values.password, setIsLoading, t],
    )

    const handleForgotPassword = useCallback(async (): Promise<void> => {
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, form.values.email)

            showSMNotification(t('auth.resetPassword'), 'INFO', false)
        } catch (error) {
            showSMNotification(t('auth.wrongEmail'), 'ERROR', false)
        }
    }, [form.values.email, t])

    return (
        <Container size="xs" sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            {isLoading ? (
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

                    <Button disabled={!form.values.email} sx={{ marginTop: '20px' }} onClick={handleForgotPassword}>
                        Olvidé mi password
                    </Button>
                </form>
            )}
        </Container>
    )
}
