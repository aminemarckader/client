import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return  <div id="topbar" className="d-flex align-items-center fixed-top">
  <div className="container d-flex justify-content-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-envelope" /> <a href="/cdn-cgi/l/email-protection#65060a0b1104061125001d04081509004b060a08"><span className="__cf_email__" data-cfemail="86e5e9e8f2e7e5f2c6e3fee7ebf6eae3a8e5e9eb">[email&nbsp;protected]</span></a>
      <i className="bi bi-phone" /> +1 5589 55488 55
    </div>
    <div className="d-none d-lg-flex social-links align-items-center">
      <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
      <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
      <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
    </div>
  </div>
</div>
;
  }
}

export default Topbar;
