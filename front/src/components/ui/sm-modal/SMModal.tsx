// @vendors
import { Modal } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from '~/hooks'

interface SMModalProps {
    children: React.ReactNode
}

export const SMModal: React.FC<SMModalProps> = observer(({ children }) => {
    const { playersStore } = useStores()

    const handleOnClose = (): void => {
        playersStore.isAddPlayerModalOpen = false
    }

    return (
        <Modal opened={playersStore.isAddPlayerModalOpen} onClose={handleOnClose}>
            {children}
        </Modal>
    )
})
