import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ServicesCard from "../Card/ServicesCard";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section bg-light" id="services">
        <div className="container">
          <Row>
            <Col lg="8" className="offset-lg-2">
              <Fade bottom>
                <h1 className="section-title text-center text-center-black ">
                  {t("services.mainTitle")}
                </h1>
              </Fade>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
              {t("services.subTitle")}
              </p>
            </Col>
          </Row>
          <div className="row margin-t-30">
            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                viewMoreLabel={t("services.viewMore")}
                caption={t("services.cards.firstCardCaption")}
                content={t("services.cards.firstCardDescription")}
                />
              </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                <ServicesCard 
                viewMoreLink=""
                viewMoreLabel={t("services.viewMore")}
                caption={t("services.cards.secondCardCaption")}
                content={t("services.cards.secondCardDescription")}
                />
                </Fade>
            </Col>

            <Col lg="4" className="margin-t-20">
              <Fade bottom>
                {" "}
                <ServicesCard 
                viewMoreLabel={t("services.viewMore")}
                viewMoreLink=""
                caption={t("services.cards.thirdCardCaption")}
                content={t("services.cards.thirdCardDescription")}
                />
              </Fade>
            </Col>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Services;
