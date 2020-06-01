import React from "react";
import "./style.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Social } from "./Social";
import { LanguageBar } from "./LanguageBar.jsx";

library.add(fab, fas);
export default class Header extends React.Component {
  state = {};
  render() {
    return (
      <section className="header">
        <Social />
        <LanguageBar />
      </section>
    );
  }
}
