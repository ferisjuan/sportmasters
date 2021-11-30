import { Blockquote, Container, Title } from '@mantine/core'

export const NotFound = (): JSX.Element => (
    <Container sx={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}>
        <Title order={1} sx={{ borderRight: '1px solid black', paddingRight: '20px' }}>
            404
        </Title>
        <Blockquote cite="- Sports Master">Parece que te saliste de la cancha</Blockquote>
    </Container>
)
