import i18next from 'i18next'
import english from './english.json'
import French from './French.json'
import {initReactI18next} from 'react-i18next'


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:'fr',
    resources:{
        en:english,
        fr:French
    },
    react:{
        useSuspense:false
    }
})

export default i18next