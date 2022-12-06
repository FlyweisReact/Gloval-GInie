/** @format */

import React from "react";
import Mask from "../Assets/Mask Group 1.png";

import OwlCarousel from 'react-owl-carousel';


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
      <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        <h4>1</h4>
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>;
    </>
  );
};

export default Hero;
