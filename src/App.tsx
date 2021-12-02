// @vendors
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

// @components
import { Auth } from './pages/auth/login'
import { Main } from './pages/main'
import { NotFound } from './pages/not-found'

// @context
import { AuthContextProvider } from './context/auth-provider'
import { AuthenticatedRoute } from './components/auth'

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
