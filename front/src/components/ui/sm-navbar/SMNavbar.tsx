// @vendor
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAuth } from '@firebase/auth'
import { Avatar, Box, Container, Navbar, Text, Title } from '@mantine/core'
import { MantineTheme } from '@mantine/styles'

// @components
import { LinkBox } from '../link-box'

// @constants
import { NAV_ITEMS, ROUTES } from '~/constants'

// @utils
import { getInitials } from '~/utils'

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

    const user = getAuth().currentUser
    const userName = user?.displayName

    return (
        <Navbar fixed position={{ top: 70 }} width={{ base: 210 }}>
            <Navbar.Section grow>
                <Title order={5}>Main Links</Title>
                {NAV_ITEMS.map(({ text, to }) => (
                    <LinkBox key={to} onClick={() => setSelected(to)} selected={selected} text={text} to={to} />
                ))}
            </Navbar.Section>

            <Navbar.Section>
                <Box
                    sx={(theme: MantineTheme) => ({
                        alignItems: 'center',
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                        borderRadius: theme.radius.sm,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: 0,
                        padding: theme.spacing.xs,

                        '&:hover': {
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                        },
                    })}
                >
                    <Avatar alt="avatar" radius="xl">
                        {userName && getInitials(userName[0], userName[1])}
                    </Avatar>
                    <Container m={0}>
                        <Title order={5}>{user?.displayName}</Title>
                        <Text size="xs">{user?.email}</Text>
                    </Container>
                </Box>
            </Navbar.Section>
        </Navbar>
    )
}
