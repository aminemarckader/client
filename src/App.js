import React from "react";
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Backtop from './components/backtop';
function App() {
  return (
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
  );
}

export default App;
