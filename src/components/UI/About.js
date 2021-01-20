import React from "react";
// import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import dash from "../../images/dash.svg";
import grAnaly from "../../images/growth-analytics.svg";
import SpaceTop from "../Space/SpaceTop";

const About = () => {
 

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
                    Enabling Seamless Integrations between banks
                  </h1>
                </Fade>
                <p className="text-muted web-desc">
                  Swift Enables Fast and Reliable Global Payment  
                  services via our super simple APIs.
                </p>
                <a
                  href="#"
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Join Waiting List
                </a>
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
