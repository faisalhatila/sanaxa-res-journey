import React, { Component } from "react";

export default class NewCustomer extends Component {
  state = {
    customerName: "",
    emailAddress: "",
    address: "",
    customerNameError: "",
    // emailAddressError: "",
    // addressError: "",
    data: [],
  };
  handleCustomerNameChange = (event) => {
    this.setState({
      customerName: event.target.value,
      customerNameError: "",
    });
  };
  handleEmailAddressChange = (event) => {
    this.setState({
      emailAddress: event.target.value,
      // emailAddressError: "",
    });
  };
  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
      // addressError: "",
    });
  };
  validate = () => {
    const { customerName, emailAddress, address } = this.state;
    let { customerNameError, emailAddressError, addressError } = this.state;
    if (!customerName) {
      customerNameError = "Please Enter Customer Name";
    } else {
      customerNameError = "";
    }
    // if (!emailAddress) {
    //   emailAddressError = "Please Enter Customer Email Address";
    // } else {
    //   emailAddressError = "";
    // }
    // if (!address) {
    //   addressError = "Please Enter Customer Address";
    // } else {
    //   addressError = "";
    // }
    if (
      customerNameError
      // || emailAddressError ||
      // addressError
    ) {
      this.setState({
        customerNameError,
        // emailAddressError,
        // addressError
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    const { customerName, emailAddress, address } = this.state;
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let collections = [customerName, emailAddress, address];
      let { data } = this.state;
      data.push(collections);
      console.log(data);

      setTimeout(() => {
        alert("perfect");
      }, 2000);
      this.setState({
        customerName: "",
        emailAddress: "",
        addressError: "",
      });
    }
  };
  render() {
    const {
      customerName,
      emailAddress,
      address,
      customerNameError,
      emailAddressError,
      addressError,
    } = this.state;
    return (
      <div className="row">
        <div className="col-4 col-lg-3 col-md-3 customerDetailFormTitle">
          Customer Detail
        </div>
        <div className="col-12 customerDetailFormMainDiv">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Customer Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Customer Name"
                value={customerName}
                onChange={this.handleCustomerNameChange}
              />
              {customerNameError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {customerNameError}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailAddress}
                onChange={this.handleEmailAddressChange}
              />
              {emailAddressError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {emailAddressError}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Address"
                value={address}
                onChange={this.handleAddressChange}
              />
              {addressError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {addressError}
                </div>
              ) : null}
            </div>
            {/* <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
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
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <button
              type="submit"
              class="btn btn-primary mt-3"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
