import React, { Component } from "react";
import { LeftMenu, DataCounter, LineChart } from "../../components";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftMenu />
          <div className="col-12 col-lg-9 col-md-9 mt-4">
            <DataCounter />
            <div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
