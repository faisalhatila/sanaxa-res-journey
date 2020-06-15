import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginScreen/background.jpg)",
        }}
        className="loginPageMainDiv"
      >
        <div className="container">
          <div className="loginScreenRow1">
            <h2>
              <strong>Snaxa</strong>
            </h2>
            <p>Restaurant Login Panel</p>
            <div className="loginPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
              <p>Login In To Your Account</p>
              <form className="mt-2">
                <div class="form-group">
                  <label for="exampleInputEmail1">User Name</label>
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
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Keep Me Looged In
                  </label>
                </div>
                <button type="submit" class="btn btn-primary loginButton mt-2">
                  Submit
                </button>
                <p className="createAccountText pt-2 pb-2">
                  Dont have an account?
                  <span className="createAccountLabel">Create an account</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
