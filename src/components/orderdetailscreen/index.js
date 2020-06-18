import React from "react";

const OrderDetails = () => {
  return (
    <div class="container">
      <div className="orderDetailsRow1">
        <div className="col-12 statusHeadingDiv">
          <div className="statusHeadingDiv">
            <p>Status</p>
          </div>
        </div>
        <div className="col-12 d-flex mt-3">
          <div className="col-12 col-lg-3 col-md-3">
            <div class="form-group orderStatusDropdownDiv">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Dispatched</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-md-9">
            <div className="d-flex flex-column orderDescriptionParaDiv">
              <p>Order Description</p>
              <p className="orderDescriptionPara">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="orderDetailsRow2 mt-4">
        <div className="row mt-3">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="orderDetailsRow2Col1">
              <div className="orderDetailsRow2Col1TitleDiv">
                <p>Restaurant Details</p>
              </div>
              <div className="orderDetailsRow2Col1DescriptionDiv">
                <p className="bold">Order#</p>
                <p>111242</p>
                <p className="bold">Restaurant</p>
                <p>Alaska</p>
                <p className="bold">Location</p>
                <p>Karachi</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="orderDetailsRow2Col1">
              <div className="orderDetailsRow2Col1TitleDiv">
                <p>Restaurant Details</p>
              </div>
              <div className="orderDetailsRow2Col1DescriptionDiv">
                <p className="bold">Order#</p>
                <p>111242</p>
                <p className="bold">Restaurant</p>
                <p>Alaska</p>
                <p className="bold">Location</p>
                <p>Karachi</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="orderDetailsRow2Col1">
              <div className="orderDetailsRow2Col1TitleDiv">
                <p>Restaurant Details</p>
              </div>
              <div className="orderDetailsRow2Col1DescriptionDiv">
                <p className="bold">Order#</p>
                <p>111242</p>
                <p className="bold">Restaurant</p>
                <p>Alaska</p>
                <p className="bold">Location</p>
                <p>Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
