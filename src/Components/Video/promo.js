import React, { Component } from "react";
// import "../../node_modules/video-react/dist/video-react.css";
import "./promo.css";
import promovid from "./vjcet.mp4";
import poster from "./poster.png";

class Promo extends Component {
  render() {
    return (
      <div className="background-video">
        <video id="background-video" loop autoPlay muted poster={poster}>
          <source src={promovid} type="video/mp4" />
          <source src={promovid} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div class="overlay-desc">
          <h1>VJCET</h1>
        </div>
      </div>
    );
  }
}

export default Promo;
