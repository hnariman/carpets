import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LanguageBar = () => (
  <div>
    <div>
      <FontAwesomeIcon icon={["fas", "language"]} className="lang-icon" />
      <select id="" name="" className="languages">
        <option value="">AZ</option>
        <option value="">RU</option>
        <option value="">EN</option>
      </select>
    </div>
  </div>
);
