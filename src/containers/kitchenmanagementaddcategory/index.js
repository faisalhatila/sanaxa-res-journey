import React, { Component } from "react";
import { LeftMenu, KitchenManagementAddCategoryForm } from "../../components";

export default class AddCategory extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <div className="col-12 col-lg-9 col-md-9 mt-4">
            <KitchenManagementAddCategoryForm />
          </div>
        </div>
      </div>
    );
  }
}
