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
                  <i class="fas fa-border-all mr-4"></i>Dashboard
                </div>
              </li>
              <li className="mt-3">
                <div>
                  <i class="fas fa-border-all mr-4"></i>Dashboard
                </div>
              </li>
              <li className="mt-3">
                <div>
                  <i class="fas fa-border-all mr-4"></i>Dashboard
                </div>
              </li>
              <li className="mt-3">
                <div>
                  <i class="fas fa-border-all mr-4"></i>Dashboard
                </div>
              </li>
              <li className="mt-3 d-flex align-items-center justify-content-between">
                <div>
                  <i class="fas fa-border-all mr-4"></i>Dashboard
                </div>
                <i class="fas fa-caret-down ml-4"></i>
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
