import React, { Component } from "react";
import { first } from "lodash";

export default class UpdateVendorForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
    storeName: "",
    storeType: "",
    storeLocation: "",
    websiteOrSocialLink: "",
    firstNameError: "",
    lastNameError: "",
    mobileNoError: "",
    emailError: "",
    storeNameError: "",
    storeTypeError: "",
    storeLocationError: "",
    websiteOrSocialLink: "",
    data: [],
  };
  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
      firstNameError: "",
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
      lastNameError: "",
    });
  };
  handleMobNoChange = (event) => {
    this.setState({
      mobileNo: event.target.value,
      mobileNoError: "",
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      emailError: "",
    });
  };
  handleStoreNameChange = (event) => {
    this.setState({
      storeName: event.target.value,
      storeNameError: "",
    });
  };
  handleStoreTypeChange = (event) => {
    this.setState({
      storeType: event.target.value,
      storeTypeError: "",
    });
  };
  handleStoreLocationChange = (event) => {
    this.setState({
      storeLocation: event.target.value,
      storeLocationError: "",
    });
  };
  handleWebsiteOrSocialLinkChange = (event) => {
    this.setState({
      websiteOrSocialLink: event.target.value,
    });
  };
  validate = () => {
    const {
      firstName,
      lastName,
      mobileNo,
      email,
      storeName,
      storeType,
      storeLocation,
    } = this.state;
    let {
      firstNameError,
      lastNameError,
      mobileNoError,
      emailError,
      storeNameError,
      storeTypeError,
      storeLocationError,
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
    if (!mobileNo) {
      mobileNoError = "Please Enter Mobile No";
    } else {
      mobileNoError = "";
    }
    if (!email || !email.includes("@")) {
      emailError = "Please Enter Valid Email";
    } else {
      emailError = "";
    }
    if (!storeName) {
      storeNameError = "Please Enter Store Name";
    } else {
      storeNameError = "";
    }
    if (!storeType) {
      storeTypeError = "Please Enter Store Type";
    } else {
      storeTypeError = "";
    }
    if (!storeLocation) {
      storeLocationError = "Please Enter Store Location";
    } else {
      storeLocationError = "";
    }
    if (
      firstNameError ||
      lastNameError ||
      mobileNoError ||
      emailError ||
      storeNameError ||
      storeTypeError ||
      storeLocationError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        mobileNoError,
        emailError,
        storeNameError,
        storeTypeError,
        storeLocationError,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    const {
      firstName,
      lastName,
      mobileNo,
      email,
      storeName,
      storeType,
      storeLocation,
      websiteOrSocialLink,
    } = this.state;
    event.preventDefault();
    console.log(this.state);

    const isValid = this.validate();
    if (isValid) {
      let collections = [
        firstName,
        lastName,
        mobileNo,
        email,
        storeName,
        storeType,
        storeLocation,
        websiteOrSocialLink,
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
      lastName,
      mobileNo,
      email,
      storeName,
      storeType,
      storeLocation,
      websiteOrSocialLink,
      firstNameError,
      lastNameError,
      mobileNoError,
      emailError,
      storeNameError,
      storeTypeError,
      storeLocationError,
    } = this.state;
    return (
      <div className="row">
        <div className="col-4 col-lg-3 col-md-3 updateVendorFormTitle">
          Store Details
        </div>
        <div className="col-12 customerDetailFormMainDiv">
          <form className="">
            <div className="d-flex">
              <div className="col-12 col-lg-6 col-md-6 updateVendorForm">
                <h5>Vendor Detail</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleFirstNameChange}
                    placeholder="First Name"
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleLastNameChange}
                    placeholder="Last Name"
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile No</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleMobNoChange}
                    placeholder="Mobile No"
                    value={mobileNo}
                  />
                  {mobileNoError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {mobileNoError}
                    </div>
                  ) : null}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleEmailChange}
                    placeholder="Enter Email"
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
              </div>
              <div className="col-12 col-lg-6 col-md-6 updateVendorForm">
                <h5>Store Detail</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Store Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleStoreNameChange}
                    placeholder="Enter Store Name"
                    value={storeName}
                  />
                  {storeNameError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {storeNameError}
                    </div>
                  ) : null}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Store Type</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleStoreTypeChange}
                    placeholder="Enter Store Type"
                    value={storeType}
                  />
                  {storeTypeError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {storeTypeError}
                    </div>
                  ) : null}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Store Location</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleStoreLocationChange}
                    placeholder="Enter Store Location"
                    value={storeLocation}
                  />
                  {storeLocationError ? (
                    <div
                      style={{
                        textAlign: "center",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {storeLocationError}
                    </div>
                  ) : null}
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Website/Social Media</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleWebsiteOrSocialLinkChange}
                    placeholder="Enter Website / Social Link"
                    value={firstName}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <button
                type="submit"
                class="btn btn-primary mt-3"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
