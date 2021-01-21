import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ServicesCard from "../Card/ServicesCard";

const Services = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="services">
        <div className="container">
          <Row>
            <Col lg="8" className="offset-lg-2">
              <Fade bottom>
                <h1 className="section-title text-center text-center-black ">
                  Our Services
                </h1>
              </Fade>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
              Swift Networks offers state-of-the-art broadband services for cost-effective and reliable deployment of a multi-service network, offering converged voice telephony, video conferencing, video surveillance, high-Speed data transmission and Internet access services over our secure, high-speed and reliable telecommunications pipe.
              </p>
            </Col>
          </Row>
          <div className="row margin-t-30">
            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                caption="Payment Controls"
                content="SWIFT Payment Controls makes it easy for you to mitigate fraudulent attacks by detecting and preventing high-risk payments." />
              </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                caption="Quick Recharge"
                content="Using our Super Fast Recharge APIs, you can buy Large Bundles, Transfer to Third Party and perform many other operations at lightning speed" />
              </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                {" "}
                <ServicesCard 
                viewMoreLink=""
                caption="Quick teller"
                content="With Seamless integration into Quick Teller, now all your worries about online payments have been taken care of. we'll do the work for you." />
              </Fade>
            </Col>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Services;
