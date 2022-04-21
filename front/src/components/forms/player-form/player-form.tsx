// @vendors

import { Button, Group, Select, Text, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { DatePicker } from '@mantine/dates'
import { BsSave } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

// @hooks
import { useGuardianOptions, useStores } from '~/hooks'

// @interfaces
import { Player } from '~/generated/graphql'

//@schemas
import { PlayerFormSchema } from './schema'

//@utils
import { getNsTranslation } from '~/utils/getTranslation'

interface PlayerFormProps {
    setIsModalOpen: (isOpen: boolean) => void
}

export const PlayerForm: React.VFC<PlayerFormProps> = ({ setIsModalOpen }) => {
    const { guardianOptions } = useGuardianOptions()

    const t = getNsTranslation('playerData')
    const { playerStore } = useStores()

    const onSubmit = async (values: Player): Promise<void> => {
        try {
            const rawPlayer = {} as Player
            const player = { ...rawPlayer, ...values }
            await playerStore.addPlayer(player)

            setIsModalOpen(false)
        } catch (error) {
            console.error(error)
        }
    }

    const form = useForm<Player>({
        schema: yupResolver(PlayerFormSchema),
        initialValues: {} as Player,
    })

    return (
        <form onSubmit={form.onSubmit(values => onSubmit(values))}>
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
                    data={[
                        { label: t('idSelect.dni'), value: 'dni' },
                        { label: t('idSelect.passport'), value: 'passport' },
                    ]}
                    id="playerIdType"
                    label={t('idSelect.placeholder')}
                    name="playerIdType"
                    placeholder={t('idSelect.placeholder')}
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
                        label={t('height')}
                        {...form.getInputProps('weight')}
                    />
                    <TextInput
                        required
                        label={t('weight')}
                        description={t('weightUnit')}
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
                    data={guardianOptions}
                    id="guardianType"
                    label={t('guardianPlaceholder')}
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
                    data={[
                        { label: t('idSelect.dni'), value: 'dni' },
                        { label: t('idSelect.passport'), value: 'passport' },
                    ]}
                    id="guardianIdType"
                    label={t('idSelect.placeholder')}
                    name="guardianIdType"
                    placeholder={t('idSelect.placeholder')}
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
