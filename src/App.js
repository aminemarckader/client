import React from "react";
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Backtop from './components/backtop';
import Privacy from './components/privacy';
import Terms from './components/terms';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Contact Us": "Contact Us",
          "Send Message": "Send Message",
          "Thank You": "Your message has been sent. Thank you!",
          "Name":"Your Name",
          "Email":"Your Email",
          "Subject":"Subject",
          "Message":"Your Message",
          "Name required":"Your Name is required",
          "Email required":"Your Email is required",
          "Subject required":"Subject is required",
          "Message required":"Your Message is required",
        }
      },
      fr: {
        translation: {
          "Contact Us": "Contactez Nous",
          "Send Message": "Envoyer Message",
          "Thank You": "Votre message a ete bien envoye. Merci!",
          "Name":"Votre Nom",
          "Email":"Votre Email",
          "Subject":"Votre Sujet",
          "Message":"Votre Message",
          "Name required":"Votre Nom est requis",
          "Email required":"Votre Email est requis",
          "Subject required":"Votre Suject est requis",
          "Message required":"Votre Message est requis",
        }
      },
    },
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

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
