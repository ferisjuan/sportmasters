// @vendors
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router'

// @components
import { SMHeader, SMNavbar } from '~/components/ui/index'

const Main = (): JSX.Element => (
    <AppShell
        header={<SMHeader />}
        navbar={<SMNavbar />}
        styles={theme => ({
            main: {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'transparent',
                scrollBehavior: 'smooth',
                overflow: 'hidden',
            },
        })}
        fixed
    >
        <Outlet />
    </AppShell>
)

export default Main
