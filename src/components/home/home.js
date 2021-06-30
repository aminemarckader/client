import React, { Component } from "react";
import Hero from '../hero';
import About from '../about';
import Services from '../services';

class Home extends Component {
  render() {
    return<>
    <Hero />
    <main id="main">
      <About />
      <Services />
    </main>
    
    </>;
  }
}

export default Home;
