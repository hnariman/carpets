import React from "react";

export default class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <span>
          <a href="#"> ANA SƏHİFƏ </a>
        </span>
        <span>
          <a href="#"> MUZEY </a>
        </span>
        <span>
          <a href="#"> TƏHSİL </a>
        </span>
        <span>
          <a href="#"> EKSPOZİSİYA </a>
        </span>
        <span>
          <a href="#"> KOLLEKSİYA </a>
        </span>
        <span>
          <a href="#"> SƏRGİLƏR VƏ XƏBƏRLƏR </a>
        </span>
        <span>
          <a href="#"> XİDMƏTLƏR </a>
        </span>
        <span>
          <a href="#"> MAĞAZA </a>
        </span>
      </div>
    );
  }
}
