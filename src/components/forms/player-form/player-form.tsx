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
        >
            {({ values, setFieldValue }: FormikProps<PlayerData>) => (
                <Form>
                    <Text mb={30} size="lg" weight={700}>
                        {t('playerData.formTitle')}
                    </Text>

                    <Text size="md" weight={700}>
                        {t('playerData.formTitleStudentData')}
                    </Text>

                    <Group spacing="xs">
                        <SMTextInput
                            label={t('playerData.name')}
                            name="playerName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerName}
                        />
                        <SMTextInput
                            label={t('playerData.lastName')}
                            name="playerLastName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerLastName}
                        />
                    </Group>

                    <Group>
                        <SMTextInput
                            label={t('playerData.email')}
                            name="playerEmail"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            size={SIZE.sm}
                            value={values.playerEmail}
                        />
                        <SMTextInput
                            label={t('playerData.phone')}
                            name="playerPhone"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            value={values.playerPhone}
                        />
                    </Group>

                    <Group>
                        <SMTextInput
                            label={t('playerData.birthday')}
                            description="dd/mm/yyyy"
                            name="playerBirthday"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            size={SIZE.md}
                            required
                            value={values.playerBirthday}
                        />
                        <SMTextInput
                            label={t('playerData.height')}
                            description="(cm)"
                            name="playerHeight"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.playerHeight}
                        />
                        <SMTextInput
                            label={t('playerData.weight')}
                            description="(kg)"
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

                    <Group>
                        <Field
                            as={Select}
                            data={guardianOptions}
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

                    <Group spacing="xs">
                        <SMTextInput
                            label={t('playerData.name')}
                            name="guardianName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianName}
                        />
                        <SMTextInput
                            label={t('playerData.lastName')}
                            name="guardianLastName"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            value={values.guardianLastName}
                        />
                    </Group>

                    <Group>
                        <SMTextInput
                            label={t('playerData.email')}
                            name="guardianEmail"
                            onChange={({ target: { name, value } }) => setFieldValue(name, value, true)}
                            required
                            size={SIZE.sm}
                            value={values.guardianEmail}
                        />
                        <SMTextInput
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
                        <Button leftIcon={<BsSave />} type="submit">
                            {t('playerData.save')}
                        </Button>
                    </Group>
                </Form>
            )}
        </Formik>
    )
}
