import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Number of slides visible at once
    slidesToScroll: 1,
    arrows: true, // Add previous/next arrows
  };

  return (
    <div className="slider-container" style={{ padding: '20px' }}>
      <h2> Overview </h2>
      <Slider {...settings}>
        <div>
          <div style={{ background: '#FFADAD', height: '300px' }}></div>
        </div>
        <div>
          <div style={{ background: '#BDB2FF', height: '300px' }}></div>
        </div>
        <div>
          <div style={{ background: '#9BF6FF', height: '300px' }}></div>
        </div>
        <div>
          <div style={{ background: '#FFD6A5', height: '300px' }}></div>
        </div>
        <div>
          <div style={{ background: '#FFAFCC', height: '300px' }}></div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
