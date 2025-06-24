import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";


import "../styles/contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      

      <section className="contact__section">
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Let’s Connect With Our Sales Team</h6>
              <p className="section__description">
                Looking to buy in bulk or have a business query? Fill the form and our team will get back to you shortly.
              </p>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Company Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Business Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone Number" type="tel" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Describe your business requirement"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Submit Inquiry
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Corporate Office</h6>
                <p className="section__description mb-0">
                  B2B Ecommerce Pvt. Ltd., 21 Business Hub, Patel Nagar, New Delhi, India - 110008
                </p>

                <div className="d-flex align-items-center gap-2 mt-3">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+91 98102 33434</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">support@b2becommerce.com</p>
                </div>

                <h6 className="fw-bold mt-4">Connect With Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
