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
import { showSMNotification } from '~/utils'

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
                color: 'white',
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[9],
                borderRadius: theme.radius.sm,
                display: 'flex',
                justifyContent: 'flex-start',
                marginBlockEnd: '10px',
                padding: '0.5rem',
            })}
        >
            <Avatar alt="avatar" radius="sm">
                {userStore.getInitials()}
            </Avatar>

            <Container m={0}>
                <Title order={5}>{userStore.lastName}</Title>

                <Text size="xs">{userStore?.firstName}</Text>
            </Container>
        </Box>
    )
})
