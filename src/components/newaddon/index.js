import React, { Component } from "react";

export default class NewAddon extends Component {
  state = {
    items: [],
    name: "",
    number: 0,
    desc: "",
  };
  handleAddItemCard = () => {
    this.setState({
      name: "",
      number: "",
      desc: "",
    });
    const itemObj = {
      name: this.state.name,
      price: this.state.number,
      description: this.state.desc,
    };
    const { items } = this.state;
    items.push(itemObj);
    console.log(items);
  };
  render() {
    const { items } = this.state;
    // console.log(items);

    return (
      <div className="row">
        <div className="col-4 col-lg-3 col-md-3 customerDetailFormTitle">
          Add Addon
        </div>
        <div className="col-12 customerDetailFormMainDiv">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Addon Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                //   placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Required</label>
              <div className="d-flex">
                <div class="form-check mr-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Yes
                  </label>
                </div>
                <div class="form-check mr-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="exampleRadios2">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div class="form-group mr-5">
                <label for="exampleInputEmail1">Is Multiple Select</label>
                <div className="d-flex">
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  //   placeholder="Enter email"
                />
              </div>
            </div>
            <div className="addItemForm">
              <div className="d-flex justify-content-between">
                <p className="snaxaRedFont" style={{ fontWeight: 600 }}>
                  Enter Item Form
                </p>
                <i className="fa fa-bars snaxaRedFont"></i>
              </div>
              <div className="d-flex">
                <div class="form-group mr-4">
                  <label for="exampleInputEmail1">Item Name</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Item Name"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Item Price</label>
                  <input
                    class="form-control"
                    type="number"
                    placeholder="Enter Quantity"
                    onChange={(e) => this.setState({ number: e.target.value })}
                    value={this.state.number}
                  />
                </div>
              </div>
              <div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Item Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Item Description"
                    onChange={(e) => this.setState({ desc: e.target.value })}
                    value={this.state.desc}
                  ></textarea>
                </div>
              </div>
              <button
                type="button"
                onClick={this.handleAddItemCard}
                class="btn btn-primary mt-3 mr-4"
              >
                Add another item
              </button>
            </div>
            {items.map((item) => {
              return (
                <div className="d-flex flex-column addonItemDiv mt-4">
                  <div className="d-flex justify-content-between">
                    <p className="snaxaRedFont" style={{ fontWeight: 600 }}>
                      Addon Item
                    </p>
                    <i className="fa fa-times snaxaRedFont"></i>
                  </div>
                  <div className="d-flex">
                    <div class="form-group mr-5">
                      <label for="exampleInputEmail1">Item Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //   placeholder="Enter email"
                        disabled={true}
                        value={item.name}
                      />
                      {/* <p>{item.name}</p> */}
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Item Price</label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        disabled={true}
                        value={item.price}
                        //   placeholder="Enter email"
                      />
                      {/* <p>{item.price}</p> */}
                    </div>
                  </div>
                  <div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Item Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        disabled={true}
                        value={item.description}
                      ></textarea>
                      {/* <p>{item.description}</p> */}
                    </div>
                  </div>
                  <div className="d-flex">
                    <button type="button" class="btn btn-primary mt-3 mr-4">
                      Save
                    </button>
                    <button type="button" class="btn btn-primary mt-3 mr-4">
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
            <button type="submit" class="btn btn-primary mt-3 disabled">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
