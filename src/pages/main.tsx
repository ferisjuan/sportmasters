import { AppShell, Button, Title } from '@mantine/core'

import { SMHeader, SMNavbar } from 'components/ui/index'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../db/connect'

export const Main = (): JSX.Element => {
    // const theme = useMantineTheme()

    const handleFirebaseTest = async (): Promise<void> => {
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            })
            console.log('Document written with ID: ', docRef.id)
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    }
    return (
        <AppShell
            header={<SMHeader />}
            navbar={<SMNavbar />}
            fixed
            padding="md"
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Title order={2}>Sportmasters</Title>
        </AppShell>
    )
}
