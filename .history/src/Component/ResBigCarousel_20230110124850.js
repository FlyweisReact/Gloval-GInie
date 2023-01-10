
import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

const images = [
    {
      src: [Mask],
    },
    {
      src: [Image],
    },
  ];

const ResBigCarousel = () => {
  return (
   <>
      <Carousel
        autoPlay
        className="resBig"
        showThumbs={false}
        infiniteLoop
      >
        {images.map((i, index) => (
          <div key={index}>
            <img src={i.src} alt="" className="CImage" />
          </div>
        ))}
      </Carousel>
   </>
  )
}

export default ResBigCarousel