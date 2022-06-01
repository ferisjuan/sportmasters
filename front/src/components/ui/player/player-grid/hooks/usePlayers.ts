// @hooks
import { useStores } from '~/hooks'

// @interfaces
interface IUsePlayers {}

export const usePlayer = (): IUsePlayers => {
    const { playersStore } = useStores()
}
