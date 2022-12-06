/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";
import { Carousel } from "react-responsive-carousel";
import Image from "../Assets/Get Me This.png";

import Rating from "../Assets/Ratings.png";

const images = [
  {
   text : "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera" , 
   author : "React"
  },
  {
    text : "Wyze Cam v3 with Color Night Vision, Wired 1080p HD Indoor/Outdoor Video Camera"
  },
];

const Reviews = () => {
  return (
    <>
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
            <div className="Review">
              <img src={Rating} alt="" className="Review" />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Reviews;
