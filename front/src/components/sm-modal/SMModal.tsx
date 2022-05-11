import { Modal } from '@mantine/core'

export interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const SMModal: React.VFC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
    return (
        <Modal opened={isOpen} onClose={() => setIsOpen(false)}>
            {children}
        </Modal>
    )
}
