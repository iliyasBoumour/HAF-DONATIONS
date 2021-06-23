import React from "react";
import { Carousel } from "react-bootstrap";

const Example = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/haf2.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/3.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/2.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/6.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Example;
