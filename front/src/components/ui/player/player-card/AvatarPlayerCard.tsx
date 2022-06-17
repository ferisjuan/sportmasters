import { ActionIcon, Avatar, Image } from '@mantine/core'
import { BiCheck } from 'react-icons/bi'
import { IoWarningOutline } from 'react-icons/io5'

interface AvatarPlayerCardProps {
    image?: string | null
    playerStatus?: string | null
}

export const AvatarPlayerCard: React.FC<AvatarPlayerCardProps> = ({ image, playerStatus }) => {
    return (
        <div>
            {image ? (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image alt="Player image" fit="contain" src={image || ''} width={120} />

                    {playerStatus === 'INACTIVE' ? (
                        <ActionIcon color="yellow" variant="filled">
                            <IoWarningOutline />
                        </ActionIcon>
                    ) : (
                        <ActionIcon color="green" size="sm" radius="sm" variant="filled">
                            <BiCheck />
                        </ActionIcon>
                    )}
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar src="/player.png" alt="Player Avatar" />

                    {playerStatus === 'INACTIVE' ? (
                        <ActionIcon color="yellow" size="sm" radius="sm" variant="filled" style={{ alignSelf: 'end' }}>
                            <IoWarningOutline />
                        </ActionIcon>
                    ) : (
                        <ActionIcon color="green" size="sm" radius="sm" variant="filled" style={{ alignSelf: 'end' }}>
                            <BiCheck />
                        </ActionIcon>
                    )}
                </div>
            )}
        </div>
    )
}
