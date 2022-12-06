/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

import Rating from "../Assets/Ratings.png";

const images = [
  {
    src: [Mask],
  },
  {
    src: [Image],
  },
];

const Reviews = () => {
  return (
    <Carousel
      autoPlay
      className="ImageCarousel"
      showThumbs={false}
      infiniteLoop
      renderArrowPrev={(clickHandler, hasNext) => {
        return (
          hasNext && (
            <i
              className="fa-solid fa-arrow-left arrow"
              onClick={clickHandler}
            ></i>
          )
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          hasNext && (
            <i
              className="fa-solid fa-arrow-right arrow"
              onClick={clickHandler}
            ></i>
          )
        );
      }}
    >
      {images.map((i, index) => (
        <div key={index}>
          <h1>CUSTOMER REVIEWS</h1>
          <img src={Rating} alt="" className="" />
        </div>
      ))}
    </Carousel>
  );
};

export default Reviews;
