import React from "react";
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Backtop from './components/backtop';
import Privacy from './components/privacy';
import Terms from './components/terms';
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from 'i18next-http-backend';
import french from './locales/fr.json';
import english from './locales/en.json';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
    fallbackLng: "fr",
    supportedLngs: ['de', 'en', 'es', 'fr'],
    interpolation: {
      escapeValue: false
    }
  });


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route path="/">
          <div className="App">
            <Header />
            <Hero />
            <main id="main">
              <About />
              <Services />
            </main>
            <Footer />
            <Backtop />
            </div>
          </Route>
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
        
      </Switch>
    </Router>
  );
}

export default App;
