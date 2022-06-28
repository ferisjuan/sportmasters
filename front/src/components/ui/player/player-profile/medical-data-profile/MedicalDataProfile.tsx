// @vendors
import { Button, Grid, Group, Textarea, TextInput } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

// @hooks
import { useUpdatePersonalData } from '~/components/ui/player/player-profile/medical-data-profile/useMedicalDataProfile'

export const MedicalDataProfile: React.FC = observer(() => {
    const { t } = useTranslation('medicalData')

    const {
        handleUpdatePlayerMedical,
        height,
        setHeight,
        healthProvider,
        setHealthProvider,
        setDiseases,
        diseases,
        imc,
        setImc,
        weight,
        setWeight,
        bloodType,
        setBloodType,
        setSurgeries,
        surgeries,
        injuries,
        setInjuries,
        allergies,
        setAllergies,
        observations,
        setObservations,
    } = useUpdatePersonalData()

    return (
        <Grid p="md">
            <Grid.Col span={6}>
                <TextInput
                    label={t('healthProvider')}
                    value={healthProvider}
                    required
                    onChange={event => setHealthProvider(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('bloodType')}
                    value={bloodType}
                    required
                    onChange={event => setBloodType(event.target.value)}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <TextInput
                    label={t('height')}
                    value={height}
                    required
                    onChange={event => setHeight(event.target.value)}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <TextInput
                    label={t('weight')}
                    value={weight}
                    required
                    onChange={event => setWeight(event.target.value)}
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <TextInput label={t('bmi')} value={imc} required onChange={event => setImc(event.target.value)} />
            </Grid.Col>
            <Grid.Col span={3}>
                <TextInput
                    label={t('injuries')}
                    value={injuries}
                    required
                    onChange={event => setInjuries(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('surgeries')}
                    value={surgeries}
                    required
                    onChange={event => setSurgeries(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('diseasesSuffered')}
                    value={diseases}
                    required
                    onChange={event => setDiseases(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('allergies')}
                    value={allergies}
                    required
                    onChange={event => setAllergies(event.target.value)}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Textarea
                    label={t('comments')}
                    value={observations || ''}
                    required
                    onChange={event => setObservations(event.target.value)}
                />
            </Grid.Col>

            <Group
                sx={theme => ({
                    backgroundColor: theme.colors.gray[1],
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                })}
            >
                <Button onClick={handleUpdatePlayerMedical}>Guardar</Button>
            </Group>
        </Grid>
    )
})
