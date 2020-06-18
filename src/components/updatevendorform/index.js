import React from "react";
import { UpdateVendor } from "../../containers";
const UpdateVendorForm = () => {
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
          {/* <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
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
          {/* <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          {/* <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateVendorForm;
