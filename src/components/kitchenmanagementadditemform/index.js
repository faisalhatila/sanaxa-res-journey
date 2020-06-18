import React from "react";
import { ImageUpload } from "..";
const AddItem = () => {
  return (
    <div className="row">
      <div className="col-4 col-lg-3 col-md-3 updateVendorFormTitle">
        Item Details
      </div>
      <div className="col-12 customerDetailFormMainDiv d-lg-flex d-md-flex">
        <form className="col-12 col-lg-6 col-md-6 updateVendorForm">
          <div class="form-group">
            <label for="exampleInputEmail1">Item Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              //   placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>{" "}
          {/* <div class="form-group">
            <label for="exampleInputEmail1">Mobile No</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              //   placeholder="Enter email"
            />
          </div> */}
          <ImageUpload />
          <div class="form-group">
            <label for="exampleInputEmail1">Priority</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              //   placeholder="Enter email"
            />
          </div>
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">
              Status
            </label>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
