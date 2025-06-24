import React from "react";
import { Container, Row, Col } from "reactstrap";
import OurMembers from "../components/UI/OurMembers";
import aboutImg from "../assets/all-images/bikes-img/furniture.png";
import workshopImg from "../assets/all-images/bikes-img/b2b-partner.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Story Section */}
      <section className="about__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__section-content">
                <h4 className="section__subtitle">Our Story</h4>
                <h2 className="section__title">
                  Welcome to TimberCraft - Handmade Furniture Since 1985
                </h2>
                <p className="section__description">
                  TimberCraft creates heirloom-quality furniture using sustainably sourced timber from local forests. 
                  Each piece is crafted by skilled artisans combining traditional techniques with contemporary design.
                </p>
                <p className="section__description">
                  We take pride in transforming raw timber into functional art for your home. From selecting the perfect 
                  wood grain to applying the final finish, every step reflects our commitment to quality craftsmanship.
                </p>
                <p className="section__description">
                  Our furniture is built to last generations, using time-honored joinery techniques and non-toxic finishes. 
                  Whether you need a statement dining table or custom bookshelf, we create pieces that become part of your family's story.
                </p>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line"></i> 123 Woodcraft Lane, Portland, OR
                  </p>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-phone-line"></i> (503) 555-0192
                  </p>
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-mail-line"></i> hello@timbercraft.com
                  </p>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i className="ri-global-line"></i> www.timbercraft.com
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="TimberCraft Workshop" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Craftsmanship Section */}
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={workshopImg} alt="Our Furniture Workshop" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  The TimberCraft Difference
                </h2>

                <p className="section__description">
                  <i className="ri-leaf-line"></i> At <strong>TimberCraft</strong>, we believe furniture should tell a story - 
                  of the wood's journey from forest to home, and the hands that shaped it.
                </p>

                <p className="section__description">
                  Our workshop specializes in:
                </p>

                <div className="craftsmanship-list">
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Solid Wood Construction</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Sustainably Sourced Timber</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Custom Furniture Design</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Hand-Finished Surfaces</p>
                  <p className="section__description"><i className="ri-checkbox-circle-line"></i> Lifetime Craftsmanship Guarantee</p>
                </div>

                <p className="section__description">
                  <i className="ri-user-star-line"></i> Each <strong>TimberCraft</strong> piece is made to order by our master 
                  craftsmen using traditional joinery techniques and natural finishes.
                </p>

                <div className="contact-widget d-flex align-items-center gap-3 mt-4">
                  <span className="icon-wrapper">
                    <i className="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section__subtitle">Have Design Questions?</h6>
                    <h4>+1 (503) 555-0192</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Artisans Section */}
      <section className="artisans-section">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Our Artisans</h6>
              <h2 className="section__title">Meet The Craftsmen</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;