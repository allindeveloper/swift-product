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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                tortor, pellentesque donec ut accumsan nibh turpis massa
                facilisis pellentesque amet.
              </p>
            </Col>
          </Row>
          <div className="row margin-t-30">
            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                caption="Reliable Reporting"
                caption="Smart Bundles"
                content="Lorem ipsum dolor sit amert plerusa consectetur vred adipiscing tortor donec deauteir accumsan nibh turpis treu massa, consectetur adipiscing tortor benelit. " />
              </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                caption="Quick Recharge"
                content="Lorem ipsum dolor sit amert plerusa consectetur vred adipiscing tortor donec deauteir accumsan nibh turpis treu massa, consectetur adipiscing tortor benelit. " />
              </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                {" "}
                <ServicesCard 
                viewMoreLink=""
                caption="Quick teller"
                content="Lorem ipsum dolor sit amert plerusa consectetur vred adipiscing tortor donec deauteir accumsan nibh turpis treu massa, consectetur adipiscing tortor benelit. " />
              </Fade>
            </Col>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Services;
