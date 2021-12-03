// @vendor
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAuth } from '@firebase/auth'
import { Avatar, Box, Container, Navbar, Text, Title } from '@mantine/core'
import { MantineTheme } from '@mantine/styles'

// @components
import { LinkBox } from '../link-box'

// @constants
import { NAV_ITEMS, ROUTES } from 'constants/index'

// @utils
import { getInitials } from 'utils'

export const SMNavbar = (): JSX.Element => {
    const [selected, setSelected] = useState(ROUTES.dashboard)
    console.log('🚀🚀🚀 ~ file: index.tsx ~ line 19 ~ selected', selected)
    const location = useLocation()

    useEffect(() => {
        const path = location.pathname.replace('/dashboard/', '')

        for (const route in ROUTES) {
            if (route === path.replace('/', '')) {
                setSelected(path as ROUTES)
                break
            }
        }
    }, [location])

    const user = getAuth().currentUser
    const userName = user?.displayName

    return (
        <Navbar width={{ base: 300 }} padding="sm">
            <Navbar.Section grow mt="lg">
                <Title order={5}>Main Links</Title>
                {NAV_ITEMS.map(({ text, to }) => (
                    <LinkBox key={to} onClick={() => setSelected(to)} selected={selected} text={text} to={to} />
                ))}
            </Navbar.Section>

            <Navbar.Section mb={70}>
                <Box
                    sx={(theme: MantineTheme) => ({
                        alignItems: 'center',
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                        borderRadius: theme.radius.sm,
                        cursor: 'pointer',
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'flex-start',
                        padding: theme.spacing.xl,

                        '&:hover': {
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                        },
                    })}
                >
                    <Avatar alt="avatar" radius="xl">
                        {userName && getInitials(userName[0], userName[1])}
                    </Avatar>
                    <Container mx={0} padding={0}>
                        <Title order={5}>{user?.displayName}</Title>
                        <Text size="xs">{user?.email}</Text>
                    </Container>
                </Box>
            </Navbar.Section>
        </Navbar>
    )
}
