import { createContext, FC, ReactElement, ReactNode } from 'react'
import { RootStore } from '~/store'

export const StoreContext = createContext<RootStore>({} as RootStore)

export type StoreComponent = FC<{
    store: RootStore
    children: ReactNode
}>

export const StoreProvider: StoreComponent = ({ store, children }): ReactElement => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)
