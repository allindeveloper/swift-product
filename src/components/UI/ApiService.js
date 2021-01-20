import React from "react";
import dashTwo from "../../images/dashTwo.svg";
import Player from "../Player/Player";
const ApiService = () => {
  return (
    <React.Fragment>
      <section className="section-lg bg-lightblue" id="apiservice">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <img src={dashTwo} alt="dash-api" />
              <div className="features-box mt-5 mt-lg-0">
                <h3 className="text-header">
                  Powerful and <br /> Easy to use APIs
                </h3>
                <p className="text-muted web-desc">
                  Lorem ipsum dolor sit amet, consectetur vred adipiscing
                  tortor, pellentesque donec deaut accumsan nibh turpis treu
                  massa consectetur adipiscing tortor benelit. Adipiscing
                  tortor, pellentesque donec deaut accumsan nibh turpis
                  pellentesque donec deaut consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="features-img mx-auto mr-lg-0">
                <Player id="video"
                height="100%"
                width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ApiService;
