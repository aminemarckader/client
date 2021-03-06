import React, { Component } from "react";
import { FcCollaboration,FcParallelTasks,FcConferenceCall } from "react-icons/fc";

class Services extends Component {
  render() {
    return <section id="services" className="services section-bg">
  <div className="container" data-aos="fade-up">
    <header className="section-header">
      <h3>Services</h3>
      <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
    </header>
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay={100}>
        <div className="box">
          <div className="icon" style={{background: '#fceef3'}}> 
            <i className="bi"><FcCollaboration className="" style={{lineHeight:1}} /></i>
          </div>
          <h4 className="title"><a href="#">Risk assessment collaborative tool</a></h4>
          <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
        <div className="box">
          <div className="icon" style={{background: '#fff0da'}}>
          <i className="bi"><FcParallelTasks className="" style={{lineHeight:1}} /></i>
          </div>
          <h4 className="title"><a href="#">PPE management made easy</a></h4>
          <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
        </div>
      </div>
      {/* Global community  */}
      <div className="d-flex col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
        <div className="box">
          <div className="icon" style={{background: '#e6fdfc'}}>
          <i className="bi">
            <FcConferenceCall />
          </i>
          </div>
          <h4 className="title"><a href="#">A community of professionals at your help</a></h4>
          <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
      </div>

      {/* <div className="col-md-6 col-lg-4 wow" data-aos="zoom-in" data-aos-delay={100}>
        <div className="box">
          <div className="icon" style={{background: '#eafde7'}}><i className="bi bi-binoculars" style={{color: '#41cf2e'}} /></div>
          <h4 className="title"><a href="#">Magni Dolores</a></h4>
          <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="{200}">
        <div className=" box">
          <div className="icon" style={{background: '#e1eeff'}}><i className="bi bi-brightness-high" style={{color: '#2282ff'}} /></div>
          <h4 className="title"><a href="#">Nemo Enim</a></h4>
          <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
        <div className="box">
          <div className="icon" style={{background: '#ecebff'}}><i className="bi bi-calendar4-week" style={{color: '#8660fe'}} /></div>
          <h4 className="title"><a href="#">Eiusmod Tempor</a></h4>
          <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
        </div>
      </div> */}
    </div>
  </div>
</section>
;
  }
}

export default Services;
