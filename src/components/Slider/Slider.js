import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/HDcPhcw/slider2-50654c9d.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="caption">
      <h1>স্বাস্থ্যবান ও মেধাবী প্রতিটি শিশু</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/WBTd9NG/slider3-e003b6e7.jpg"
      alt="Second slide"
    />

    

    <Carousel.Caption className="caption">
      <h1>আমরা আছি আপনার পাশে সব সময়।</h1>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    </div>
  );
};

export default Slider;