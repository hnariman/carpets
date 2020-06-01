import React from "react";
import "./style.css";
import fasad from "../img/_ASA8463.jpg";

export default class Footer extends React.Component {
  state = {};
  render() {
    return (
      <section className="footer">
        <div className="footer-top">
          <GovLinks />
          <div className="logo">LOGO</div>
        </div>
        <hr />
        <div className="footer-bottom">
          <SocialLinks />
        </div>
      </section>
    );
  }
}

const GovLinks = () => (
  <ul className="footer-gov-links">
    <li>
      <a href="">
        Link 1
        <img src="" alt=" Link 1" />
      </a>
    </li>
    <li> | </li>
    <li>
      <a href="">
        Link 2
        <img src="" alt="" />
      </a>
    </li>
    <li> | </li>
    <li>
      <a href="">
        Link 3
        <img src="" alt="" />
      </a>
    </li>
    <li> | </li>
    <li>
      <a href="">
        Link 4
        <img src="" alt="" />
      </a>
    </li>
    <li> | </li>
    <li>
      <a href="">
        Link 5
        <img src="" alt="" />
      </a>
    </li>
  </ul>
);

const SocialLinks = () => (
  <ul className="footer-social-links">
    <li>
      <a href="">
        <span>social link</span>
      </a>
    </li>
    <li>
      <a href="">
        <span>social link</span>
      </a>
    </li>
    <li>
      <a href="">
        <span>social link</span>
      </a>
    </li>
    <li>
      <a href="">
        <span>social link</span>
      </a>
    </li>
    <li>
      <a href="">
        <span>social link</span>
      </a>
    </li>
  </ul>
);
