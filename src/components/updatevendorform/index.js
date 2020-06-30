import React, { Component } from "react";

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
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleMobNoChange = (event) => {
    this.setState({
      mobileNo: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleStoreNameChange = (event) => {
    this.setState({
      storeName: event.target.value,
    });
  };
  handleStoreTypeChange = (event) => {
    this.setState({
      storeType: event.target.value,
    });
  };
  handleStoreLocationChange = (event) => {
    this.setState({
      storeLocation: event.target.value,
    });
  };
  handleWebsiteOrSocialLinkChange = (event) => {
    this.setState({
      websiteOrSocialLink: event.target.value,
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-4 col-lg-3 col-md-3 updateVendorFormTitle">
          Store Details
        </div>
        <div className="col-12 customerDetailFormMainDiv d-lg-flex d-md-flex">
          <form className="col-12 col-lg-6 col-md-6 updateVendorForm">
            <h5>Vendor Detail</h5>
            <div class="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Last Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Mobile No</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Address</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
          <form className="col-12 col-lg-6 col-md-6 updateVendorForm">
            <h5>Store Detail</h5>
            <div class="form-group">
              <label for="exampleInputEmail1">Store Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Store Type</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Store Location</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Website/Social Media</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
