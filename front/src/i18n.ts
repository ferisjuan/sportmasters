// @vendors
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// @translations
import { esCO } from './translation/index'

export const getNsTranslation = (ns: string) => (key: string, returnObjects?: boolean) =>
    i18n.t(key, { ns, returnObjects })

const resources = {
    esCO,
}

i18n.use(initReactI18next).init({
    debug: true,
    compatibilityJSON: 'v3',
    fallbackLng: 'esCO',
    interpolation: {
        escapeValue: false,
    },
    lng: 'esCO',
    resources,
})

export default i18n
