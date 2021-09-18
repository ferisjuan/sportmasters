import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { queryConfig } from './constants/queries'
import { User } from './pages/user'

const queryClient = new QueryClient(queryConfig)

function Main(): ReactElement {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <User />
            </QueryClientProvider>
        </div>
    )
}

export default Main
