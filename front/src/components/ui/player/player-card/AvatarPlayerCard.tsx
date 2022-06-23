import { Avatar, Indicator } from '@mantine/core'

interface AvatarPlayerCardProps {
    image?: string | null
}

export const AvatarPlayerCard: React.FC<AvatarPlayerCardProps> = ({ image }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {image ? (
                <Indicator size={20} color="red">
                    <Avatar alt="Player image" src={image || ''} />
                </Indicator>
            ) : (
                <Indicator size={20} color="red" withBorder>
                    <Avatar src="/player.png" alt="Player Avatar" size={50} />
                </Indicator>
            )}
        </div>
    )
}
