import React, { Component } from "react";
// import { a } from 'react-router-dom';
import SmartScroll from "../ScrollToTop/SmartScroll";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { Tab: "", isOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  /**
   * Sets active tab
   */
  setActiveTab = (tab, e) => {
    this.setState({ Tab: tab });
  };

  render() {
    return (
      <React.Fragment>
        <div id="is-sticky">
          <nav
            className="navbar navbar-expand-lg fixed-top navbar-custom sticky navbar-custom navbar-white"
            id="nav-bar"
          >
            <div className="container">
              <a className="navbar-brand" href="/">
                Swift Payment{" "}
              </a>

              <button
                className="navbar-toggler"
                onClick={this.toggleMenu}
                type="button"
              >
                <i className="mdi mdi-menu"></i>
              </button>
              <div
                className={
                  this.state.isOpen
                    ? "collapse navbar-collapse show"
                    : "flex-end collapse navbar-collapse"
                }
                style={{ display: this.state.isOpen ? "inline-grid" : "" }}
                id="navbarCollapse"
              >
                <SmartScroll
                  scrollTargetIds={[
                    "home",
                    "services",
                    "apiservice",
                    "contact",
                  ]}
                  activeNavClass="active"
                  scrollDuration="800"
                  headerBackground="true"
                  className={
                    this.state.isOpen
                      ? "navbar-nav ml-0 float-left"
                      : "navbar-nav navbar-center"
                  }
                >
                  <ul
                    className={
                      this.state.isOpen
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
                <div
                  className={this.state.isOpen ? "nav-button" : "nav-button"}
                >
                  <ul className="nav navbar-nav navbar-left">
                    <li>
                      <button
                        type="button"
                        className="btn btn-custom navbar-btn waves-effect waves-light"
                      >
                        Partner Login
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
  }
}

export default Header;
