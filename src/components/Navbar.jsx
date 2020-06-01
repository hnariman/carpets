import React from "react";
import logo from "../img/logo.png";

export default class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <section>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <a href="#"> ANA SƏHİFƏ </a>
          <a href="#"> MUZEY </a>
          <a href="#"> TƏHSİL </a>
          <a href="#"> EKSPOZİSİYA </a>
          <a href="#"> KOLLEKSİYA </a>
          <a href="#"> SƏRGİLƏR VƏ XƏBƏRLƏR </a>
          <a href="#"> XİDMƏTLƏR </a>
          <a href="#"> MAĞAZA </a>
        </div>
      </section>
    );
  }
}
