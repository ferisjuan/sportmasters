// @vendors
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { TextInput, Button, Container, Loader, Text } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @components
import { SMPasswordInput } from '~/components/components'

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
                showSMNotification(t('wrongCredentials'), 'ERROR', false)
            }
        },
        [form.values.email, form.values.password, t],
    )

    const handleForgotPassword = useCallback(
        async (email: string): Promise<void> => {
            reqPasswordChange.mutate({ email })

            showSMNotification(t('resetPassword'), 'INFO', false)
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
                        label={t('emailLabel')}
                        placeholder={t('emailPlaceholder')}
                        error={form.errors.email && t('emailError')}
                        value={form.values.email}
                        onChange={event => form.setFieldValue('email', event.currentTarget.value)}
                    />

                    <SMPasswordInput
                        value={form.values.password}
                        setFieldValue={v => form.setFieldValue('password', v)}
                        t={t}
                    />

                    <Button disabled={isDissabled} sx={{ marginTop: '20px' }} type="submit">
                        {t('loginButton')}
                    </Button>

                    <Text size="xs" sx={{ cursor: 'pointer' }} onClick={() => handleForgotPassword(form.values.email)}>
                        {t('forgotPassword')}
                    </Text>
                </form>
            )}
        </Container>
    )
}

export default Login
