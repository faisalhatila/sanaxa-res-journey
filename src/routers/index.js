import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./route";
import PvtRoute from "./privateRoute";
import {
  HomeContainer,
  LoginContainer,
  PageNotFound,
  Dashboard,
  CustomerManagement,
  AddCustomer,
  Register,
  RestaurantManagement,
  OrdertManagement,
  UpdateVendor,
  KitchenManagement,
  KitchenMenu,
  KitchenManagementAddCategory,
  KitchenManagementAddItem,
  OrderDetails,
  BecomeAPartner,
  AddAddons,
} from "../containers";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <PvtRoute exact path="/login" component={LoginContainer} />
      <PvtRoute exact path="/register" component={Register} />
      <PvtRoute exact path="/become-a-partner" component={BecomeAPartner} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/customer-management" component={CustomerManagement} />
      <Route
        exact
        path="/restaurant-management"
        component={RestaurantManagement}
      />
      <Route exact path="/order-management" component={OrdertManagement} />
      <Route exact path="/order-details" component={OrderDetails} />
      <Route exact path="/update-vendor" component={UpdateVendor} />
      <Route
        exact
        path="/kitchen-management-categories"
        component={KitchenManagement}
      />
      <Route
        exact
        path="/add-category"
        component={KitchenManagementAddCategory}
      />
      <Route exact path="/add-addons" component={AddAddons} />
      <Route exact path="/add-item" component={KitchenManagementAddItem} />
      <Route exact path="/kitchen-menu" component={KitchenMenu} />
      <Route exact path="/add-customer" component={AddCustomer} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
