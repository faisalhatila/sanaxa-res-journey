import React, { Component } from "react";

export default class BecomeAPartner extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    } = this.state;
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(assets/img/loginScreen/Rectangle290.png)",
        }}
        className="becomeAPartnerPageMainDiv"
      >
        <div className="container pt-5">
          <div className="becomeAPartnerRow1">
            <img src="assets/img/Logo.svg" />
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
              <h3 className="becomeAPartnerBigHeading whiteFont">
                Get associated with snaxas to have bigger and better sales
              </h3>
              <p className="whiteFont">Snaxa is name to remember</p>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="becomeAPartnerPageFormDiv col-12 col-lg-4 col-md-6 offset-lg-4 offset-md-3 mt-3">
                <p>Login In To Your Account</p>
                <form className="mt-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input
                      onChange={this.handleEmailChange}
                      value={email}
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    {emailError ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {emailError}
                      </div>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      onChange={this.handlePasswordChange}
                      value={password}
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                    {passwordError ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {passwordError}
                      </div>
                    ) : null}
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                      onChange={this.handleCheck}
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Keep Me Looged In
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    class="btn btn-primary loginButton mt-2"
                  >
                    Submit
                  </button>
                  <p className="createAccountText pt-2 pb-2">
                    Dont have an account?
                    <span className="createAccountLabel">
                      Create an account
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
