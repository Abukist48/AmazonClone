import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import kitchen from "../assets/image/Kitchen.jpg";
import Shop from "../assets/image/Shop.jpg";
import Gaming from "../assets/image/Gaming.jpg";
import Beauty from "../assets/image/Beauty.jpg";
import Toys from "../assets/image/Toys.jpg";

function FourProducts() {
  return (
    <Carousel fade={true} pause={false} indicators={false}>
      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={kitchen}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Shop}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Gaming}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Beauty}
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="home__image d-block w-100"
          src={Toys}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default FourProducts;
