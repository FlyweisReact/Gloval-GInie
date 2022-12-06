/** @format */

import React from "react";
import Hero from "../Component/Hero";
import Mask2 from "../Assets/Mask Group 2.png";
import Cam from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import Carioke from "../Assets/Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 2933.png";
import Watch from "../Assets/71LKSq7g51L._AC_SL1500_.png";
import Bud from "../Assets/61tE7IcuLmL._SL1500_.png";
import { Card } from "react-bootstrap";
import Reviews from "../Component/Reviews";

import Camera2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import Bag from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import Game from "../Assets/719xFB+eo6L._SL1500_.png";
import Head from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import man from "../Assets/photographer-man-taking-photos-village.png";

const HomeScreen = () => {
  return (
    <>
      <Hero />

      <div className="two-sec">
        <div className="left">
          <img src={Mask2} alt="" />
        </div>
        <div className="right">
          <h1>THE STYLE ESSENTIALS</h1>
          <p>
            Allow notifications for tailored new arrivals <br />
            exicting launches and promotions
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <div className="pro">
        <div className="left">
          <h1>WHAT'S TRENDING</h1>
        </div>
        <div className="right">
          <button>View all</button>
        </div>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={Cam} alt="" className="camera" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>

        <Card className="ProductCard">
          <Card.Body>
            <img src={Carioke} alt="" className="carioke" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
            <br />
            3200MHz C16 LED Desktop Memory - Black
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Watch} alt="" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Apple Watch Series 8 GPS + Cellular 45mm Midnight
            <br />
            Aluminium Case with Midnight Sport Band - M/L <br />
            <soan>₹41,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Bud} alt="" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>

      <div className="Desc">
        <p>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>

      <hr
        style={{
          width: "80%",
          border: "2px solid black",
          marginLeft: "10%",
        }}
      />

      <Reviews />
      <hr
        style={{
          width: "80%",
          border: "2px solid black",
          marginLeft: "10%",
        }}
      />
      <div className="pro" style={{ marginTop: "5%" }}>
        <div className="left">
          <h1>BEST DEAL'S</h1>
        </div>
        <div className="right">
          <button>Shop Now</button>
        </div>
      </div>

      <div className="photo">
        <div className="left">
          <img src={man} alt="" />
        </div>
        <div className="left">
        <div >

        </div>
          <img src={Bag} alt="" />
          <img src={Camera2} alt="" />
          <img src={Game} alt="" />
          <img src={Head} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
