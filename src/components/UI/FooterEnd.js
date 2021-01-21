import React from "react";
import Aux from "../hoc/Aux/Aux";
const FooterEnd = ({ termsandconditionslink, policylink }) => {
  return (
    <Aux>
      <div className="footer-alt">
        <div className="container">
          <div className="basicflex row" style={{paddingLeft:"inherit"}}>
            <div className="inline">
              <p className="copy-rights text-muted mb-3 mb-sm-0">
                &copy; {new Date().getFullYear()} Swift Payment - All Rights
                Reserved.
              </p>
            </div>

            <div>
              <a
                href={policylink}
                onClick={(evt) => {
                  evt.preventDefault();
                }}
                className="text-simple"
              >
                Privacy Policy
              </a>
              <a
                href={termsandconditionslink}
                onClick={(evt) => {
                  evt.preventDefault();
                }}
                className="text-simple margin-r-2 padding-l-2"
              >
                Terms and Conditions
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </Aux>
  );
};

export default FooterEnd;
