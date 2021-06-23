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
    <Router>
      <Switch>
        <div className="App">
          <Router path="/" exact>
            <Header />
            <Hero />
            <main id="main">
              <About />
              <Services />
            </main>
            <Footer />
            <Backtop />
          </Router>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
