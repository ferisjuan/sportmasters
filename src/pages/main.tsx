import { ReactElement } from 'react'

import { Button, Title } from '@mantine/core'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../db/connect'

export const Main = (): ReactElement => {
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
        <div className="App">
            <Title order={1}>Sportmasters</Title>
            <Button onClick={handleFirebaseTest}>TEST</Button>
        </div>
    )
}
