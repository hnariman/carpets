import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../img/_ASA8463.jpg";
import img2 from "../img/_ASA8309.jpg";
import img3 from "../img/_ASA8365.jpg";

import "./style.css";

export default class DemoCarousel extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel>
          <div className="image-wrapper">
            <img src={img1}/> <p className="legend">Legend 1</p>
          </div>
          <div className="image-wrapper">
            <img src={img2}/> <p className="legend">Legend 2</p>
          </div>
          <div className="image-wrapper">
            <img src={img3}/> <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}
