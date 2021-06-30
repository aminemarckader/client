import React, { Component } from "react";

class Breadcrumb extends Component {
  render() {
    return <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">

      <ol>
        <li><a href="index.html">Home</a></li>
        <li>{this.props.title}</li>
      </ol>
      <h2>{this.props.title}</h2>

    </div>
  </section>;
  }
}

export default Breadcrumb;
