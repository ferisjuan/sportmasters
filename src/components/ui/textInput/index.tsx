import { Field } from 'formik'
import { TextInput } from '@mantine/core'

// @enum
import { SIZE } from 'enums'

interface SMTextInputProps {
    label: string
    name: string
    required?: boolean
    size?: SIZE
}

export const SMTextInput: React.VFC<SMTextInputProps> = ({ label, name, required = false, size = SIZE.xs }) => (
    <Field
        as={TextInput}
        label={label}
        id={name}
        mt={8}
        name={name}
        placeholder={label}
        required={required}
        sx={{ flex: size }}
    />
)
