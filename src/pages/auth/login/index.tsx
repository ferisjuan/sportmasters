import { TextInput, Button, PasswordInput, Container } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'

export const Auth = (): JSX.Element => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },
    })

    return (
        <Container size="xs" sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <form
                onSubmit={form.onSubmit((values) => console.log(values))}
                style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
            >
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

                <Button type="submit" disabled={form.errors.email}>
                    Register
                </Button>
            </form>
        </Container>
    )
}
