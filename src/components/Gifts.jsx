import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

export default class Gifts extends React.Component {
  state = {};
  render() {
    const responsive = {
      superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };
    const newstyle = {
      width: "200px",
      height: "200px",
      background: "grey",
    };
    return (
      <section className="gifts">
        <div className="carousel"></div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // render on server-side
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          <div style={newstyle}>1</div>
          <div style={newstyle}>2</div>
          <div style={newstyle}>3</div>
          <div style={newstyle}>4</div>
          <div style={newstyle}>5</div>
          <div style={newstyle}>6</div>
          <div style={newstyle}>7</div>
        </Carousel>
      </section>
    );
  }
}
