import React from "react";
import { Carousel } from "react-bootstrap";
import ReactImg from "../../img/React.png";
import AngularImg from "../../img/Angular.png";
import VueImg from "../../img/Vue.png";
import "../Slider/Slider.css";

const Slider = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={ReactImg}
            alt="First-slide"
          />
          <Carousel.Caption>
            <h3 className="text__title">React</h3>
            <p className="text__p">
              React is an element of programming. A specialized technology used
              by JavaScript in the development of a variety of content. It is a
              library for creating user interfaces. It is open source.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={AngularImg}
            alt="Second-slide"
          />
          <Carousel.Caption>
            <h3 className="text__title">Angular</h3>
            <p className="text__p">
              Angular is a framework from Google for creating advanced seamless
              (single page) web applications - SPA (Single Page Applications) -
              in the programming languages ​​TypeScript, JavaScript, Dart. The
              framework is open source. The product is distributed free of
              charge.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={VueImg}
            alt="Third-slide"
          />
          <Carousel.Caption>
            <h3 className="text__title">Vue</h3>
            <p className="text__p">
              Vue. js is a progressive framework for developing user interfaces
              and single-page web applications in JavaScript. It solves the
              tasks of the presentation layer (view) and simplifies the work
              with libraries. Vue.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
