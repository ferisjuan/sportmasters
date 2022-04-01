// @vendors
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider, Title } from '@mantine/core'

// @components
import { Auth } from '~/pages/auth/login'
import { AuthenticatedRoute } from '~/components/auth'
import { Main } from '~/pages/main'
import { NotFound } from '~/pages/not-found'
import { Player } from '~/pages/player'
import { Players } from '~/pages/players'

// @constants
import { ROUTES } from '~/constants/routes'

// @context
import { AuthContextProvider, StoreProvider } from '~/context'

// @store
import { rootStore } from '~/store'

function App(): JSX.Element {
    return (
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
}

// Custom theme is applied to all components in App
function WithProvider(): JSX.Element {
    const [colorScheme, setColorScheme] = useState('light')

    const toggleColorScheme = (value?: ColorScheme): void =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme as ColorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme: colorScheme as ColorScheme }}>
                <App />
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default WithProvider
