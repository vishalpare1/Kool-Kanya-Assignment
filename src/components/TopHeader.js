import React, { useState } from "react";

const TopHeader = () => {
  const [isCollapsed, toggleMenu] = useState(false);

  return (
    <div className="top-header">
      <nav className="navbar navbar-blue">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
              onClick={() => toggleMenu(!isCollapsed)}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <button className="navbar-brand">DEMO Streaming</button>
          </div>
          <div
            className={"navbar-collapse" + (isCollapsed ? "" : " collapse")}
            id="myNavbar"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <button className="header-link login-btn">Log In</button>
              </li>
              <li>
                <button className="header-link trial-btn">
                  Start your free trial
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
