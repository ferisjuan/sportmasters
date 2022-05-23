// @vendor
import { Avatar, Box, Container, Title, Text } from '@mantine/core'
import { MantineTheme } from '@mantine/styles'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @constants
import { ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks/store'

// @generated
import { useLogoutMutation } from '~/generated/graphql'

// @utils
import { getInitials, showSMNotification } from '~/utils'

export const UserSection: React.FC = observer(() => {
    const { userStore } = useStores()

    const navigate = useNavigate()

    const { mutate: logout } = useLogoutMutation({
        onSuccess: () => {
            navigate(`../${ROUTES.login}`, { replace: true })

            localStorage.removeItem('email')
        },
        onError: error => {
            showSMNotification(`${error}`, 'ERROR', false)
        },
    })

    return (
        <Box
            onClick={() => logout({})}
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
                {userStore?.firstName && getInitials(userStore?.firstName[0], userStore?.firstName[1])}
            </Avatar>

            <Container m={0}>
                <Title order={5}>{userStore.getInitials()}</Title>

                <Text size="xs">{userStore?.email}</Text>
            </Container>
        </Box>
    )
})
