// @vendors
import { createRoot } from 'react-dom/client'
import { configure as mobxConfig } from 'mobx'

// @components
import App from './App'

// @i18n
import './i18n'

// @styles
import './index.css'

mobxConfig({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: false,
})

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(<App />)
