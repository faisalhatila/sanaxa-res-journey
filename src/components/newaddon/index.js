import React, { Component } from "react";
let itemIndex = 0;
export default class NewAddon extends Component {
  state = {
    addOnName: "",
    addOnIsRequired: false,
    addOnIsMultipleSelect: "true",
    addOnQuantity: 1,
    items: [],
    name: "",
    number: 0,
    desc: "",
    isDisplayAddForm: true,
  };
  handleAddOnNameChange = (event) => {
    this.setState({
      addOnName: event.target.value,
    });
  };
  handleAddOnQuantityChange = (event) => {
    this.setState({
      addOnQuantity: event.target.value,
    });
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
      updatedName: newItem,
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
      updatedNumber: newItem,
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
      updatedDesc: newItem,
    });
  };
  handleSaveUpdate = (itemIndex) => {
    let { items } = this.state;
    const newItem = items.map((item) => {
      if (item.itemIndex === itemIndex) {
        const updatedItem = {
          ...item,
          isDisable: true,
        };
        return updatedItem;
      }
      return item;
    });
    this.setState({
      items: newItem,
    });
    console.log(newItem);
  };

  handleDisplayAddItemForm = () => {
    this.setState({
      isDisplayAddForm: !this.state.isDisplayAddForm,
    });
  };
  render() {
    const { items, isDisplayAddForm } = this.state;

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
                onChange={this.handleAddOnNameChange}
                value={this.state.addOnName}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Required</label>
              <div
                className="d-flex"
                onChange={(e) =>
                  this.setState({ addOnIsRequired: e.target.value })
                }
              >
                <div class="form-check mr-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value={true}
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
                    value={false}
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
                <div
                  className="d-flex"
                  onChange={(e) =>
                    this.setState({ addOnIsMultipleSelect: e.target.value })
                  }
                >
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadiosSec"
                      id="exampleRadios3"
                      value="true"
                    />
                    <label class="form-check-label" for="exampleRadios3">
                      Yes
                    </label>
                  </div>
                  <div class="form-check mr-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadiosSec"
                      id="exampleRadios4"
                      value="false"
                    />
                    <label class="form-check-label" for="exampleRadios4">
                      No
                    </label>
                  </div>
                </div>
              </div>
              {this.state.addOnIsMultipleSelect === "true" ? (
                <div class="form-group">
                  <label for="exampleInputEmail1">Quantity</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={this.handleAddOnQuantityChange}
                    value={this.state.addOnQuantity}
                  />
                </div>
              ) : null}
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
            {items.map((item, i) => {
              return (
                <div key={i} className="d-flex flex-column addonItemDiv mt-4">
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
                    <button
                      type="button"
                      class="btn btn-primary mt-3 mr-4"
                      onClick={() => {
                        this.handleSaveUpdate(item.itemIndex);
                      }}
                    >
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
