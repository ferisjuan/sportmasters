// @vendors
import React from 'react'
import ReactDOM from 'react-dom'
import { browserLocalPersistence, getAuth, setPersistence } from '@firebase/auth'
import { initializeApp, FirebaseOptions } from '@firebase/app'
import { configure } from 'mobx'

// @components
import App from './App'

// @constants
import { FIREBASE_CONFIG } from './constants/firebase'

// @i18n
import './i18n'

// @styles
import './index.css'

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
})

initializeApp(FIREBASE_CONFIG as FirebaseOptions)
const auth = getAuth()
setPersistence(auth, browserLocalPersistence)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
