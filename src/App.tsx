// @vendors
import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

// @components
import { Auth } from './pages/auth/login'
import { Main } from './pages/main'
import { NotFound } from './pages/not-found'

// @context
import { IChildren } from './interfaces'
import { AuthContextProvider } from './context/auth-provider'
import { useAuthState } from './hooks/auth'

const AuthenticatedRoute = ({ children }: IChildren): JSX.Element => {
    const { isAuthenticated } = useAuthState()
    const location = useLocation()

    if (!isAuthenticated) return <Navigate to="/auth/login" state={{ from: location }} />

    return children
}

function App(): JSX.Element {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/login" element={<Auth />} />
                    <Route
                        path="/"
                        element={
                            <AuthenticatedRoute>
                                <Main />
                            </AuthenticatedRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
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
