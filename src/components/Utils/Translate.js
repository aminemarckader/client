import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend';
import french from '../../locales/fr.json';
import english from '../../locales/en.json';

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
  }

  i18n
  .use(LanguageDetector)
  .use(Backend)
  
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: { 
      useSuspense: false
    },
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      fr: french,
      en: english
    },
     // if you're using a language detector, do not define the lng option
     detection: options,
    fallbackLng: "en",
    supportedLngs: ['de', 'en', 'es', 'fr'],
    interpolation: {
      escapeValue: false
    }
  });


  export default i18n;
