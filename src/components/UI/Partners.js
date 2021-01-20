import React from 'react';
import { Col, Row } from 'react-bootstrap';
import disney from "../../images/clients/disney.svg";
import drawkit from "../../images/clients/drawkit.svg";
import figma from "../../images/clients/figma.svg";
import google from "../../images/clients/google.svg";
import netflix from "../../images/clients/netflix.svg";
import stripe from "../../images/clients/stripe.svg";


const Partners = () => {
    


        return (
            <React.Fragment>
                <section className="">
                    <div className="container">
                        <Row>
                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={netflix} alt="netflix" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={drawkit} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>

                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={figma} alt="logo-img" className="mx-auto img-fluid d-block" />
                                    </div>
                            </Col>

                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={stripe} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>
                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={google} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>
                            <Col md="2">
                                <div className="client-images my-3 my-md-0">
                                    <img src={disney} alt="logo-img" className="mx-auto img-fluid d-block" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    
}

export default Partners;


