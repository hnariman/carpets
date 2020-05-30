import React from "react";

import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Carousel />
        <Footer />
      </React.Fragment>
    );
  }
}
