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
