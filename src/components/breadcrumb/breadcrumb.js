import React, { Component } from "react";
import { Link,withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Breadcrumb extends Component {
  render() {
    return <section id="breadcrumbs" className="breadcrumbs">
    <div className="container">

      <ol>
        <li><Link to="/">{this.props.t('Home')}</Link></li>
        <li>{this.props.title}</li>
      </ol>
      <h2>{this.props.title}</h2>

    </div>
  </section>;
  }
}

export default withRouter(withTranslation()(Breadcrumb));
