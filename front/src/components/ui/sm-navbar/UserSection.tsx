// @vendor
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Container, Title, Text } from '@mantine/core'
import { MantineTheme } from '@mantine/styles'
import { getAuth } from '@firebase/auth'

// @constants
import { ROUTES } from '../../../constants'

// @generated
import { useLogoutMutation } from '../../../generated/graphql'

// @utils
import { getInitials, showSMNotification } from '~/utils'

export const UserSection: React.FC = () => {
    const user = getAuth().currentUser
    const userName = user?.displayName

    const navigate = useNavigate()

    const { error, mutate } = useLogoutMutation()

    const handleOnClick = useCallback(() => {
        mutate({})
        localStorage.removeItem('email')

        navigate(`../${ROUTES.login}`, { replace: true })

        if (error) {
            showSMNotification(error as string, 'ERROR', false)
        }
    }, [])

    return (
        <Box
            onClick={handleOnClick}
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
    )
}
