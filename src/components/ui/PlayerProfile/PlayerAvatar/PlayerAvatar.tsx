// @vendors
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Image, Loader, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { IPlayer } from '../../../../interfaces'
import { useTranslation } from 'react-i18next'

export const PlayerAvatar: React.FC = observer(() => {
    const { t } = useTranslation()

    const [player, setPlayer] = useState<IPlayer>({} as IPlayer)

    const {
        playerProfileStore: { playerProfile },
    } = useStores()

    useEffect(() => {
        setPlayer(playerProfile)
    }, [playerProfile])

    return (
        <Card shadow="sm" padding="md" component="article">
            <Card.Section>
                {!player.image ? (
                    <Loader size="sm" />
                ) : (
                    <Image alt={player?.image?.alt} fit="contain" src={player?.image?.src} height={160} />
                )}
            </Card.Section>

            <Text weight={500} size="lg">
                {player?.lastName}
            </Text>

            <Text size="sm">{t(`fieldPosition.${player?.fieldPosition}`)}</Text>
            <Text size="sm">{player?.teamId}</Text>
        </Card>
    )
})
