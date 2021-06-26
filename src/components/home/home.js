import React, { Component } from "react";
import Header from '../header';
import Hero from '../hero';
import About from '../about';
import Services from '../services';
import Footer from '../footer';
import Backtop from '../backtop';
class Home extends Component {
  render() {
    return <div className="App">
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Services />
    </main>
    <Footer />
    <Backtop />
    </div>;
  }
}

export default Home;
