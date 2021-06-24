import React, { Component } from "react";
import { withTranslation } from 'react-i18next';

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
          <h2>{this.props.t('About Us')}</h2>
          <h3><strong>“Safeguarding lives”</strong> {this.props.t('Just Cause')}</h3>
          <p>{this.props.t('About p1')}</p>
          <p>{this.props.t('About p2')}</p>
          
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

export default withTranslation()(About);
