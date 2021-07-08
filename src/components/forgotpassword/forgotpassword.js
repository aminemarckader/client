import React, { Component } from "react";
import { Link } from "react-router-dom";
import './forgotpassword.css';
class ForgotPassword extends Component {
  render() {
  return  <>
      <div class="wrapper forgotten">
        <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo mb-3"/>
        <img src="assets/img/word-logo.png" alt="" className="img-fluid bg-logo-small"/>
        <img src="assets/img/forgot_password.svg" alt="forgot password" className="img-fluid mb-3" />
        <div class="card ">
        <form action="#" class="d-flex flex-column">
            <div className="h3 text-center text-white">Forgot your password?</div>
            <div className="d-flex align-items-center input-field my-3 mb-4"> 
              <span className="far fa-user p-2"></span> 
              <input type="text" placeholder="Username or Email" required className="form-control"/>
            </div>
            
           <div className="row align-items-center">
             <div className="col">
             <div className="my-3"> 
				<input type="submit" value="Submit" class="btn btn-primary"/> 
			</div>
            
             </div>
             <div className="col">
             <div className="mb-3">
				<Link to="/">Back to Home</Link>
			</div>
             </div>
           </div>
        </form>
        </div>
      </div>
      </>;
  }
}

export default ForgotPassword;
