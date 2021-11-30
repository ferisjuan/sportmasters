import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { FIREBASE_CONFIG } from './constants/firebase'
import { initializeApp } from '@firebase/app'
import { browserLocalPersistence, getAuth, setPersistence } from '@firebase/auth'

initializeApp(FIREBASE_CONFIG)
const auth = getAuth()
setPersistence(auth, browserLocalPersistence)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
