import { TextInput, Button, PasswordInput, Container } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'

export const Auth = (): JSX.Element => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },
        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
            password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
        },
    })
    return (
        <Container size="xs" sx={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    required
                    label="Email"
                    error={form.errors.email && 'Please specify valid email'}
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                />
                <PasswordInput
                    required
                    label="Password"
                    placeholder="Password"
                    error={
                        form.errors.password && 'Password should contain 1 number, 1 letter and at least 6 characters'
                    }
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                />
                <Button sx={{ marginTop: '10px' }} type="submit">
                    Register
                </Button>
            </form>
        </Container>
    )
}
