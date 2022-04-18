// @vendors
import { useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider, Title } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { QueryClientProvider } from 'react-query'

// @components
import { Auth, Main, NotFound, Player, Players } from '~/pages'
import { AuthenticatedRoute } from '~/components'

// @constants
import { ROUTES } from '~/constants/routes'

// @context
import { AuthContextProvider, StoreProvider } from '~/context'

// @query
import { queryClient } from './query-client'

// @store
import { rootStore } from '~/store'

const App: React.VFC = () => (
    <AuthContextProvider>
        <StoreProvider store={rootStore}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NotFound />} />
                    <Route path={ROUTES.login} element={<Auth />} />
                    <Route
                        path={ROUTES.dashboard}
                        element={
                            <AuthenticatedRoute>
                                <Main />
                            </AuthenticatedRoute>
                        }
                    >
                        <Route index element={<Title>Welcome to the dashboard</Title>} />
                        <Route path={ROUTES.dashboard_main} element={<Title>Main</Title>} />
                        <Route path={ROUTES.players} element={<Players />} />
                        <Route path={ROUTES.player} element={<Player />} />
                        <Route path={ROUTES.statistics} element={<Title>Statistics</Title>} />
                    </Route>
                    <Route path={ROUTES.notFound} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    </AuthContextProvider>
)

// Custom theme is applied to all components in App
function WithProvider(): JSX.Element {
    const [colorScheme, setColorScheme] = useState('light')

    const toggleColorScheme = (value?: ColorScheme): void =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme as ColorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme: colorScheme as ColorScheme }}>
                <NotificationsProvider>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools initialIsOpen={false} />
                        <App />
                    </QueryClientProvider>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default WithProvider
