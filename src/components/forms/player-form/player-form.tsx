/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @vendors
import { useTranslation } from 'react-i18next'
import { Field, Formik, Form, FormikProps } from 'formik'
import { Button, Group, Select, Text } from '@mantine/core'

// @components
import { PlayerData } from './player-form.interface'
import { SMTextInput } from 'components/ui/textInput'

// @icons
import { BsSave } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

// @enums
import { SIZE } from 'enums'

// @hooks
import { useGuardianOptions } from './guardian-options'

//@schemas
import { PlayerFormSchema } from './schema'

const initialValues: PlayerData = {
    playerBirthday: '',
    guardian: '',
    guardianEmail: '',
    guardianLastName: '',
    guardianName: '',
    guardianPhone: '',
    id: '',
    playerEmail: '',
    playerHeight: 0,
    playerLastName: '',
    playerName: '',
    playerPhone: '',
    playerWeight: 0,
}

interface PlayerFormProps {
    setIsModalOpen: (isOpen: boolean) => void
}

export const PlayerForm: React.VFC<PlayerFormProps> = ({ setIsModalOpen }) => {
    const { t } = useTranslation()

    const { guardianOptions } = useGuardianOptions()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: PlayerData, actions: { setSubmitting: (arg0: boolean) => void }) => {
                console.log(values)
                actions.setSubmitting(false)
            }}
            validationSchema={PlayerFormSchema}
            validateOnChange
        >
            {({ errors, touched, setFieldValue, values, isValid }: FormikProps<PlayerData>) => (
                <Form>
                    <Text mb={30} size="lg" weight={700}>
                        {t('playerData.formTitle')}
                    </Text>

                    <Text size="md" weight={700}>
                        {t('playerData.formTitleStudentData')}
                    </Text>

                    <Group align="start">
                        <SMTextInput
                            error={
                                errors.playerName && touched.playerName
                                    ? t(`playerData.errors.${errors.playerName}`)
                                    : undefined
                            }
                            label={t('playerData.name')}
                            name="playerName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerName}
                        />
                        <SMTextInput
                            error={
                                errors.playerLastName && touched.playerLastName
                                    ? t(`playerData.errors.${errors.playerLastName}`)
                                    : undefined
                            }
                            name="playerLastName"
                            label={t('playerData.lastName')}
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerLastName}
                        />
                    </Group>
                    <Group align="start">
                        <SMTextInput
                            error={
                                errors.playerEmail && touched.playerEmail
                                    ? t(`playerData.errors.${errors.playerEmail}`)
                                    : undefined
                            }
                            label={t('playerData.email')}
                            name="playerEmail"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            size={SIZE.sm}
                            value={values.playerEmail}
                        />
                        <SMTextInput
                            error={
                                errors.playerPhone && touched.playerPhone
                                    ? t(`playerData.errors.${errors.playerPhone}`)
                                    : undefined
                            }
                            label={t('playerData.phone')}
                            name="playerPhone"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            value={values.playerPhone}
                        />
                    </Group>

                    <Group align="start">
                        <SMTextInput
                            error={
                                errors.playerBirthday && touched.playerBirthday
                                    ? t(`playerData.errors.${errors.playerBirthday}`)
                                    : undefined
                            }
                            description="dd/mm/yyyy"
                            label={t('playerData.birthday')}
                            name="playerBirthday"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            size={SIZE.md}
                            required
                            value={values.playerBirthday}
                        />
                        <SMTextInput
                            error={
                                errors.playerHeight && touched.playerHeight
                                    ? t(`playerData.errors.${errors.playerHeight}`)
                                    : undefined
                            }
                            description="(cm)"
                            label={t('playerData.height')}
                            name="playerHeight"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerHeight}
                        />
                        <SMTextInput
                            error={
                                errors.playerWeight && touched.playerWeight
                                    ? t(`playerData.errors.${errors.playerWeight}`)
                                    : undefined
                            }
                            description="(kg)"
                            label={t('playerData.weight')}
                            name="playerWeight"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerWeight}
                        />
                    </Group>

                    <hr />

                    <Text size="md" weight={700}>
                        {t('playerData.formTitleGuardianData')}
                    </Text>

                    <Group align="start">
                        <Field
                            as={Select}
                            data={guardianOptions}
                            error={
                                errors.guardian && touched.guardian
                                    ? t(`playerData.errors.${errors.guardian}`)
                                    : undefined
                            }
                            id="guardian"
                            label={t('playerData.guardianPlaceholder')}
                            name="guardian"
                            onChange={(value: string) => setFieldValue('guardian', value)}
                            placeholder={t('playerData.guardianPlaceholder')}
                            required
                            value={values.guardian}
                            sx={{ flex: 1 }}
                        />
                    </Group>

                    <Group align="start">
                        <SMTextInput
                            error={
                                errors.guardianName && touched.guardianName
                                    ? t(`playerData.errors.${errors.guardianName}`)
                                    : undefined
                            }
                            label={t('playerData.name')}
                            name="guardianName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianName}
                        />
                        <SMTextInput
                            error={
                                errors.guardianLastName && touched.guardianLastName
                                    ? t(`playerData.errors.${errors.guardian}`)
                                    : undefined
                            }
                            label={t('playerData.lastName')}
                            name="guardianLastName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianLastName}
                        />
                    </Group>

                    <Group align="start">
                        <SMTextInput
                            error={
                                errors.guardianEmail && touched.guardianEmail
                                    ? t(`playerData.errors.${errors.guardianEmail}`)
                                    : undefined
                            }
                            label={t('playerData.email')}
                            name="guardianEmail"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            size={SIZE.sm}
                            value={values.guardianEmail}
                        />
                        <SMTextInput
                            error={
                                errors.guardianPhone && touched.guardianPhone
                                    ? t(`playerData.errors.${errors.guardian}`)
                                    : undefined
                            }
                            label={t('playerData.phone')}
                            name="guardianPhone"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianPhone}
                        />
                    </Group>

                    <hr />

                    <Group mt={16} position="right">
                        <Button leftIcon={<FaTimes />} onClick={() => setIsModalOpen(false)} variant="outline">
                            {t('playerData.cancel')}
                        </Button>
                        <Button disabled={!isValid} leftIcon={<BsSave />} type="submit">
                            {t('playerData.save')}
                        </Button>
                    </Group>
                </Form>
            )}
        </Formik>
    )
}
