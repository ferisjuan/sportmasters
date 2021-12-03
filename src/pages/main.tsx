import { AppShell } from '@mantine/core'

import { SMHeader, SMNavbar } from 'components/ui/index'
import { Outlet } from 'react-router'

export const Main = (): JSX.Element => (
    <AppShell
        fixed
        header={<SMHeader />}
        navbar={<SMNavbar />}
        padding="md"
        styles={(theme) => ({
            main: {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        })}
    >
        <Outlet />
    </AppShell>
)
