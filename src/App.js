import React from "react";

import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gifts from "./components/Gifts";
export default class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navbar />
        <Carousel />
        <Gifts />
        {/* <CarpetsAroundTheWorld /> */}
        {/* <Supporters /> */}
        <Footer />
      </React.Fragment>
    );
  }
}
