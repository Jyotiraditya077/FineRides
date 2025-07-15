import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

const images = [
  '/header_img.jpg',
  '/header_img2.jpg',
  '/header_img3.jpg',
  '/header_img4.webp',
  '/header_img5.jpg',
  '/header_img6.jpg'
];

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  };

  return (
    <div className="header">
      <Slider {...settings} className="carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            <div className="overlay"></div>
          </div>
        ))}
      </Slider>
      <div className="header-contents">
        <h2>Ride your way  anytime, anywhere</h2>
        <p>
          Find the perfect car or bike for your next adventure. Fast, easy, and affordable rentals at your fingertips.
        </p>
        <a href="#explore-menu" className="button">
          Explore Rides
        </a>
      </div>
    </div>
  );
};

export default Header;
