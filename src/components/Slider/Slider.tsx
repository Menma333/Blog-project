import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import "../Slider/Slider.css";
import ReactImg from "../../img/React.png";
import AngularImg from "../../img/Angular.jpeg";
import VueImg from "../../img/Vue.png";

const Slider = (props) => {
  return (
    <div className={props.slider}>
      <img src={ReactImg} alt="React" className="slider__img" />
      <img src={AngularImg} alt="React" className="slider__img" />
      <img src={VueImg} alt="React" className="slider__img" />
    </div>
  );
};

export default Slider;
