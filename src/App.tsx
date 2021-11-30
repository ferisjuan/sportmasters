import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

import { Main } from './pages/main'
import { NotFound } from './pages/not-found'
import { Auth } from './pages/auth/login'

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Auth />} />
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
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
