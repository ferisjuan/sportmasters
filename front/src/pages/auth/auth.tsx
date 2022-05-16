// @vendors
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { getAuth, sendPasswordResetEmail } from '@firebase/auth'
import { TextInput, Button, PasswordInput, Container, Loader } from '@mantine/core'
import { useForm } from '@mantine/hooks'

// @generated
import { useSigninMutation } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'
import { getSessionCookie } from '../../utils/cookies'

const newLocal = true
const Auth = (): JSX.Element => {
    const { t } = useTranslation('notifications')
    const [isDissabled, setIsDissabled] = useState(newLocal)
    const [isLoginLoading, setIsLoginLoading] = useState(false)

    const signin = useSigninMutation()

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

            signin.mutate(form.values)

            setIsLoginLoading(true)
            showSMNotification(t('auth.wrongCredentials'), 'ERROR', false)
        },
        [form.values.email, form.values.password, t],
    )
    useEffect(() => {
        console.log('🚀🚀🚀 ~ file: auth.tsx ~ line 42 ~ res', getSessionCookie())
    })

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

                    <Button disabled={!form.values.email} sx={{ marginTop: '20px' }} onClick={handleForgotPassword}>
                        Olvidé mi password
                    </Button>
                </form>
            )}
        </Container>
    )
}

export default Auth
