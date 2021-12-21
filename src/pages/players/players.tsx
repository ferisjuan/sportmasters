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
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Group>
                <Text sx={{ fontSize: '48px', fontWeight: 700 }}>Players</Text>
            </Group>
            <ThemeIcon
                radius="md"
                size="xl"
                onClick={() => setIsModalOpen(true)}
                sx={{ bottom: 0, cursor: 'pointer', position: 'absolute', right: 0 }}
            >
                <BsPlus size={100} />
            </ThemeIcon>
        </Container>
    )
}
