// @vendors
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'

// @components
import { SMHeader, SMNavbar } from '~/components/ui/index'

const Main = (): JSX.Element => (
    <AppShell
        header={<SMHeader />}
        navbar={<SMNavbar />}
        padding="md"
        styles={theme => ({
            body: {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                height: '100vh',
            },
            main: {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                height: 'calc(100vh - 14px)',
                paddingTop: '80px',
                paddingLeft: '210px',
                right: 0,
            },
        })}
    >
        <Outlet />
    </AppShell>
)

export default Main
