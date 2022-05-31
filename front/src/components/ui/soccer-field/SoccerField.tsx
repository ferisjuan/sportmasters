// @vendors
import { Col, Container, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @hooks
import { useStores } from '~/hooks'

export const SoccerField: React.FC = () => {
    const { t } = useTranslation('fieldPosition')
    const {
        playerStore: {
            player: {
                playerData: { birthday },
            },
        },
    } = useStores()

    return (
        <Col span={3}>
            <Container
                sx={theme => ({
                    backgroundColor: '#180829',
                    borderRadius: theme?.radius.sm,
                    height: '230px',
                    width: '280px',
                })}
            >
                <Container
                    sx={{
                        border: '2px solid #ffffffaa',
                        height: '85%',
                        marginBottom: '8px',
                        overflow: 'hidden',
                        position: 'relative',
                        transform: 'perspective(600px) rotateX(30deg) scaleX(0.95) scaleY(1.1)',
                    }}
                >
                    <Container
                        sx={{
                            border: '2px solid #ffffff66',
                            borderRadius: '50%',
                            top: '-23px',
                            height: '40px',
                            left: '105px',
                            position: 'absolute',
                            transform: 'perspective(800px) rotateX(30deg) scaleX(0.95) scaleY(1.1)',
                            width: '20px',
                        }}
                    />
                    <Container
                        sx={{
                            border: '2px solid #ffffff66',
                            bottom: '-2px',
                            height: '20px',
                            left: '95px',
                            position: 'absolute',
                            transform: 'perspective(800px) rotateX(30deg) scaleX(0.95) scaleY(1.1)',
                            width: '50px',
                            zIndex: 40,
                        }}
                    />
                    <Container
                        sx={{
                            backgroundColor: '#180829',
                            border: '2px solid #ffffff66',
                            bottom: '-2px',
                            height: '65px',
                            left: '50px',
                            position: 'absolute',
                            transform: 'perspective(800px) rotateX(30deg) scaleX(0.95) scaleY(1.1)',
                            width: '140px',
                            zIndex: 20,
                        }}
                    />
                    <Container
                        sx={{
                            border: '2px solid #ffffff66',
                            borderRadius: '50%',
                            bottom: '40px',
                            height: '40px',
                            left: '110px',
                            position: 'absolute',
                            transform: 'perspective(800px) rotateX(30deg) scaleX(0.95) scaleY(1.1)',
                            width: '20px',
                        }}
                    />
                </Container>
                <Container>
                    <Text align="center" sx={{ color: 'white' }}>
                        {t(`${birthday}`)}
                    </Text>
                </Container>
            </Container>
        </Col>
    )
}
