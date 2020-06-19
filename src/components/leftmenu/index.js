import React from "react";

const LeftMenu = () => {
  return (
    <div className="mt-4 col-12 col-lg-3 col-md-3">
      <div className="container leftMenuContainer">
        <div className="leftMenuMainDiv">
          <h2>
            <strong>Snaxa</strong>
          </h2>
          <div className="leftMenuMenuLinksMainDiv">
            <ul>
              <li className="mt-3">
                <div>
                  {/* <i class="fas fa-border-all mr-2"></i> */}
                  <img
                    src="assets/img/icons/leftMenu/dashboard.svg"
                    className="mr-2"
                  />
                  Dashboard
                </div>
              </li>
              {/* <li className="mt-3">
                <div>
                  <i class="fas fa-border-all mr-2"></i>
                  <img
                    src="assets/img/icons/leftMenu/customerManagement.svg"
                    className="mr-2"
                  />
                  Customer Management
                </div>
              </li> */}
              <li className="mt-3 d-flex align-items-center justify-content-between">
                <div>
                  {/* <i class="fas fa-border-all mr-2"></i> */}
                  <img
                    src="assets/img/icons/leftMenu/customerManagement.svg"
                    className="mr-2"
                  />
                  Customer Management
                </div>
                <img
                  src="assets/img/icons/leftMenu/dropdown.svg"
                  className="mr-2"
                />

                {/* <i class="fas fa-caret-down ml-4"></i> */}
              </li>
              <li className="mt-3">
                <div>
                  {/* <i class="fas fa-border-all mr-2"></i> */}
                  <img
                    src="assets/img/icons/leftMenu/restaurantManagement.svg"
                    className="mr-2"
                  />
                  Restaurant Management
                </div>
              </li>
              <li className="mt-3">
                <div>
                  {/* <i class="fas fa-border-all mr-2"></i> */}
                  <img
                    src="assets/img/icons/leftMenu/orderManagement.svg"
                    className="mr-2"
                  />
                  Order Management
                </div>
              </li>
              <li className="mt-3 d-flex align-items-center justify-content-between">
                <div>
                  {/* <i class="fas fa-border-all mr-2"></i> */}
                  <img
                    src="assets/img/icons/leftMenu/kitchenManagement.svg"
                    className="mr-2"
                  />
                  Kitchen Management
                </div>
                <img
                  src="assets/img/icons/leftMenu/dropdown.svg"
                  className="mr-2"
                />

                {/* <i class="fas fa-caret-down ml-4"></i> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className="col-lg-2 col-md-2">Hello</div>
  );
};

export default LeftMenu;
