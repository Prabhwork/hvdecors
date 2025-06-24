import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";  // Use actual company logos or profile images
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "The platform's seamless integration with our supply chain has made procurement much more efficient. We are now able to scale faster and optimize costs with reliable suppliers."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="Company Logo" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">TechSolutions Ltd.</h6>
            <p className="section__description">B2B Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "We’ve partnered with multiple suppliers through this platform, resulting in cost savings and improved product availability. Our business has seen significant growth since joining."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="Company Logo" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">GlobalTrade Co.</h6>
            <p className="section__description">B2B Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Negotiating deals and sourcing products through this platform has been incredibly efficient. We are able to scale operations and reduce overhead thanks to the platform’s robust features."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="Company Logo" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">AutoParts Inc.</h6>
            <p className="section__description">B2B Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "This platform has been integral to our growth as a wholesale business. The streamlined processes and top-notch customer service have made it easy to scale and expand our operations."
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="Company Logo" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">RetailMasters</h6>
            <p className="section__description">B2B Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
