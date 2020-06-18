import React, { Component } from "react";
import {
  LeftMenu,
  KitchenManagementTable,
  OrderDetailsScreen,
} from "../../components";

export default class OrderDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <div className="col-12 col-lg-9 col-md-9 mt-4">
            <OrderDetailsScreen />
          </div>
        </div>
      </div>
    );
  }
}
