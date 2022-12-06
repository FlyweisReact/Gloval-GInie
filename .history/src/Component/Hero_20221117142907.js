/** @format */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import Mask from "../Assets/Mask Group 1.png";

const Hero = () => {
  return (
    <>
      {/* <Carousel autoPlay className="ImageCarousel" showThumbs={false}>
        <div>
          <img alt="ds" src={Mask} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img alt="" src={Mask} />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel> */}
      <div class="owl-carousel">
        <div> </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
        <div> Your Content </div>
      </div>
    </>
  );
};

export default Hero;
