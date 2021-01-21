import React, { useState } from "react";
import logo from "../../images/logo.png";
import SmartScroll from "../ScrollToTop/SmartScroll";
const Header = ({}) => {
  const [Tab, setTab] = useState("");
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  /**
   * Sets active tab
   */
  const setActiveTab = (tab, e) => {
    setTab(tab);
  };

  return (
    <React.Fragment>
      <div id="is-sticky">
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-custom sticky navbar-custom navbar-white"
          id="nav-bar"
        >
          <div className="container">
            <a className="navbar-brand" id="header-img" href="/">
              <img
                src={logo}
                alt="Swift Payment Logo"
                style={{ width: "40%" }}
              />
            </a>

            <button
              className="navbar-toggler"
              onClick={toggleMenu}
              type="button"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            <div
              className={
                isOpen
                  ? "collapse navbar-collapse show"
                  : "flex-end collapse navbar-collapse"
              }
              style={{ display: isOpen ? "inline-grid" : "" }}
              id="navbarCollapse"
            >
              <SmartScroll
                scrollTargetIds={["home", "services", "apiservice", "contact"]}
                activeNavClass="active"
                scrollDuration="800"
                headerBackground="true"
                className={
                  isOpen
                    ? "navbar-nav ml-0 float-left"
                    : "navbar-nav navbar-center"
                }
              >
                <ul
                  className={
                    isOpen
                      ? "navbar-nav navbar-left"
                      : "navbar-nav ml-auto navbar-left"
                  }
                  id="mySidenav"
                >
                  <li className="nav-item active">
                    <a href="#home" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#apiservice" className="nav-link">
                      API
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </SmartScroll>
              <div className={isOpen ? "nav-button" : "nav-button"}>
                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <button
                      type="button"
                      className="btn btn-custom navbar-btn waves-effect waves-light"
                    >
                      Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
