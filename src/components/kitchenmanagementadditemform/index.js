import { ImageUpload } from "..";
import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    itemName: "",
    itemDescription: "",
    itemPriority: "",
    itemStatus: false,
    itemNameError: "",
    itemDescriptionError: "",
    itemPriorityError: "",
    data: [],
  };
  handleChangeItemName = (event) => {
    this.setState({
      itemName: event.target.value,
      itemNameError: "",
    });
  };
  handleChangeItemDescription = (event) => {
    this.setState({
      itemDescription: event.target.value,
      itemDescriptionError: "",
    });
  };
  handleChangeItemPriority = (event) => {
    this.setState({
      itemPriority: event.target.value,
      itemPriorityError: "",
    });
  };
  handleChangeItemStatus = (event) => {
    console.log(event.target.checked);
    this.setState({
      itemStatus: event.target.checked,
    });
  };
  validate = () => {
    const { itemName, itemDescription, itemPriority } = this.state;
    let { itemNameError, itemDescriptionError, itemPriorityError } = this.state;
    if (!itemName) {
      itemNameError = "Please Enter Item Name";
    } else {
      itemNameError = "";
    }
    if (!itemDescription) {
      itemDescriptionError = "Please Enter Item Name";
    } else {
      itemDescriptionError = "";
    }
    if (!itemPriority) {
      itemPriorityError = "Please Enter Item Name";
    } else {
      itemPriorityError = "";
    }
    if (itemNameError || itemPriorityError || itemDescriptionError) {
      this.setState({
        itemNameError,
        itemPriorityError,
        itemDescriptionError,
      });
      return false;
    }
    return true;
  };
  handleSubmit = (event) => {
    const { itemName, itemDescription, itemPriority, itemStatus } = this.state;
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let collections = [itemName, itemDescription, itemPriority, itemStatus];
      let { data } = this.state;
      data.push(collections);
      setTimeout(() => {
        alert("perfect");
      }, 2000);
    }
  };
  render() {
    const {
      itemName,
      itemNameError,
      itemDescription,
      itemDescriptionError,
      itemPriority,
      itemPriorityError,
      itemStatus,
    } = this.state;
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
                placeholder="Enter Item Name"
                onChange={this.handleChangeItemName}
                value={itemName}
              />
              {itemNameError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {itemNameError}
                </div>
              ) : null}
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Item Description"
                value={itemDescription}
                onChange={this.handleChangeItemDescription}
              ></textarea>
              {itemDescriptionError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {itemDescriptionError}
                </div>
              ) : null}
            </div>
            <div
              class="form-group"
              style={{ boxShadow: "0px 0px 5px 2px #ccc" }}
            >
              <ImageUpload />{" "}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Priority</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Priority"
                onChange={this.handleChangeItemPriority}
                value={itemPriority}
              />
              {itemPriorityError ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontWeight: "bold",
                  }}
                >
                  {itemPriorityError}
                </div>
              ) : null}
            </div>
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitch1"
                onChange={this.handleChangeItemStatus}
                checked={itemStatus}
              />
              <label class="custom-control-label" for="customSwitch1">
                Status
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary mt-3"
              onClick={this.handleSubmit}
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    );
  }
}
