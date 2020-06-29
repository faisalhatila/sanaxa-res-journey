import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    isNewsLetterSubscribed: false,
    isSMSSubscribed: false,
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    genderError: "",
    dateOfBirthError: "",
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
  handleConfirmPasswordChange = (event) => {
    this.setState({
      confirmPasswordError: "",
      confirmPassword: event.target.value,
    });
  };
  handleGenderChange = (event) => {
    this.setState({
      genderError: "",
      gender: event.target.value,
    });
  };
  handleDateOfBirthChange = (event) => {
    this.setState({
      dateOfBirthError: "",
      dateOfBirth: event.target.value,
    });
  };
  handleIsNewsLetterSubscribed = (event) => {
    console.log(event.target.checked);
    this.setState({
      isNewsLetterSubscribed: event.target.checked,
    });
  };
  handleIsSMSSubscribed = (event) => {
    console.log(event.target.checked);
    this.setState({
      isSMSSubscribed: event.target.checked,
    });
  };
  validate = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      dateOfBirth,
    } = this.state;
    let {
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      genderError,
      dateOfBirthError,
    } = this.state;
    if (!firstName) {
      firstNameError = "Please Enter First Name";
    } else {
      firstNameError = "";
    }
    if (!lastName) {
      lastNameError = "Please Enter Last Name";
    } else {
      lastNameError = "";
    }
    if (!email || !email.includes("@")) {
      emailError = "Please Enter Valid Email";
    } else {
      emailError = "";
    }
    if (!password || password.length < 6) {
      passwordError = "Please Enter Valid Password Min 6 Characters";
    } else {
      passwordError = "";
    }
    if (!confirmPassword || confirmPassword !== password) {
      confirmPasswordError = "Please Enter Password And Same Password";
    } else {
      confirmPasswordError = "";
    }
    if (!gender) {
      genderError = "Please Select Gender";
    } else {
      genderError = "";
    }
    if (!dateOfBirth) {
      dateOfBirthError = "Please Select Date Of Birth";
    } else {
      dateOfBirthError = "";
    }
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError ||
      genderError ||
      dateOfBirthError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        emailError,
        passwordError,
        confirmPasswordError,
        genderError,
        dateOfBirthError,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      dateOfBirth,
      isNewsLetterSubscribed,
      isSMSSubscribed,
    } = this.state;
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let collections = [
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        gender,
        dateOfBirth,
        isNewsLetterSubscribed,
        isSMSSubscribed,
      ];
      let { data } = this.state;
      data.push(collections);
      console.log(data);

      setTimeout(() => {
        alert("perfect");
      }, 2000);
    }
  };
  render() {
    const {
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      email,
      emailError,
      password,
      passwordError,
      confirmPassword,
      confirmPasswordError,
      gender,
      genderError,
      dateOfBirth,
      dateOfBirthError,
    } = this.state;
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(assets/img/loginScreen/Rectangle290.png)",
        }}
        className="signUpPageMainDiv"
      >
        <div className="container">
          <div className="signupScreenRow1">
            <h2>
              <strong>Snaxa</strong>
            </h2>
            <p>Restaurant Register Panel</p>
            <div className="loginPageFormDiv col-12 col-lg-8 col-md-8 offset-lg-2 offset-md-2 mt-3">
              <p>Signup</p>
              <form className="mt-2">
                <div className="row">
                  <div class="form-group col-12 col-lg-6 col-md-6">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter First Name"
                      onChange={this.handleFirstNameChange}
                      value={firstName}
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
                  <div class="form-group col-12 col-lg-6 col-md-6">
                    <label for="exampleInputPassword1">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Last Name"
                      onChange={this.handleLastNameChange}
                      value={lastName}
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
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={this.handleEmailChange}
                    value={email}
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
                <div className="row">
                  <div class="form-group col-12 col-lg-6 col-md-6">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={this.handlePasswordChange}
                      value={password}
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
                  <div class="form-group col-12 col-lg-6 col-md-6">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      onChange={this.handleConfirmPasswordChange}
                      value={confirmPassword}
                    />
                    {confirmPasswordError ? (
                      <div
                        style={{
                          textAlign: "center",
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {confirmPasswordError}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Gender</label>
                  <div className="d-flex genderMainDiv">
                    <div
                      className={`genderDiv ${
                        this.state.gender === "Male"
                          ? "redBack whiteFont"
                          : null
                      }`}
                      onClick={() =>
                        this.setState({ gender: "Male", genderError: "" })
                      }
                    >
                      Male
                    </div>
                    <div
                      className={`genderDiv ${
                        this.state.gender === "Female"
                          ? "redBack whiteFont"
                          : null
                      }`}
                      onClick={() =>
                        this.setState({ gender: "Female", genderError: "" })
                      }
                    >
                      Female
                    </div>
                  </div>
                  {genderError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {genderError}
                    </div>
                  ) : null}
                </div>
                <div className="dateInputDiv">
                  <input
                    type="date"
                    onChange={this.handleDateOfBirthChange}
                    value={dateOfBirth}
                  />
                </div>
                {dateOfBirthError ? (
                  <div
                    style={{
                      textAlign: "center",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {dateOfBirthError}
                  </div>
                ) : null}
                <div class="form-check mt-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                    onChange={this.handleIsNewsLetterSubscribed}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Subscribe To Our Newsletter
                  </label>
                </div>
                <div class="form-check mt-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck2"
                    onChange={this.handleIsSMSSubscribed}
                  />
                  <label class="form-check-label" for="exampleCheck2">
                    Subscribe TO SMS
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
                  Already have an account?
                  <span className="createAccountLabel">Click to login</span>
                </p>
              </form>
              {/* <hr /> */}
              <div className="d-flex">
                <div className="d-flex facebookDiv mt-3 col-12 col-lg-6 col-md-6">
                  <i class="fab fa-facebook-f mr-3"></i>
                  <p>Signup With Facebook</p>
                </div>
                <div className="d-flex googleDiv mt-3 col-12 col-lg-6 col-md-6">
                  <i class="fab fa-google mr-3"></i>
                  <p>Signup With Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterContainer;
