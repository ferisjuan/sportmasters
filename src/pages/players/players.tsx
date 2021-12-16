// @vendors
import { useState } from 'react'
import { Container, Group, Text, ThemeIcon } from '@mantine/core'
import { BsPlus } from 'react-icons/bs'

// @components
import { SMModal } from 'components/modal'
import { PlayerForm } from 'components/forms'

export const Players: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Container fluid>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Group>
                <Text size="lg" weight={700}>
                    Players
                </Text>

                <ThemeIcon radius="lg" size="sm" onClick={() => setIsModalOpen(true)} sx={{ cursor: 'pointer' }}>
                    <BsPlus size={100} />
                </ThemeIcon>
            </Group>
        </Container>
    )
}
