import { Container } from '@mantine/core'

export interface PlayerProfileProps {
    children?: React.ReactNode
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({ children }) => {
    return <Container sx={{ background: 'white' }}>{children}</Container>
}
