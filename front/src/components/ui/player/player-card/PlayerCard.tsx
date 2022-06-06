// @vendors
import { observer } from 'mobx-react-lite'
import { Card, Container, Image, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @generated
import { Field_Position } from '~/generated/graphql'

// @interfaces
interface PlayerCardProps {
    image: string
    lastName: string
    fieldPosition: Field_Position | undefined | null
}

export const PlayerCard: React.FC<PlayerCardProps> = observer(({ image, fieldPosition, lastName }) => {
    const { t } = useTranslation('fieldPosition')

    return (
        <Card
            radius="xs"
            shadow="sm"
            component="article"
            sx={theme => ({ backgroundColor: theme.colors.yellow[5], height: '230px' })}
        >
            <Card.Section>
                <Container fluid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image alt="Player image" fit="contain" src={image || ''} width={120} />
                </Container>
            </Card.Section>

            <Container>
                <Text align="center" mt={8} size="xl" transform="uppercase" weight={600}>
                    {lastName}
                </Text>
            </Container>

            <Text align="center" size="md" weight={300}>
                {t(`${fieldPosition}`) || 'Position not found'}
            </Text>
        </Card>
    )
})
