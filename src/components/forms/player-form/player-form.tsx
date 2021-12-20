/* eslint-disable @typescript-eslint/explicit-function-return-type */
// @vendors
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
import { useGuardianOptions } from './guardian-options'
import { useTranslation } from 'react-i18next'

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
                        <SMTextInput label={t('playerData.name')} name="name" required />
                        <SMTextInput label={t('playerData.lastName')} name="lastName" required />
                    </Group>

                    <Group>
                        <SMTextInput label={t('playerData.email')} name="email" size={SIZE.sm} />
                        <SMTextInput label={t('playerData.phone')} name="phone" />
                    </Group>

                    <Group>
                        <SMTextInput label={t('playerData.birthday')} name="birthday" size={SIZE.md} required />
                        <SMTextInput label={t('playerData.height')} name="height" required />
                        <SMTextInput label={t('playerData.weight')} name="weight" required />
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

                    <Group>
                        <SMTextInput label={t('playerData.email')} name="email" required size={SIZE.sm} />
                        <SMTextInput label={t('playerData.phone')} name="phone" required />
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
