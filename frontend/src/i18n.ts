import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from './locales/en.ts'
import ruTranslation from './locales/ru.ts'

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: enTranslation,
        },
        ru: {
            translation: ruTranslation,
        }
    },
});

export default i18n;