import React, { useState } from "react";
import { Button } from "react-bootstrap";
import dashTwo from "../../images/dashTwo.svg";
import DotsLoader from "../Loader/DotsLoader";
import Player from "../Player/Player";
const ApiService = ({}) => {

  const [loading, setloading] = useState(true);
  
  const handleReady = ()=>{
    setloading(false)
  }

  const handleError = () => {
    setloading(false)
  }
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
                  Our High Performant and blazing fast APIs arre ever ready for you.
                  we have a very clean and concise documentation that will giude you through setting up and familiarizing yourself 
                  with what is required
                </p>
                <Button
                  type="submit"
                  style={{margin:"auto"}}
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Go to Docs
                </Button>
              </div>
            </div>
            <div className="col-lg-7 order-1 order-lg-2">
              <div className="features-img mx-auto mr-lg-0">
                {loading=== true&&
                    <DotsLoader/>
                }
                <Player id="video"
                height="100%"
                width="100%"
                url="https://www.youtube.com/watch?v=wPHmp4Cpoik"
                onReady={
                    handleReady
                }
                onError={
                  handleError
                }
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
