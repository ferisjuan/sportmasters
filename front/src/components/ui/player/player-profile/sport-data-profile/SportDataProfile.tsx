// @vendors

import { Button, Grid, Group, MultiSelect, Select, Textarea, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

// @hooks
import { useUpdateSportDataProfile } from '~/components/ui/player/player-profile/sport-data-profile/useSportDataProfile'

export const SportData: React.FC = observer(() => {
    const { t } = useTranslation('sportData')

    const {
        sport,
        handleUpdateSportPlayerData,
        setSport,
        category,
        setCategory,
        handedness,
        setHandedness,
        fieldPosition,
        setFieldPosition,
        admissionDate,
        setAdmissionDate,
        previousSchool,
        setPreviousSchool,
        shirtNumber,
        setShirtNumber,
        observations,
        setObservations,
    } = useUpdateSportDataProfile()

    return (
        <Grid grow gutter="xl" p="md">
            <Grid.Col span={6}>
                <MultiSelect
                    label={t('sports')}
                    required
                    value={sport}
                    data={t('sportsList', { returnObjects: true })}
                    onChange={setSport}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <Select
                    data={t('categories', { returnObjects: true })}
                    value={category}
                    label={t('category')}
                    required
                    onChange={setCategory}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <Select
                    data={t('handednessList', { returnObjects: true })}
                    value={handedness}
                    label={t('handedness')}
                    required
                    onChange={setHandedness}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    value={shirtNumber || ''}
                    label={t('jerseyNumber')}
                    required
                    onChange={event => setShirtNumber(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <Select
                    data={t('fieldPosition', { returnObjects: true })}
                    value={fieldPosition}
                    label={t('playingPosition')}
                    required
                    onChange={setFieldPosition}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <DatePicker value={admissionDate} label={t('dateOfEntry')} required onChange={setAdmissionDate} />
            </Grid.Col>
            <Grid.Col span={6}>
                <TextInput
                    value={previousSchool || ''}
                    label={t('previousTeams')}
                    required
                    onChange={event => setPreviousSchool(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={10}>
                <Textarea
                    value={observations || ''}
                    label={t('comments')}
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
                <Button onClick={handleUpdateSportPlayerData}>Guardar</Button>
            </Group>
        </Grid>
    )
})
