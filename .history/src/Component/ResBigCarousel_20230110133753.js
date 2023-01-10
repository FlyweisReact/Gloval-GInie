/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

import Camera2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import Bag from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import Game from "../Assets/719xFB+eo6L._SL1500_.png";
import Head from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import man from "../Assets/photographer-man-taking-photos-village.png";

const images = [
  {
    src: [Camera2],
  },
  {
    src: [Bag],
  },
  {
    src: [Game],
  },
  {
    src: [Head],
  },
];

const ResBigCarousel = () => {
  return (
    <>
      <Carousel autoPlay className="resBigC" showThumbs={false} infiniteLoop>
        <div>
          <img src={man} alt="" />
        </div>
        {images.map((i, index) => (
          <div key={index} style={{ position: "relative", width: "300px" }}>
            <img
              src={i.src}
              alt=""
              style={{
                width: "80%",
                top: '50%'
  left: 50%;
                position: "absolute",
              }}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ResBigCarousel;
