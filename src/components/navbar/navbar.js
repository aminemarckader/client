import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';
import { withTranslation } from 'react-i18next';

 
class Navbar extends Component {
  render() {
    
    return <nav id="navbar" className="navbar order-last order-lg-0">
    <ul>
      <li><HashLink className="nav-link scrollto active" to="/#hero">{this.props.t('Home')}</HashLink></li>
      <li><HashLink className="nav-link scrollto" to="/#about">{this.props.t('About')}</HashLink></li>
      <li><HashLink className="nav-link scrollto" to="/#services">{this.props.t('Services')}</HashLink></li>
      {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
      <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
      {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li> */}
      <li><HashLink className="nav-link scrollto" to="/#footer">{this.props.t('Contact Us')}</HashLink></li>
    </ul>
    <i className="bi bi-list mobile-nav-toggle" />
  </nav>
  ;
  }
}

export default withTranslation()(Navbar);
