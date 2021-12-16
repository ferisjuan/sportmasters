/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @vendors
import React, { useEffect, useState } from 'react'
import { Field, Formik, Form, FormikProps } from 'formik'
import { useTranslation } from 'react-i18next'
import { Button, Group, Select, Text, TextInput } from '@mantine/core'

// @components
import { PlayerData } from './player-form.interface'

// @icons
import { BsSave } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

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

interface PlayerFormProps {
    setIsModalOpen: (isOpen: boolean) => void
}

export const PlayerForm: React.VFC<PlayerFormProps> = ({ setIsModalOpen }) => {
    const { t } = useTranslation()

    const [parsedGuardianOptions, setParsedGuardianOptions] = useState<TRecord>([])

    useEffect(() => {
        const _guardianOptions = guardianOptions.map(({ key, value }) => ({
            value: key,
            label: t(`familySupport.${value}`),
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
            {({ values, setFieldValue }: FormikProps<PlayerData>) => (
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
                        onChange={(value: string) => setFieldValue('guardian', value)}
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
                    <Group mt={16} position="right">
                        <Button leftIcon={<FaTimes />} onClick={() => setIsModalOpen(false)} variant="outline">
                            {t('playerData.cancel')}
                        </Button>
                        <Button leftIcon={<BsSave />} type="submit">
                            {t('playerData.save')}
                        </Button>
                    </Group>
                </Form>
            )}
        </Formik>
    )
}
