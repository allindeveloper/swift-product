import React from "react";

const FooterEnd = ({termsandconditionslink,policylink}) => {
  return (
    <React.Fragment>
      <div className="footer-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="float-left pull-none">
                <p className="copy-rights text-muted mb-3 mb-sm-0">
                  &copy; {new Date().getFullYear()} Swift Payment - All
                  Rights Reserved.
                </p>
              </div>
              <div className="float-right pull-none ">
                <ul className=" ">
                  <li
                    className="list-inline-item"
                    style={{ marginRight: "3rem" }}
                  >
                    <a
                      href={policylink}
                      onClick={(evt) => {
                        evt.preventDefault();
                      }}
                      className="text-simple"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href={termsandconditionslink}
                      onClick={(evt) => {
                        evt.preventDefault();
                      }}
                      className="text-simple"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterEnd;
