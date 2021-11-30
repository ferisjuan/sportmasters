// @vendors
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { TextInput, Button, PasswordInput, Container } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const Auth = (): JSX.Element => {
    const auth = getAuth()

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    })

    const handleFormSubmit = (): void => {
        if (!form.validate) return

        // form.onSubmit((values) => console.log(values))
    }

    return (
        <Container size="xs" sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    error={form.errors.email && 'Please specify valid email'}
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                />

                <Button disabled={form.errors.email} sx={{ marginTop: '20px' }} type="submit">
                    Register
                </Button>
            </form>
        </Container>
    )
}
