// dependencies
import React from "react";
// Components
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gifts from "./components/Gifts";
import Views from "./components/Views";
import Extra from "./components/Extra.jsx";
import GovLinks from "./components/GovLinks";
import { Collection } from "./components/Collection.jsx";

export default class App extends React.Component {
  state = {};
  toggleContrast = () => {
    this.steState({
      theme: "dark",
    });
    console.log("dark theme is set!");
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        {/* <Extra toggleContrast={this.toggleContrast} /> */}
        <Carousel />
        <Gifts />
        <Collection />
        <Views />

        {/* <CarpetsAroundTheWorld /> */}
        {/* <Supporters /> */}
        <GovLinks />
        <Footer />
      </React.Fragment>
    );
  }
}
