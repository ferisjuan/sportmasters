// @vendors
import { useCallback } from 'react'
import { BsSave } from 'react-icons/bs'
import { Button, Group, Select, Text, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { FaTimes } from 'react-icons/fa'
import { useForm, yupResolver } from '@mantine/form'
import { useTranslation } from 'react-i18next'

// @interfaces
import { PlayerCreateInput, useCreatePlayerMutation } from '~/generated/graphql'

//@schemas
import { PlayerFormSchema } from './schema'

//@utils
import { showSMNotification } from '~/utils'

interface PlayerFormProps {
    setIsModalOpen: (isOpen: boolean) => void
}

export const PlayerForm: React.FC<PlayerFormProps> = ({ setIsModalOpen }) => {
    const { t } = useTranslation('playerData')

    const { mutate: createPlayer, error: createPlayerError } = useCreatePlayerMutation()

    const form = useForm<PlayerCreateInput>({
        schema: yupResolver(PlayerFormSchema),
        initialValues: {} as PlayerCreateInput,
    })

    const onSubmit = useCallback(
        form.onSubmit((values): void => {
            const data = {
                ...values,
                school: { connect: { id: 'cl284dtqt0000du6r7nbs9jcs' } },
            }

            createPlayer({ data })

            setIsModalOpen(false)

            if (createPlayerError) {
                showSMNotification(`${createPlayerError}`, 'ERROR', false)
            }
        }),
        [],
    )

    return (
        <form onSubmit={onSubmit}>
            <Text mb={30} size="lg" weight={700}>
                {t('formTitle')}
            </Text>

            <Text size="md" weight={700}>
                {t('formTitleStudentData')}
            </Text>

            <Group align="start" mb={16} grow>
                <TextInput label={t('name')} name="name" required {...form.getInputProps('name')} />
                <TextInput name="lastName" label={t('lastName')} required {...form.getInputProps('lastName')} />
            </Group>

            <Group align="start" mb={16} grow>
                <Select
                    data={t('idSelect', { returnObjects: true })}
                    id="playerIdType"
                    label={t('idSelectLabel')}
                    name="playerIdType"
                    placeholder={t('idSelectPlaceholder')}
                    required
                    sx={{ flex: 1 }}
                    {...form.getInputProps('playerIdType')}
                />

                <TextInput
                    label={t('playerIdPlaceholder')}
                    name="playerId"
                    required
                    {...form.getInputProps('playerId')}
                />
            </Group>

            <Group align="start" mb={16} grow>
                <TextInput required label={t('email')} name="playerEmail" {...form.getInputProps('playerEmail')} />

                <TextInput required label={t('phone')} name="playerPhone" {...form.getInputProps('playerPhone')} />
            </Group>

            <Group grow>
                <DatePicker
                    locale="es"
                    placeholder={t('birthday')}
                    label={t('birthday')}
                    required
                    {...form.getInputProps('placeOfBirth')}
                    description={t('dateDescription')}
                />

                <Group position="right" grow>
                    <TextInput
                        sx={() => ({
                            width: '50px',
                        })}
                        description={t('weightUnit')}
                        required
                        label={t('weight')}
                        {...form.getInputProps('weight')}
                    />

                    <TextInput
                        required
                        label={t('height')}
                        description={t('heightUnit')}
                        {...form.getInputProps('height')}
                    />
                </Group>
            </Group>
            <hr />

            <Text size="md" weight={700}>
                {t('formTitleGuardianData')}
            </Text>

            <Group align="start" mb={16}>
                <Select
                    data={t('guardianOptions', { returnObjects: true })}
                    id="guardianType"
                    label={t('guardianLabel')}
                    name="guardianType"
                    placeholder={t('guardianPlaceholder')}
                    required
                    sx={{ flex: 1 }}
                    {...form.getInputProps('guardianType')}
                />
            </Group>

            <Group align="start" mb={16} grow>
                <TextInput label={t('name')} name="guardianName" required {...form.getInputProps('guardianName')} />

                <TextInput
                    label={t('lastName')}
                    name="guardianLastName"
                    required
                    {...form.getInputProps('guardianLastName')}
                />
            </Group>
            <Group align="start" mb={16} grow>
                <Select
                    data={t('idSelect', { returnObjects: true })}
                    id="guardianIdType"
                    label={t('idSelectLabel')}
                    name="guardianIdType"
                    placeholder={t('idSelectPlaceholder')}
                    required
                    {...form.getInputProps('guardianIdType')}
                    sx={{ flex: 1 }}
                />

                <TextInput
                    label={t('guardianIdPlaceholder')}
                    name="guardianId"
                    required
                    {...form.getInputProps('guardianId')}
                />
            </Group>
            <Group align="start" grow>
                <TextInput label={t('email')} name="guardianEmail" required {...form.getInputProps('guardianEmail')} />

                <TextInput label={t('phone')} name="guardianPhone" required {...form.getInputProps('guardianPhone')} />
            </Group>

            <Group mt={30} position="right">
                <Button leftIcon={<FaTimes />} onClick={() => setIsModalOpen(false)} variant="outline">
                    {t('cancel')}
                </Button>

                <Button disabled={false} leftIcon={<BsSave />} type="submit">
                    {t('save')}
                </Button>
            </Group>
        </form>
    )
}
