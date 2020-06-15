import React from "react";

const LeftMenu = () => {
  return (
    <div className="mt-4">
      <div className="container leftMenuContainer">
        <div className="col-2 leftMenuMainDiv">
          <h2>
            <strong>Snaxa</strong>
          </h2>
          <div className="leftMenuMenuLinksMainDiv">
            <ul>
              <li className="mt-3">
                <i class="fas fa-border-all mr-4"></i>Dashboard
              </li>
              <li className="mt-3">
                <i class="fas fa-border-all mr-4"></i>Dashboard
              </li>
              <li className="mt-3">
                <i class="fas fa-border-all mr-4"></i>Dashboard
              </li>
              <li className="mt-3">
                <i class="fas fa-border-all mr-4"></i>Dashboard
              </li>
              <li className="mt-3">
                <i class="fas fa-border-all mr-4"></i>Dashboard
                <i class="fas fa-caret-down ml-4"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
