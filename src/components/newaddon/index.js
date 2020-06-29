import React, { Component } from "react";
let itemIndex = 0;
export default class NewAddon extends Component {
  state = {
    items: [],
    name: "",
    number: 0,
    desc: "",
    isDisplayAddForm: true,
    updatedName: "",
    updatedNumber: "",
    updatedDesc: "",
  };
  handleAddItemCard = () => {
    const itemObj = {
      itemIndex: itemIndex,
      name: this.state.name,
      price: this.state.number,
      description: this.state.desc,
      isDisable: true,
    };
    itemIndex++;
    this.state.items.push(itemObj);
    this.setState(
      {
        items: this.state.items,
        name: "",
        number: "",
        desc: "",
      },
      () => {
        console.log("State", this.state);
      }
    );
  };
  handleDeleteItemCard = (itemIndex) => {
    // console.log(props);
    // alert("hi");
    let { items } = this.state;
    items = this.state.items.filter((item) => {
      return item.itemIndex !== itemIndex;
    });
    this.setState({ items });
    console.log(items);
  };
  updateItem = (itemIndex) => {
    let { items } = this.state;
    const newItem = items.map((item) => {
      if (item.itemIndex === itemIndex) {
        const updatedItem = {
          ...item,
          isDisable: false,
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
    // console.log(itemIndex);
  };
  handleUpdatedName = (itemIndex, event) => {
    let { items } = this.state;
    const newItem = items.map((item) => {
      if (item.itemIndex === itemIndex) {
        const updatedItem = {
          ...item,
          name: event,
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
  };
  handleUpdatedPrice = (itemIndex, event) => {
    let { items } = this.state;
    const newItem = items.map((item) => {
      if (item.itemIndex === itemIndex) {
        const updatedItem = {
          ...item,
          price: event,
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
  };
  handleUpdatedDescription = (itemIndex, event) => {
    let { items } = this.state;
    const newItem = items.map((item) => {
      if (item.itemIndex === itemIndex) {
        const updatedItem = {
          ...item,
          description: event,
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
  };

  handleDisplayAddItemForm = () => {
    this.setState({
      isDisplayAddForm: !this.state.isDisplayAddForm,
    });
  };
  render() {
    const { items, isDisplayAddForm } = this.state;
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
                <p
                  className="snaxaRedFont noMargin"
                  style={{ fontWeight: 600 }}
                >
                  Enter Item Form
                </p>
                <i
                  className="fa fa-bars snaxaRedFont"
                  onClick={this.handleDisplayAddItemForm}
                ></i>
              </div>
              {isDisplayAddForm ? (
                <div>
                  <div className="d-flex">
                    <div class="form-group mr-4">
                      <label for="exampleInputEmail1">Item Name</label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter Item Name"
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        value={this.state.name}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Item Price</label>
                      <input
                        class="form-control"
                        type="number"
                        placeholder="Enter Quantity"
                        onChange={(e) =>
                          this.setState({ number: e.target.value })
                        }
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
                        onChange={(e) =>
                          this.setState({ desc: e.target.value })
                        }
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
              ) : null}
            </div>
            {items.map((item) => {
              return (
                <div className="d-flex flex-column addonItemDiv mt-4">
                  <div className="d-flex justify-content-between">
                    <p className="snaxaRedFont" style={{ fontWeight: 600 }}>
                      Addon Item
                    </p>
                    <i
                      className="fa fa-times snaxaRedFont"
                      onClick={() => this.handleDeleteItemCard(item.itemIndex)}
                    ></i>
                  </div>
                  <div className="d-flex">
                    <div class="form-group mr-5">
                      <label for="exampleInputEmail1">Item Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        disabled={item.isDisable}
                        value={item.name}
                        onChange={(event) =>
                          this.handleUpdatedName(
                            item.itemIndex,
                            event.target.value
                          )
                        }
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Item Price</label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        disabled={item.isDisable}
                        value={item.price}
                        onChange={(event) =>
                          this.handleUpdatedPrice(
                            item.itemIndex,
                            event.target.value
                          )
                        }
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
                        disabled={item.isDisable}
                        value={item.description}
                        onChange={(event) =>
                          this.handleUpdatedDescription(
                            item.itemIndex,
                            event.target.value
                          )
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button type="button" class="btn btn-primary mt-3 mr-4">
                      Save
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary mt-3 mr-4"
                      onClick={() => this.updateItem(item.itemIndex)}
                    >
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
