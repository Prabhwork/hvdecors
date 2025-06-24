import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../../styles/hero-slider.css";
import backgroundVideo from "../../assets/all-images/background.mp4"; // Adjust the path as necessary

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="hero-slider-wrapper">
      {/* Background Video */}
       <video autoPlay muted loop playsInline className="hero-video-bg">
    <source src={backgroundVideo} type="video/mp4" /> {/* Update path as needed */}
    Your browser does not support the video tag.
  </video>

      {/* Slider Content */}
      <Slider {...settings} className="hero__slider">
        {[1, 2, 3].map((item, index) => (
          <div className={`slider__item slider__item-0${item} mt0`} key={index}>
            <Container>
              <div className="slider__content">
                <h4 className="text-light mb-3">Hari Vishnu Decors Excellence</h4>
                <h1 className="text-light mb-4">
                  From Classic to Contemporary – We’ve Got You Covered.
                </h1>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
