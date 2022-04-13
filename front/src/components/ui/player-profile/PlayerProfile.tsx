import { Grid } from '@mantine/core'

export interface PlayerProfileProps {
    children?: React.ReactNode
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({ children }) => {
    return (
        <Grid grow gutter="sm" sx={{ background: 'gray' }}>
            {children}
        </Grid>
    )
}
