import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { FIREBASE_CONFIG } from './constants/firebase'
import { initializeApp } from '@firebase/app'

initializeApp(FIREBASE_CONFIG)
console.log('🚀 ~ file: index.tsx ~ line 10 ~ FIREBASE_CONFIG', FIREBASE_CONFIG)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
