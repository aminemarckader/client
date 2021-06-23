import React, { Component } from "react";
import Contact from "./contact";
import {Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './footer.css';
class Footer extends Component {
  render() {
    return  <footer id="footer" className="section-bg">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer-info">
                <h3>First HSE</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>
              <div className="footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem.</p>
                <form action="#" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><HashLink smooth to="#">Home</HashLink></li>
                  <li><HashLink className="scrollto" smooth to="#about">About</HashLink></li>
                  <li><HashLink className="scrollto" smooth to="#services">Services</HashLink></li>
                  <li><Link to="/terms" >Terms of service</Link></li>
                  <li><Link to="/privacy" >Privacy</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Contact Us</h4>
                <p>
                <strong><i className="bi bi-compass footer-icon" /></strong>A108 Adam Street <br />
                  New York, NY 535022<br />
                  United States <br />
                  <strong><i className="bi bi-telephone footer-icon" /></strong> +1 5589 55488 55<br />
                  <strong><i className="bi bi-info-circle footer-icon" /></strong> contact@firsthse.com<br />
                  <strong><i className="bi bi-tools footer-icon" /></strong> support@firsthse.com<br />

                </p>
              </div>
              <div className="social-links">
                <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form">
            <h4>Send us a message</h4>
            <p>Your feedback is important to our teams for improving our products and services.</p>
            <Contact />
           </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong>Rapid</strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/*
  All the links in the footer should remain intact.
  You can delete the links only if you purchased the pro version.
  Licensing information: https://bootstrapmade.com/license/
  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Rapid
*/}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>
;
  }
}

export default Footer;
