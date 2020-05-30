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
        <div className="navbar">
          <span> ANA SƏHİFƏ </span>
          <span> MUZEY </span>
          <span> TƏHSİL </span>
          <span> EKSPOZİSİYA </span>
          <span> KOLLEKSİYA </span>
          <span> SƏRGİLƏR VƏ XƏBƏRLƏR </span>
          <span> XİDMƏTLƏR </span>
          <span> MAĞAZA </span>
        </div>
        <Carousel />
        {/* <Gifts /> */}
        {/* <CarpetsAroundTheWorld /> */}
        {/* <Supporters /> */}
        {/* <CompulsoryGovtSites /> */}
        <Footer />
      </React.Fragment>
    );
  }
}
