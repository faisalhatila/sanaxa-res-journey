import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterContainer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginScreen/background.jpg)",
        }}
        className="signUpPageMainDiv"
      >
        <div className="container">
          <div className="signupScreenRow1">
            <h2>
              <strong>Snaxa</strong>
            </h2>
            <p>Restaurant Login Panel</p>
            <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
              <p>Signup With</p>
              <div className="d-flex facebookDiv mt-3">
                <i class="fab fa-facebook-f mr-3"></i>
                <p>Signup With Facebook</p>
              </div>
              <div className="d-flex googleDiv mt-3 mb-3">
                <i class="fab fa-google mr-3"></i>
                <p>Signup With Facebook</p>
              </div>
              <hr />
              <p> or Signup For A New Account</p>
              <form className="mt-2">
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Gender</label>
                  {/* <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  /> */}
                  <div className="d-flex genderMainDiv">
                    <div className="genderDiv">Male</div>
                    <div className="genderDiv">Female</div>
                  </div>
                </div>
                <div className="dateInputDiv">
                  <input type="date" />
                </div>
                <div class="form-check mt-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Subscribe To Our Newsletter
                  </label>
                </div>
                <div class="form-check mt-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Subscribe TO SMS
                  </label>
                </div>
                <button type="submit" class="btn btn-primary loginButton mt-2">
                  Submit
                </button>
                <p className="createAccountText pt-2 pb-2">
                  Already have an account?
                  <span className="createAccountLabel">Click to login</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterContainer;
