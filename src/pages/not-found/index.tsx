// @vendors
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Blockquote, Container, Text, Title } from '@mantine/core'

// @constants
import { REDIRECT_NAVIGATION_TIME, ROUTES } from '~/constants/index'
import { useTimer } from '~/hooks/timer'

export const NotFound = (): JSX.Element => {
    const { time } = useTimer(REDIRECT_NAVIGATION_TIME, 1000)

    const navigate = useNavigate()

    useEffect(() => {
        if (time === 0) {
            navigate(ROUTES.login, { replace: true })
        }
    }, [navigate, time])

    return (
        <Container
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                justifyContent: 'center',
                width: '500px',
            }}
        >
            <Container sx={{ display: 'flex' }}>
                <Title order={1} sx={{ borderRight: '1px solid black', paddingRight: '20px' }}>
                    404
                </Title>
                <Blockquote cite="- Sports Master">Parece que te saliste de la cancha</Blockquote>
            </Container>

            <Text size="sm" sx={{ alignSelf: 'flex-end', textAlign: 'left', fontFamily: 'monospace' }}>
                Redireccionando en {time / 1000}s
            </Text>
        </Container>
    )
}
