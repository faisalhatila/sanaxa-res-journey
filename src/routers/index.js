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
} from "../containers";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <PvtRoute exact path="/login" component={LoginContainer} />
      <PvtRoute exact path="/register" component={LoginContainer} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/customer-management" component={CustomerManagement} />
      <Route exact path="/add-customer" component={AddCustomer} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
