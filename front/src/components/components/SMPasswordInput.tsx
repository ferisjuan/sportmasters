// @vendors
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'

import { PasswordInput } from '@mantine/core'

interface SMPasswordInputProps {
    t: (key: string) => string
    value: string
    setFieldValue: (value: string) => void
}

export const SMPasswordInput: React.FC<SMPasswordInputProps> = ({ setFieldValue, t, value }) => (
    <PasswordInput
        autoComplete="current-password"
        label={t('passwordLabel')}
        placeholder={t('passwordPlaceholder')}
        value={value}
        onChange={event => setFieldValue(event.currentTarget.value)}
        visibilityToggleIcon={({ reveal, size }) => (reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />)}
        icon={<AiTwotoneLock />}
    />
)
