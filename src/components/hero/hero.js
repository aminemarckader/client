import React, { Component } from "react";

class Hero extends Component {
  render() {
    return <section id="hero" className="clearfix">
  <div className="container d-flex h-100">
    <div className="row justify-content-center align-self-center" data-aos="fade-up">
      <div className="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay={100}>
        <h2>Rapid Solutions<br />for Your <span>Business!</span></h2>
        <div>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
      <div className="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay={200}>
        <img src="assets/img/intro-img.svg" alt="intro" className="img-fluid" />
      </div>
    </div>
  </div>
</section>
;
  }
}

export default Hero;
