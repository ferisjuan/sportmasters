import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { queryConfig } from './constants/queries'
import { Dogs } from './pages/user'

const queryClient = new QueryClient(queryConfig)

function App(): ReactElement {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Dogs />
            </QueryClientProvider>
        </div>
    )
}

export default App
