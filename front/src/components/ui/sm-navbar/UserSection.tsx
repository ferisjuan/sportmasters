// @vendor
import { useCallback, useEffect } from 'react'
import { Avatar, Box, Container, Title, Text } from '@mantine/core'
import { MantineTheme } from '@mantine/styles'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @constants
import { ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks/store'

// @generated
import { useLogoutMutation, useUserQuery } from '~/generated/graphql'

// @utils
import { getInitials, showSMNotification } from '~/utils'

export const UserSection: React.FC = observer(() => {
    const { userStore } = useStores()

    const email = localStorage.getItem('email')

    const { data } = useUserQuery({ where: { email } })

    const user = data?.user

    useEffect(() => {
        userStore.id = user?.id || ''
        userStore.email = user?.email || ''
        userStore.roles = user?.roles || []
        userStore.schoolEmail = user?.schoolEmail || ''
    }, [user])

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
                {user?.firstName && getInitials(user?.firstName[0], user?.firstName[1])}
            </Avatar>
            <Container m={0}>
                <Title order={5}>{`${user?.firstName} ${user?.lastName}`}</Title>
                <Text size="xs">{user?.email}</Text>
            </Container>
        </Box>
    )
})
