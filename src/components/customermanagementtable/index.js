import React, { Component } from "react";

export default class CustomerManagementTable extends Component {
  state = {
    data: [
      {
        id: 124156,
        customerName: "Faisal",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124157,
        customerName: "Hanif",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124158,
        customerName: "Hatila",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124159,
        customerName: "Faisal",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124160,
        customerName: "Hanif",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124161,
        customerName: "Hatila",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
      {
        id: 124163,
        customerName: "Faisal",
        emailAddress: "hatilas1994@gmail.com",
        address: "Karachi",
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <div class="container">
        <div className="d-flex" style={{ padding: "10px 0" }}>
          <button type="button" class="btn btn-primary mr-3">
            Primary
          </button>
          <div style={{ margin: 0 }} class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <button type="button" class="btn btn-primary ml-3">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <table class="table table-hover">
          <thead style={{ backgroundColor: "gray" }}>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.customerName}</td>
                  <td>{item.emailAddress}</td>
                  <td>{item.address}</td>
                  <td>
                    <i class="far fa-edit mr-3"></i>
                    <i class="far fa-trash-alt"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
