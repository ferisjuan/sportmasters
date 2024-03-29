// @vendors
import { useContext } from 'react'

// @context
import { StoreContext } from '~/context'

// @store
import { RootStore } from '~/store'

export const useStores = (): RootStore => useContext(StoreContext)
