import { useState } from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'

import { Main } from './pages/main'

function App(): JSX.Element {
    return <Main />
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
