// @vendor
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Title } from '@mantine/core'

// @components
import { LinkBox } from '../link-box'

// @constants
import { NAV_ITEMS, ROUTES } from '~/constants'

// @components
import { UserSection } from './UserSection'

export const SMNavbar: React.VFC = () => {
    const [selected, setSelected] = useState(ROUTES.dashboard)
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname.replace('/dashboard/', '')

        for (const route in ROUTES) {
            if (route === path.replace('/', '')) {
                setSelected(path as ROUTES)
                break
            }
        }
    }, [location.pathname])

    return (
        <Navbar fixed position={{ top: 70 }} width={{ base: 210 }}>
            <Navbar.Section grow>
                {NAV_ITEMS.map(({ text, to }) => (
                    <LinkBox key={to} onClick={() => setSelected(to)} selected={selected} text={text} to={to} />
                ))}
            </Navbar.Section>

            <Navbar.Section>
                <UserSection />
            </Navbar.Section>
        </Navbar>
    )
}
