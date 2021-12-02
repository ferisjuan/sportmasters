import { AppShell, Title } from '@mantine/core'

import { SMHeader, SMNavbar } from 'components/ui/index'

export const Main = (): JSX.Element => (
    <AppShell
        header={<SMHeader />}
        navbar={<SMNavbar />}
        padding="md"
        styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
        <Title order={2}>Sportmasters</Title>
    </AppShell>
)
