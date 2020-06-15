import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./route";
import PvtRoute from "./privateRoute";
import {
  HomeContainer,
  LoginContainer,
  PageNotFound,
  Dashboard,
} from "../containers";
const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <PvtRoute exact path="/login" component={LoginContainer} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
