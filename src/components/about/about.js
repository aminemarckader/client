import React, { Component } from "react";

class About extends Component {
  render() {
    return <section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="about-img" data-aos="fade-right" data-aos-delay={100}>
          <img src="assets/img/about-img.svg" alt="about" />
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="about-content" data-aos="fade-left" data-aos-delay={100}>
          <h2>About Us</h2>
          <h3><strong>“Safeguarding lives”</strong> is our just cause</h3>
          <p>We tend to build a community of HSE professionals putting together their knowledge and expertise to build and improve risk assessments across all industries.</p>
          <p>to help those who are learners, beginners, professionals, for the sole purpose of ‘safeguarding lives’ , embrace the cause and join</p>
          <ul>
            <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
;
  }
}

export default About;
