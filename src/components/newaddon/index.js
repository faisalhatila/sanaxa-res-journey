import React, { Component } from "react";

export default class NewAddon extends Component {
  render() {
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
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
