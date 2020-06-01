import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Social = () => (
  <div className="header-social">
    <FontAwesomeIcon icon={["fab", "facebook-f"]} className="icons" />
    <FontAwesomeIcon icon={["fab", "twitter"]} className="icons" />
    <FontAwesomeIcon icon={["fab", "instagram"]} className="icons" />
    <FontAwesomeIcon icon={["fab", "youtube"]} className="icons" />
  </div>
);
