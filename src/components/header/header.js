import React, { Component } from "react";
import Navbar from '../navbar/navbar';
import { Link,withRouter } from 'react-router-dom';
import './header.css';
class Header extends Component {

 


  render() {
    return  <header id="header" className={`fixed-top d-flex align-items-center ${this.props.location.pathname==="/" ? 'header-transparent' : ''}`}  >
  <div className="container d-flex align-items-center">
    
    {/* Uncomment below if you prefer to use an image logo */}
    
    <h1 className="logo me-auto"><Link to="/" className="logo me-auto"> First HSE </Link></h1>
      {/* <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo"/>
      <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo-small"/> */}
   
    
    <Navbar />
    <div className="social-links">
      <Link to="/" className="twitter"><i className="bi bi-twitter" /></Link>
      <Link to="/" className="facebook"><i className="bi bi-facebook" /></Link>
      <Link to="/" className="linkedin"><i className="bi bi-linkedin" /></Link>
      <Link to="/" className="instagram"><i className="bi bi-instagram" /></Link>
    </div>
  </div>
</header>
;
  }
}

export default withRouter(Header);
