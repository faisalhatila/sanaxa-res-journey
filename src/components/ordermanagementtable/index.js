import React, { Component } from "react";

export default class CustomerManagementTable extends Component {
  state = {
    data: [
      {
        id: 124156,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124157,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124158,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124159,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124160,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124161,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
      },
      {
        id: 124163,
        restaurant: "Alaska Restaurant",
        customer: "Faisal",
        foodItem: "Big Burger",
        totalPrice: 20,
        dateTime: "09/20-09:pm",
        paymentMethod: "COD",
        status: "Pending",
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
              <th>Restaurant</th>
              <th>Customer</th>
              <th>Food Item</th>
              <th>Total Price</th>
              <th>Date-Time</th>
              <th>Payment Mode</th>
              <th>Status</th>
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
                  <td>{item.restaurant}</td>
                  <td>{item.customer}</td>
                  <td>{item.foodItem}</td>
                  <td>${item.totalPrice}</td>
                  <td>{item.dateTime}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.status}</td>
                  <td>
                    <i class="far fa-edit mr-3"></i>
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
