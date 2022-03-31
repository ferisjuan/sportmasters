// @vendors
import { useTranslation } from 'react-i18next'
import { Field, Formik, Form, FormikProps } from 'formik'
import { Button, Group, Select, Text } from '@mantine/core'

// @components
import { PlayerData } from './player-form.interface'
import { SMTextInput } from '~/components/ui/textInput'

// @icons
import { BsSave } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

// @enums
import { SIZE } from '~/enums'

// @hooks
import { useGuardianOptions } from '~/hooks/guardian-options'

// @~/interfaces
import { IPlayer } from '~/interfaces'

//@schemas
import { PlayerFormSchema } from './schema'

// @stores
import { useStores } from '~/hooks/store'

const initialValues = {
    guardianEmail: '',
    guardianId: '',
    guardianIdType: '',
    guardianLastName: '',
    guardianName: '',
    guardianPhone: '',
    guardianType: 'NONE',
    height: 0,
    lastName: '',
    name: '',
    playerBirthday: new Date(),
    playerEmail: '',
    playerId: '',
    playerIdType: '',
    playerPhone: '',
    weight: 0,
}

interface PlayerFormProps {
    setIsModalOpen: (isOpen: boolean) => void
}

export const PlayerForm: React.VFC<PlayerFormProps> = ({ setIsModalOpen }) => {
    const { t } = useTranslation()

    const { playerStore } = useStores()

    const { guardianOptions } = useGuardianOptions()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values: PlayerData) => {
                try {
                    const rawPlayer = {} as IPlayer
                    const player = { ...rawPlayer, ...values }
                    await playerStore.addPlayer(player)

                    setIsModalOpen(false)
                } catch (error) {
                    console.error(error)
                }
            }}
            validationSchema={PlayerFormSchema}
            validateOnChange
        >
            {({ errors, isValid, touched, setFieldValue, values }: FormikProps<PlayerData>) => (
                <Form>
                    <Text mb={30} size="lg" weight={700}>
                        {t('playerData.formTitle')}
                    </Text>

                    <Text size="md" weight={700}>
                        {t('playerData.formTitleStudentData')}
                    </Text>

                    <Group align="start" mb={16}>
                        <SMTextInput
                            error={errors.name && touched.name ? t(`playerData.errors.${errors.name}`) : undefined}
                            label={t('playerData.name')}
                            name="name"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.name}
                        />
                        <SMTextInput
                            error={
                                errors.lastName && touched.lastName
                                    ? t(`playerData.errors.${errors.lastName}`)
                                    : undefined
                            }
                            name="lastName"
                            label={t('playerData.lastName')}
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.lastName}
                        />
                    </Group>

                    <Group align="start" mb={16}>
                        <Field
                            as={Select}
                            data={[
                                { label: t('playerData.idSelect.dni'), value: 'dni' },
                                { label: t('playerData.idSelect.passport'), value: 'passport' },
                            ]}
                            error={
                                errors.playerIdType && touched.playerIdType
                                    ? t(`playerData.errors.${errors.playerIdType}`)
                                    : undefined
                            }
                            id="playerIdType"
                            label={t('playerData.idSelect.placeholder')}
                            name="playerIdType"
                            onChange={(value: string) => setFieldValue('playerIdType', value)}
                            placeholder={t('playerData.idSelect.placeholder')}
                            required
                            value={values.playerIdType}
                            sx={{ flex: 1 }}
                        />

                        <SMTextInput
                            error={
                                errors.playerId && touched.playerId
                                    ? t(`playerData.errors.${errors.playerId}`)
                                    : undefined
                            }
                            label={t('playerData.playerIdPlaceholder')}
                            name="playerId"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerId}
                        />
                    </Group>

                    <Group align="start" mb={16}>
                        <SMTextInput
                            error={
                                errors.playerEmail && touched.playerEmail
                                    ? t(`playerData.errors.${errors.playerEmail}`)
                                    : undefined
                            }
                            label={t('playerData.email')}
                            name="playerEmail"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
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

                    <Group align="start" mb={16}>
                        <SMTextInput
                            error={
                                errors.playerBirthday && touched.playerBirthday
                                    ? t(`playerData.errors.${errors.playerBirthday}`)
                                    : undefined
                            }
                            description={t('playerData.dateDescription')}
                            label={t('playerData.birthday')}
                            name="playerBirthday"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            size={SIZE.md}
                            required
                            value={values.playerBirthday}
                        />

                        <SMTextInput
                            error={
                                errors.height && touched.height ? t(`playerData.errors.${errors.height}`) : undefined
                            }
                            description={t('playerData.heightUnit')}
                            label={t('playerData.height')}
                            name="height"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.height}
                        />
                        <SMTextInput
                            error={
                                errors.weight && touched.weight ? t(`playerData.errors.${errors.weight}`) : undefined
                            }
                            description={t('playerData.weightUnit')}
                            label={t('playerData.weight')}
                            name="weight"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.weight}
                        />
                    </Group>

                    <hr />

                    <Text size="md" weight={700}>
                        {t('playerData.formTitleGuardianData')}
                    </Text>

                    <Group align="start" mb={16}>
                        <Field
                            as={Select}
                            data={guardianOptions}
                            error={
                                errors.guardianType && touched.guardianType
                                    ? t(`playerData.errors.${errors.guardianType}`)
                                    : undefined
                            }
                            id="guardianType"
                            label={t('playerData.guardianPlaceholder')}
                            name="guardianType"
                            onChange={(option: string) => setFieldValue('guardianType', option)}
                            placeholder={t('playerData.guardianPlaceholder')}
                            required
                            value={values.guardianType}
                            sx={{ flex: 1 }}
                        />
                    </Group>

                    <Group align="start" mb={16}>
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
                                    ? t(`playerData.errors.${errors.guardianLastName}`)
                                    : undefined
                            }
                            label={t('playerData.lastName')}
                            name="guardianLastName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianLastName}
                        />
                    </Group>

                    <Group align="start" mb={16}>
                        <Field
                            as={Select}
                            data={[
                                { label: t('playerData.idSelect.dni'), value: 'dni' },
                                { label: t('playerData.idSelect.passport'), value: 'passport' },
                            ]}
                            error={
                                errors.guardianIdType && touched.guardianIdType
                                    ? t(`playerData.errors.${errors.guardianIdType}`)
                                    : undefined
                            }
                            id="guardianIdType"
                            label={t('playerData.idSelect.placeholder')}
                            name="guardianIdType"
                            onChange={(value: string) => setFieldValue('guardianIdType', value)}
                            placeholder={t('playerData.idSelect.placeholder')}
                            required
                            value={values.guardianIdType}
                            sx={{ flex: 1 }}
                        />

                        <SMTextInput
                            error={
                                errors.guardianId && touched.guardianId
                                    ? t(`playerData.errors.${errors.guardianId}`)
                                    : undefined
                            }
                            label={t('playerData.guardianIdPlaceholder')}
                            name="guardianId"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianId}
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
                                    ? t(`playerData.errors.${errors.guardianPhone}`)
                                    : undefined
                            }
                            label={t('playerData.phone')}
                            name="guardianPhone"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianPhone}
                        />
                    </Group>

                    <Group mt={30} position="right">
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
