import React, { Component } from "react";
import { first } from "lodash";

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
    data: [],
  };
  handleFirstNameChange = (event) => {
    this.setState({
      firstNameError: "",
      firstName: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastNameError: "",
      lastName: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      emailError: "",
      email: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      passwordError: "",
      password: event.target.value,
    });
  };
  validate = () => {
    const { firstName, lastName, email, password } = this.state;
    let {
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    } = this.state;
    if (!firstName) {
      firstNameError = "Enter First Name";
    } else {
      firstNameError = "";
    }
    if (!lastName) {
      lastNameError = "Enter Last Name";
    } else {
      lastNameError = "";
    }
    if (!email || !email.includes("@")) {
      emailError = "Enter Valid Email";
    } else {
      emailError = "";
    }
    if (!password || password.length < 6) {
      passwordError = "Enter Valid Password Min 6 Characters";
    } else {
      passwordError = "";
    }
    if (firstNameError || lastNameError || emailError || passwordError) {
      this.setState({
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    const { firstName, lastName, email, password, data } = this.state;
    if (isValid) {
      let collections = [firstName, lastName, email, password];
      data.push(collections);
      console.log(data);
      setTimeout(() => {
        alert("Perfect");
      }, 2000);
    }
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
        <div className="container pt-5 pb-5">
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
                <p className="becomeAPartnerFormTitle">Join Us</p>
                <div className="formTabDiv d-flex justify-content-around mb-4">
                  <p className="noMargin blackFont becomeAPartnerFormActiveTab">
                    Your Details
                  </p>
                  <p className="noMargin blackFont">Store Details</p>
                </div>
                <form className="mt-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      onChange={this.handleFirstNameChange}
                      value={firstName}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter First Name"
                    />
                    {firstNameError ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {firstNameError}
                      </div>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                      onChange={this.handleLastNameChange}
                      value={lastName}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Last Name"
                    />
                    {lastNameError ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {lastNameError}
                      </div>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      onChange={this.handleEmailChange}
                      value={email}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
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
                      placeholder="Enter Password"
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
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    class="btn btn-primary loginButton mt-2"
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
