/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import 

const Hero = () => {
  return (
    <>
      <Carousel autoPlay className="ImageCarousel" showThumbs={false}>
        <div>
          <img alt="ds" src={Mask} />
        </div>
        <div>
          <img alt="" src={Mask} />
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
