import React, { Component } from "react";

export default class KitchenManagementTable extends Component {
  state = {
    data: [
      {
        id: 124156,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124157,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124158,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124159,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124160,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124161,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
      {
        id: 124163,
        name: "Italian",
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        status: "Enabled",
        priority: 1,
      },
    ],
  };
  render() {
    const { data } = this.state;
    return (
      <div class="container">
        <div className="d-flex" style={{ padding: "10px 0" }}>
          <button type="button" class="btn btn-primary mr-3">
            + Add New
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
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
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
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                  <td>{item.priority}</td>
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
