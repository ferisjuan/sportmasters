import { Field } from 'formik'
import { TextInput } from '@mantine/core'

// @enum
import { SIZE } from 'enums'

interface SMTextInputProps {
    label: string
    description?: string
    name: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    size?: SIZE
    value: unknown
}

export const SMTextInput: React.VFC<SMTextInputProps> = ({
    label,
    description,
    name,
    onChange,
    required = false,
    size = SIZE.xs,
    value,
}) => (
    <Field
        as={TextInput}
        description={description}
        id={name}
        label={label}
        mt={16}
        name={name}
        onChange={onChange}
        placeholder={label}
        required={required}
        sx={{ flex: size }}
        value={value}
    />
)
