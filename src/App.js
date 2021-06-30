import React from "react";
import Header from './components/header';
import Home from './components/home';
import Privacy from './components/privacy';
import Terms from './components/terms';
import Footer from './components/footer';
import Backtop from './components/backtop';
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend';
import french from './locales/fr.json';
import english from './locales/en.json';
import {
  Switch,
  Route} from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
    fallbackLng: "fr",
    supportedLngs: ['de', 'en', 'es', 'fr'],
    interpolation: {
      escapeValue: false
    }
  });


function App() {
  
  return (
    <div className="App">
      
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/terms' component={Terms} />
          <Route  path='/privacy' component={Privacy} />
      </Switch>
      <Footer />
    <Backtop />
    </div>

  );
}

export default App;
