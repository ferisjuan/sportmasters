// @vendors
import React from 'react'
import ReactDOM from 'react-dom'
import { browserLocalPersistence, getAuth, setPersistence } from '@firebase/auth'
import { configure } from 'mobx'
import { initializeApp } from '@firebase/app'

// @components
import App from './App'

// @constants
import { FIREBASE_CONFIG } from './constants/firebase'

// @styles
import './index.css'

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
})

initializeApp(FIREBASE_CONFIG)
const auth = getAuth()
setPersistence(auth, browserLocalPersistence)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
