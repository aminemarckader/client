import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() 
    {
      return <div class="wrapper">
      <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo mb-3"/>
          <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo-small"/>
      <div class="card mt-3">
          
          <form action="#" class="d-flex flex-column">
              <div class="h3 text-center text-white">Register</div>
              <div class="d-flex align-items-center input-field my-3 mb-4"> 
                <span class="far fa-user p-2"></span> 
                <input type="text" placeholder="Email" required class="form-control"/>
              </div>

              <div class="d-flex align-items-center input-field my-3 mb-4"> 
                <span class="far fa-user p-2"></span> 
                <input type="phone" placeholder="phone" required class="form-control"/>
              </div>
              
              <div class="d-flex align-items-center input-field my-3 mb-4"> 
                <span class="far fa-user p-2"></span> 
                <input type="text" placeholder="Username" required class="form-control"/>
              </div>

              <div class="d-flex align-items-center input-field my-3 mb-4"> 
                <span class="far fa-user p-2"></span> 
                <input type="text" placeholder="Username or Email" required class="form-control"/>
              </div>
              <div class="d-flex align-items-center input-field mb-4"> 
                <span class="fas fa-lock p-2"></span>
                <input type="password" placeholder="Password" required class="form-control" id="pwd"/> 
                <button class="btn" onclick="showPassword()"> 
                <span class="fas fa-eye-slash"></span> 
                </button> 
              </div>
              <div class="d-flex align-items-center input-field mb-4"> 
                <span class="fas fa-lock p-2"></span>
                <input type="password" placeholder="Confirm Password" required class="form-control" id="pwd"/> 
                <button class="btn" onclick="showPassword()"> 
                <span class="fas fa-eye-slash"></span> 
                </button> 
              </div>
              
              <div class="my-3"> 
          <input type="submit" value="Register" class="btn btn-primary"/> 
        </div>
        <div class="mb-3"> <span class="text-light-white">Already have an account?&nbsp;</span>
				<Link to="/login">Sign In</Link>
        </div>
          </form>
          <div class="position-relative border-bottom my-3 line"> 
        <span class="connect">or connect with</span> 
      </div>
          <div class="text-center py-3 connections">
       <a href="https://wwww.facebook.com" target="_blank" class="px-2"> 
         <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt="" /> 
       </a> 
       <a href="https://www.google.com" target="_blank" class="px-2">
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> 
      </a>
      </div>
      </div>
  </div>;
    }
  }


export default Register;
