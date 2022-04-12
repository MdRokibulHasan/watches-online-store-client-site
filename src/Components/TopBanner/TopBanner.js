import { Button, Carousel } from "react-bootstrap";
import React from "react";
import SlideImage1 from "../../Images/slider1.jpg";
import SlideImage2 from "../../Images/slider2.jpg";
import SlideImage3 from "../../Images/slider3.jpg";
import { Link } from "react-router-dom";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000} className="carousel-item">
          <img className="d-block w-100" src={SlideImage1} alt="First slide" />
          <Carousel.Caption className="section-title">
            <span>TIMELESS & ELEGANT</span>
            <h3>BEST SELLER</h3>
            <span>Complete your everyday look with a classic leather strap watch.</span>
          </Carousel.Caption>
          <Carousel.Caption>
            <Link to="">
              <Button className="banner">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} className="carousel-item">
          <img className="d-block w-100" src={SlideImage2} alt="Second slide" />
          <Carousel.Caption className="section-title">
            <span>TIMELESS & ELEGANT</span>
            <h3>THE CLASSICS</h3>
            <span>Complete your everyday look with a classic leather strap watch.</span>
          </Carousel.Caption>
          <Carousel.Caption>
            <Link to="">
              <Button className="banner">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={SlideImage3} alt="Third slide" />
          <Carousel.Caption className="section-title">
            <span>TIMELESS & ELEGANT</span>
            <h3>NEW ARRIVALS</h3>
            <span>Complete your everyday look with a classic leather strap watch.</span>
          </Carousel.Caption>
          <Carousel.Caption>
            <Link to="">
              <Button className="banner">Shop Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;
