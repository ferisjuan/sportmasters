import { ReactElement } from 'react'

import { collection, addDoc } from 'firebase/firestore'
import { db } from './db/connect'

function App(): ReactElement {
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
            <h1>Sportmasters</h1>
            <button onClick={handleFirebaseTest}>TEST</button>
        </div>
    )
}

export default App
