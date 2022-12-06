/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

const images = [
    {
        src  : [Mask]
    },
    {
        src : [Image] 
    }
]


const Hero = () => {
  return (
    <>
      <Carousel
        autoPlay
        className="ImageCarousel"
        showThumbs={false}
        infiniteLoop
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 20,
            color: "white",
            cursor: "pointer",
          };
          const style = isSelected
            ? { ...defStyle, color: "red" }
            : { ...defStyle };
          return (
            // <span
            //   style={style}
            //   onClick={onClickHandler}
            //   onKeyDown={onClickHandler}
            //   value={index}
            //   key={index}
            //   role="button"
            //   tabIndex={0}
            //   aria-label={`${label} ${index + 1}`}
            // >
            //   {"cust " + index}  
            // </span>
            <i class="fa-regular fa-horizontal-rule "></i>
          );
        }}
      >
        <div>
          <img alt="ds" src={Mask} />
        </div>
        <div>
          <img alt="" src={Image} />
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
