import React from "react";
import Aux from "../hoc/Aux/Aux";
import { useTranslation } from "react-i18next";

const FooterEnd = ({ termsandconditionslink, policylink }) => {
  const { t } = useTranslation();

  return (
    <Aux>
      <div className="footer-alt">
        <div className="container">
          <div className="basicflex row" style={{paddingLeft:"inherit"}}>
            <div className="inline">
              <p className="copy-rights text-muted mb-3 mb-sm-0">
                &copy; {new Date().getFullYear()} Swift Payment - {t('footer.allRightsReserved')}
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
                {t('footer.privacyPolicy')}
              </a>
              <a
                href={termsandconditionslink}
                onClick={(evt) => {
                  evt.preventDefault();
                }}
                className="text-simple margin-r-2 padding-l-2"
              >
                {t('footer.termsAndCondition')}
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
