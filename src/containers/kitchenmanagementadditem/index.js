import React, { Component } from "react";
import { LeftMenu, KitchenManagementAddItemForm } from "../../components";

export default class AddItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <div className="col-12 col-lg-9 col-md-9 mt-4">
            <KitchenManagementAddItemForm />
          </div>
        </div>
      </div>
    );
  }
}
