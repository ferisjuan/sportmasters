import { TextInput } from '@mantine/core'

// @enum
import { SIZE } from '~/enums'

interface SMTextInputProps {
    label: string
    description?: string
    error?: string
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    size?: SIZE
    value?: string
}

export const SMTextInput: React.VFC<SMTextInputProps> = ({
    label,
    description,
    error,
    name,
    onChange,
    required,
    size = SIZE.xs,
    value,
}) => (
    <TextInput
        description={description}
        error={error}
        id={name}
        label={label}
        name={name}
        onChange={onChange}
        placeholder={label}
        required={required}
        sx={{ flex: size }}
        value={value}
    />
)
