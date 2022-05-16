// @vendors
import { createRoot } from 'react-dom/client'
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
    disableErrorBoundaries: false,
})

initializeApp(FIREBASE_CONFIG as FirebaseOptions)
// const auth = getAuth()

// setPersistence(auth, browserLocalPersistence)

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(<App />)
