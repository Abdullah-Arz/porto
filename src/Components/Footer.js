import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
import { Col, Container, Row } from "react-bootstrap";
import '../Sass/Footer.scss';

const Footer = () => {
  return (
    <Container className='footer-maincontainer' fluid>
      <Row>
        <Col>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className=" mb-4">Contact Us</h5>
              <div>
                <p style={{fontSize:"0.9em"}}>
                  Hno : 277 Near Vill chopal, <br /> some place, city <br />
                  Pincode: 134568
                </p>
                <a
                  href="tel:+11 8123654885"
                  className="mt-3 d-block mb-1 "
                  style={{fontSize:"0.9em"}}
                >
                  +11 8123654885
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 "
                  style={{fontSize:"0.9em"}}
                >
                  email@gmail.com
                </a>
                {/* <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-3">
              <h5 className=" mb-4">Information</h5>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className=" py-2 mb-1" style={{fontSize:"0.9em"}}>
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className=" py-2 mb-1" style={{fontSize:"0.9em"}}>
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className=" py-2 mb-1" style={{fontSize:"0.9em"}}>
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className=" py-2 mb-1" style={{fontSize:"0.9em"}}>
                  Terms & Conditions
                </Link>
                <Link className=" py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className=" mb-4">Account</h5>
              <div className="footer-link d-flex flex-column">
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>About Us</Link>
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Faq</Link>
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className=" mb-4">Quick Links</h5>
              <div className="footer-link d-flex flex-column">
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Laptops</Link>
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Headphones</Link>
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Tablets</Link>
                <Link className=" py-2 mb-1" style={{fontSize:"0.9em"}}>Watch</Link>
              </div>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    
      {/* <footer className="py-4 pt-5">
        
      </footer> */}
      {/* <footer className="py-4">
        <div className="container-xxl" style={{maxWidth:"95%"}}>
          <div className="row">
            <div className="col-12">
              <p className="text-left mb-0" style={{marginLeft:"2em"}}>
                name. © 2021. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer> */}
    </Container>
  );
};

export default Footer;
