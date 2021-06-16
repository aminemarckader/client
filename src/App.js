import React from "react";
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Backtop from './components/backtop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
     <Hero />
     <main id="main">
        <About />
        <Services />
     </main>
     <Footer />
     <Backtop />
      </Router>
    </div>
  );
}

export default App;
