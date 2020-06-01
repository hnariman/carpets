import React from "react";
import "./style.css";
import logo from "../img/about/logo.png";
import { Social } from "./Social.jsx";

import foundation from "../img/govt/foundation.png";
import center from "../img/govt/center.png";
import president from "../img/govt/president.png";
import qarabaq from "../img/govt/qarabaq.png";

export default class Footer extends React.Component {
  state = {};
  render() {
    return (
      <section className="footer-wrapper">
        <div className="footer">
          <div className="footer-top">
            <GovLinks />
          </div>
          <hr />
          <div className="footer-bottom">
            <Social />
          </div>
        </div>
        <Copyright />
      </section>
    );
  }
}

const GovLinks = () => (
  <ul className="footer-gov-links">
    <li>
      <a href="">
        <img src={center} alt="Link 1" />
      </a>
    </li>
    <li>
      <a href="">
        <img src={foundation} alt="Link 2" />
      </a>
    </li>
    <li>
      <a href="">
        <img src={president} alt="Link 3" />
        <p>President.az</p>
      </a>
    </li>
    <li>
      <a href="">
        <img src={qarabaq} alt="Link 4" />
      </a>
    </li>
  </ul>
);

const Copyright = () => (
  <div className="copyright">
    <span> © Azərbaycan Milli Xalça Muzeyi. Bütün hüquqlar qorunur.</span>
  </div>
);
