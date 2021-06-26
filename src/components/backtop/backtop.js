import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';

class Backtop extends Component {
  render() {
    return <HashLink to="#" className="back-to-top d-flex align-items-center justify-content-center">
  <i className="bi bi-arrow-up-short" /></HashLink>;
  }
}

export default Backtop;
