
import React from 'react';
import facebook from "../../images/facebook.svg";
import instragram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
// import { a } from 'react-router-dom';

const Footer = ()=>{
    

        return (
            <React.Fragment>
                <footer className="footer" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 margin-t-7">
                            <a className="navbar-brand" href="/">
                                Swift Payment   </a>

                                <div className="text-muted ">
                                    <ul className="list-unstyled footer-list">
                                        <li><a className="text-small" onClick={evt => {  evt.preventDefault(); } } to="#">West Coast <br/>
12b, washington drive  <br/>
Georgia</a></li>
                                      </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4 className="text-simple-bold">Company</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><a className="text-alone" onClick={evt => {  evt.preventDefault(); } } to="#">About us</a></li>
                                        <li><a className="text-alone" onClick={evt => {  evt.preventDefault(); } } to="#">FAQs</a></li>
                                        <li><a className="text-alone" onClick={evt => {  evt.preventDefault(); } } to="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4 className="text-simple-bold">Services</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        <li><a className="text-alone" onClick={evt => {  evt.preventDefault(); } } to="">Join Waiting List</a></li>
                                     </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 margin-t-20">
                                <h4 className="text-simple-bold">Contact Us</h4>
                                <div className="margin-t-20">
                                    <p className="text-alone"><a href="tel:+496170961709">+234 [0] 700 000 1111</a></p>
                                    <p className="text-alone text-underline"><a href="mailto:contactus@swiftpayment.com?subject=Enquiry About Swift Payment">contactus@swiftpayment.com</a></p>
                                    <p className="text-alone">Follow us</p>
                                    <div className="inline-flex">
                                        <div style={{paddingRight:"1rem"}}><img src={twitter} /></div>
                                        <div style={{paddingRight:"1rem"}}><img src={linkedin} /></div>
                                        <div style={{paddingRight:"1rem"}}><img src={facebook} /></div>
                                        <div style={{paddingRight:"1rem"}}><img src={instragram} /></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    
}

export default Footer;


