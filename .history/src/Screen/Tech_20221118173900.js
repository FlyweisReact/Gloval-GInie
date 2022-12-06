/** @format */

import React from "react";
import TechCarousel from "../Component/TechCarousel";
import { Card } from "react-bootstrap";

// Images
import img from '../Assets/Mask Group 2.png'
import img1 from '../Assets/49.jpg'

import img3 from "../Assets/30.png";
import img4 from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import img5 from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import img6 from "../Assets/50.jpg";

const Tech = () => {
  return (
    <>
      <TechCarousel />
      <div className="NewP">
        <h1>GADGETS & ELECTRONICS</h1>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h1>ELECTRONIC ESSENTIALS  </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "3%" }}>SHOP BY</h1>
      <div className="child">
        <div className="month" style={{ minWidth: "10%" }}>
        MEN
        </div>
        <div className="month" style={{ minWidth: "10%" }}>
        WOMEN
        </div>
        <div className="month" style={{ minWidth: "10%" }}>
        KIDS
        </div>
      </div>

      <div className="Give">
        <img src={img1} alt="" />
      </div>

      
      <div className="pro" style={{ marginTop: "8%" }}>
        <h1>GEEK'S PARADISE</h1>
        <button>View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard">
          <Card.Body>
            <img src={img3} alt="" />
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
            <img src={img5} alt="" />
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
        <Card
          className="ProductCard"
          style={{ padding: "0px", width: "350px" }}
        >
          <Card.Body>
            <img src={img4} alt="" />
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
            <img src={img6} alt="" />
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
        <p style={{ marginLeft: "2rem" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ marginLeft: "2rem" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>
      <hr
        style={{
          width: "90%",
          border: "0px solid black",
          marginLeft: "5%",
        }}
      />

    </>
  );
};

export default Tech;
