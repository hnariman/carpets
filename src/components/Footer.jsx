import React from "react";
import "./style.css";
import { Social } from "./Social.jsx";

export default class Footer extends React.Component {
  state = {};
  render() {
    return (
      <section className="footer-wrapper">
        <div className="footer">
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

const Copyright = () => (
  <div className="copyright">
    <span> © Azərbaycan Milli Xalça Muzeyi. Bütün hüquqlar qorunur.</span>
  </div>
);
