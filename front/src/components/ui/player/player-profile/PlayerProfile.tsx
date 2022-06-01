// @vendors
import { Card, Group, Tabs } from '@mantine/core'

// @components
import { MedicalDataProfile } from './MedicalDataProfile'
import { PersonalDataProfile } from './PersonalDataProfile'
import { PlayerAttendance } from './player-attendance/PlayerAttendance'
import { ProfileData } from './ProfileData'
import { SMContainer } from '../../common'
import { SportData } from './SportDataProfile'

export const PlayerProfile: React.FC = () => {
    return (
        <SMContainer>
            <Group direction="row">
                <ProfileData />

                <Card shadow="sm" sx={{ width: '618px', height: '85vh', display: 'flex', paddingTop: '80px' }}>
                    <Tabs grow style={{ width: '100%' }}>
                        <Tabs.Tab label="Datos Personales">
                            <PersonalDataProfile />
                        </Tabs.Tab>

                        <Tabs.Tab label="Datos Medicos">
                            <MedicalDataProfile />
                        </Tabs.Tab>

                        <Tabs.Tab label="Datos Deportivos">
                            <SportData />
                        </Tabs.Tab>

                        <Tabs.Tab label="Asistencia">
                            <PlayerAttendance />
                        </Tabs.Tab>
                    </Tabs>
                </Card>
            </Group>
        </SMContainer>
    )
}
