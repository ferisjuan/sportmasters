// @vendors
import { useState } from 'react'
import { Container, Group, Text, ThemeIcon } from '@mantine/core'
import { BsPlus } from 'react-icons/bs'

// @components
import { SMModal } from 'components/modal'
import { PlayerForm } from 'components/forms'

export const Players: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container fluid>
            <SMModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <PlayerForm />
            </SMModal>

            <Group>
                <Text size="lg" weight={700}>
                    Players
                </Text>

                <ThemeIcon radius="lg" size="sm" onClick={() => setIsOpen(true)} sx={{ cursor: 'pointer' }}>
                    <BsPlus size={100} />
                </ThemeIcon>
            </Group>
        </Container>
    )
}
