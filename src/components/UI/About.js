import React from "react";
import { Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import dash from "../../images/dash.svg";
import grAnaly from "../../images/growth-analytics.svg";
import SpaceTop from "../Space/SpaceTop";
import NewUserForm from "./NewUserForm";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation();


  return (
    <React.Fragment>
      <section className="section" id="features">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <img src={dash} alt="dash-intro" />
              <SpaceTop length={20} />
              <div className="features-box mt-5 mt-lg-0">
                <Fade bottom>
                  <h1 className="text-header">
                    {t("mainTitle")}
                  </h1>
                </Fade>
                <p className="text-muted web-desc">
                {t("mainsubTitle")}
                </p>
                <NewUserForm
                id="form"
                submitButton ={
                  <Button
                  type="submit"
                  style={{margin:"auto"}}
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  {t('joinWaitingList')}
                </Button>
                }
                />
                
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="features-img mx-auto mr-lg-0">
                <img src={grAnaly} alt="macbook" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </React.Fragment>
  );
};

export default About;
