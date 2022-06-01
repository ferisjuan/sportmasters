// @vendors
import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider, Title } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

// @components
import { AuthenticatedRoute, SMContainer } from '~/components'
import Login from './pages/auth/Login'

// @constants
import { ROUTES } from '~/constants/routes'

// @context
import { AuthContextProvider, StoreProvider } from '~/context'

// @query
import { queryClient } from './queries'

// @store
import { rootStore } from '~/store'

const ChangePasswordPage = lazy(() => import('./pages/auth/ChangePassword'))
const MainPage = lazy(() => import('./pages/main'))
const NotFoundPage = lazy(() => import('./pages/not-found/notFound'))
const PlayersAttendance = lazy(() => import('./pages/attendance/PlayersAttendance'))
const PlayerPage = lazy(() => import('./pages/player/player'))
const PlayersPage = lazy(() => import('./pages/players/players'))

const App: React.FC = () => (
    <AuthContextProvider>
        <StoreProvider store={rootStore}>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.login} element={<Login />} />

                    <Route
                        path={ROUTES.changePassword}
                        element={
                            <Suspense fallback={<SMContainer isLoading />}>
                                <ChangePasswordPage />
                            </Suspense>
                        }
                    />

                    <Route
                        path={ROUTES.dashboard}
                        element={
                            <Suspense fallback={<SMContainer isLoading />}>
                                <AuthenticatedRoute>
                                    <MainPage />
                                </AuthenticatedRoute>
                            </Suspense>
                        }
                    >
                        <Route index element={<Title>Welcome to the dashboard</Title>} />

                        <Route path={ROUTES.dashboard_main} element={<Title>Main</Title>} />

                        <Route
                            path={ROUTES.attendance}
                            element={
                                <Suspense fallback={<SMContainer isLoading />}>
                                    <PlayersAttendance />
                                </Suspense>
                            }
                        />

                        <Route
                            path={ROUTES.players}
                            element={
                                <Suspense fallback={<SMContainer isLoading />}>
                                    <PlayersPage />
                                </Suspense>
                            }
                        />

                        <Route
                            path={ROUTES.player}
                            element={
                                <Suspense fallback={<SMContainer isLoading />}>
                                    <PlayerPage />
                                </Suspense>
                            }
                        />

                        <Route path={ROUTES.statistics} element={<Title>Statistics</Title>} />
                    </Route>
                    <Route
                        path={ROUTES.notFound}
                        element={
                            <Suspense fallback={<SMContainer isLoading />}>
                                <NotFoundPage />
                            </Suspense>
                        }
                    />
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
                        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

                        <App />
                    </QueryClientProvider>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default WithProvider
