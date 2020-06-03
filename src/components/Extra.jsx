import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Extra extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={extraStyle}
        className="extra-menu"
        onClick={this.props.toggleContrast}
      >
        <div className="view">
          <FontAwesomeIcon
            style={iconStyle}
            icon={["fas", "low-vision"]}
            className="icons"
          />
        </div>
        <div className="impared"></div>
      </div>
    );
  }
}

const iconStyle = {
  fontSize: "28px",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};
const extraStyle = {
  position: "fixed",
  right: "0",
  background: "#bbb",
  height: "80px",
  width: "80px",
  borderRadius: "50%",
  textAlign: "center",
};
