import React from "react";
import "./style.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);
export default class Header extends React.Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="header-left">
          left
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="header-center">center</div>
        <div className="header-right">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </div>
      </div>
    );
  }
}
