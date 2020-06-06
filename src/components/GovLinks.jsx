import React from "react";
import foundation from "../img/govt/foundation.png";
import center from "../img/govt/center.png";
import president from "../img/govt/president.png";
import qarabaq from "../img/govt/qarabaq.png";

const GovLinks = () => (
  <ul className="gov-links">
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

export default GovLinks;
