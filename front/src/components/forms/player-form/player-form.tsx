// @vendors
import { BsSave } from 'react-icons/bs'
import { Button, Group, Select, Text, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { FaTimes } from 'react-icons/fa'
import { useForm, yupResolver } from '@mantine/form'
import { useTranslation } from 'react-i18next'

// @hooks
import { useStores } from '~/hooks'

// @interfaces
import { PlayerCreateInput, useCreatePlayerMutation } from '~/generated/graphql'

//@schemas
import { PlayerFormSchema } from './schema'

//@utils
import { showSMNotification } from '~/utils'

export const PlayerForm: React.FC = () => {
    const { t } = useTranslation('addPlayerForm')

    const { playersStore } = useStores()

    const { mutate: createPlayer, error: createPlayerError } = useCreatePlayerMutation()

    const form = useForm<PlayerCreateInput>({
        initialValues: {} as PlayerCreateInput,
        schema: yupResolver(PlayerFormSchema),
    })

    const handleModalClose = (): void => {
        playersStore.isAddPlayerModalOpen = false
    }

    const handleOnSubmit = form.onSubmit((values): void => {
        const data = {
            ...values,
            school: { connect: { email: playersStore.rootStore.userStore.schoolEmail } },
        }

        createPlayer({
            data: {
                ...data,
                playerMedical: {
                    create: {
                        IMC: `${values.playerMedical?.create?.weight}`,
                        height: `${values.playerMedical?.create?.height}`,
                        weight: `${values.playerMedical?.create?.weight}`,
                        bloodType: `${values.playerMedical?.create?.bloodType}`,
                        healthProvider: `${values.playerMedical?.create?.healthProvider}`,
                    },
                },
                school: { connect: { email: playersStore.rootStore.userStore.schoolEmail } },
            },
        })

        handleModalClose()

        if (createPlayerError) {
            showSMNotification(`${createPlayerError}`, 'ERROR', false)
        }
    })

    return (
        <form onSubmit={handleOnSubmit}>
            <Text mb={30} size="lg" weight={700}>
                {t('formTitle')}
            </Text>

            <Text size="md" weight={700}>
                {t('formTitleStudentData')}
            </Text>

            <Group align="start" mb={16} grow>
                <TextInput label={t('name')} name="name" {...form.getInputProps('name')} />

                <TextInput name="lastName" label={t('lastName')} {...form.getInputProps('lastName')} />
            </Group>

            <Group align="start" mb={16} grow>
                <Select
                    data={t('idSelect', { returnObjects: true })}
                    id="playerIdType"
                    label={t('idSelectLabel')}
                    name="playerIdType"
                    placeholder={t('idSelectPlaceholder')}
                    sx={{ flex: 1 }}
                    {...form.getInputProps('playerData')}
                />

                <TextInput label={t('playerIdPlaceholder')} name="playerId" {...form.getInputProps('playerData')} />
            </Group>

            <Group align="start" mb={16} grow>
                <TextInput label={t('email')} name="playerEmail" {...form.getInputProps('playerEmail')} />

                <TextInput label={t('phone')} name="playerPhone" {...form.getInputProps('playerGuardian')} />
            </Group>

            <Group grow>
                <DatePicker
                    locale="es"
                    placeholder={t('birthday')}
                    label={t('birthday')}
                    {...form.getInputProps('playerData')}
                    description={t('dateDescription')}
                />

                <Group position="right" grow>
                    <TextInput
                        sx={() => ({
                            width: '50px',
                        })}
                        description={t('weightUnit')}
                        label={t('weight')}
                        {...form.getInputProps('playerMedical')}
                    />

                    <TextInput
                        label={t('height')}
                        description={t('heightUnit')}
                        {...form.getInputProps('playerMedical')}
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
                    sx={{ flex: 1 }}
                    {...form.getInputProps('playerGuardian')}
                />
            </Group>

            <Group align="start" mb={16} grow>
                <TextInput label={t('name')} name="guardianName" {...form.getInputProps('playerGuardian')} />

                <TextInput label={t('lastName')} name="guardianLastName" {...form.getInputProps('playerGuardian')} />
            </Group>
            <Group align="start" mb={16} grow>
                <Select
                    data={t('idSelect', { returnObjects: true })}
                    id="guardianIdType"
                    label={t('idSelectLabel')}
                    name="guardianIdType"
                    placeholder={t('idSelectPlaceholder')}
                    {...form.getInputProps('playerGuardian')}
                    sx={{ flex: 1 }}
                />

                <TextInput
                    label={t('guardianIdPlaceholder')}
                    name="guardianId"
                    {...form.getInputProps('playerGuardian')}
                />
            </Group>
            <Group align="start" grow>
                <TextInput label={t('email')} name="guardianEmail" {...form.getInputProps('playerGuardian')} />

                <TextInput label={t('phone')} name="guardianPhone" {...form.getInputProps('playerGuardian')} />
            </Group>

            <Group mt={30} position="right">
                <Button leftIcon={<FaTimes />} onClick={handleModalClose} variant="outline">
                    {t('cancel')}
                </Button>

                <Button disabled={false} leftIcon={<BsSave />} type="submit">
                    {t('save')}
                </Button>
            </Group>
        </form>
    )
}
