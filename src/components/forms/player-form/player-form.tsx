// @vendors
import { useEffect, useState } from 'react'
import { Field, Formik, Form } from 'formik'
import { useTranslation } from 'react-i18next'
import { Select, Text, TextInput } from '@mantine/core'

// @components
import { PlayerData } from './player-form.interface'

// @enums
import { FAMILY_SUPPORT } from 'enums'

const initialValues: PlayerData = {
    birthday: '',
    email: '',
    height: 0,
    id: '',
    lastName: '',
    name: '',
    phone: '',
    guardian: '',
    weight: 0,
}

const guardianOptions = Object.entries(FAMILY_SUPPORT).map(([key, value]) => ({
    key,
    value,
}))

type TRecord = Record<string, string>[]

export const PlayerForm: React.VFC = () => {
    const { t } = useTranslation()

    const [parsedGuardianOptions, setParsedGuardianOptions] = useState<TRecord>([])

    useEffect(() => {
        const _guardianOptions = guardianOptions.map(({ key, value }) => ({
            key,
            value: t(`familySupport.${value}`),
        }))

        setParsedGuardianOptions(_guardianOptions)
    }, [t])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: PlayerData, actions: { setSubmitting: (arg0: boolean) => void }) => {
                console.log(values)
                actions.setSubmitting(false)
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <Text size="md" weight={700}>
                        {t('playerData.formTitle')}
                    </Text>

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.name')}
                        id="name"
                        name="name"
                        placeholder={t('playerData.name')}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.lastName')}
                        id="lastName"
                        name="lastName"
                        placeholder={t('playerData.lastName')}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.email')}
                        id="email"
                        name="email"
                        placeholder={t('playerData.email')}
                    />

                    <Field
                        as={Select}
                        data={parsedGuardianOptions}
                        id="guardian"
                        label={t('playerData.guardianPlaceholder')}
                        name="guardian"
                        placeholder={t('playerData.guardianPlaceholder')}
                        value={values.guardian}
                        onChange={(value: string) => handleChange(value)}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.phone')}
                        id="phone"
                        name="phone"
                        placeholder={t('playerData.phone')}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.birthday')}
                        id="birthday"
                        name="birthday"
                        placeholder={t('playerData.birthday')}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.height')}
                        id="height"
                        name="height"
                        placeholder={t('playerData.height')}
                    />

                    <Field
                        as={TextInput}
                        required
                        label={t('playerData.weight')}
                        id="weight"
                        name="weight"
                        placeholder={t('playerData.weight')}
                    />
                </Form>
            )}
        </Formik>
    )
}
