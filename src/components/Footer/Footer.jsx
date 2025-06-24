import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { RiLeafLine } from "react-icons/ri";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Our Services",
  },
  {
    path: "/partners",
    display: "Business Partners",
  },
  {
    path: "/careers",
    display: "Careers",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <RiLeafLine className="logo-icon" />
                  <span>
                    TimberCraft Studios <br /> Handmade Furniture Since 1985
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Crafting heirloom-quality furniture from sustainably sourced timber. Each piece tells a story of traditional craftsmanship meeting modern design.
            </p>
            <div className="social__links d-flex align-items-center gap-3 mt-4">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Our Workshop</h5>
              <p className="office__info">
                <i className="ri-map-pin-line"></i> 123 Woodcraft Lane, Portland, OR 97209
              </p>
              <p className="office__info">
                <i className="ri-phone-line"></i> (503) 555-0192
              </p>
              <p className="office__info">
                <i className="ri-mail-line"></i> hello@timbercraft.com
              </p>
              <p className="office__info">
                <i className="ri-time-line"></i> Mon-Fri: 9am - 6pm
              </p>
              <div className="trust-badges mt-4">
                <span className="badge">
                  <RiLeafLine /> Sustainably Sourced
                </span>
                <span className="badge">
                  <i className="ri-medal-line"></i> Lifetime Warranty
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Design Inspiration</h5>
              <p className="section__description">
                Subscribe for woodworking tips, design trends, and exclusive offers.
              </p>
              <div className="newsletter">
                <input type="email" placeholder="Your email address" />
                <button className="newsletter__btn">
                  <i className="ri-send-plane-line"></i>
                </button>
              </div>
              <div className="payment-methods mt-4">
                <h6>We Accept:</h6>
                <div className="payment-icons">
                  <i className="ri-visa-line"></i>
                  <i className="ri-mastercard-line"></i>
                  <i className="ri-paypal-line"></i>
                  <i className="ri-currency-line"></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>
                Copyright {year}, TimberCraft Studios. All rights reserved.
                <span className="divider">|</span>
                <Link to="/privacy">Privacy Policy</Link>
                <span className="divider">|</span>
                <Link to="/terms">Terms of Service</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;