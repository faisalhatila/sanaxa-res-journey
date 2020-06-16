import React, { Component } from "react";
import { LeftMenu, DataCounter } from "../../components";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <DataCounter />
        </div>
      </div>
    );
  }
}
