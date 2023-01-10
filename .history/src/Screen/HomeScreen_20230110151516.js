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

import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";

import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

import img from "../Images/Vitamin C 1.png";

import { useNavigate } from "react-router-dom";
import ResBigCarousel from "../Component/ResBigCarousel";

const HomeScreen = () => {
  const navigate = useNavigate();

  const allProductNavigation = () => {
    navigate("/allProduct");
  };

  function NavigationHandler(data) {
    navigate(data);
  }

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
        <h1>WHAT'S TRENDING</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="fourSecc">
        <div className="items">
          <img src={Cam} alt="" />
          <div>
            <p>
              Meta Quest 2 — Advanced All-In-One Virtual Reality
              <br />
              Headset — 128 GB
              <br />
              <soan>₹31,970.00</soan>
            </p>{" "}
          </div>
        </div>
        <div className="items">
          <img src={Cam} alt="" />
          <div>
            <p>
              Meta Quest 2 — Advanced All-In-One Virtual Reality
              <br />
              Headset — 128 GB
              <br />
              <soan>₹31,970.00</soan>
            </p>{" "}
          </div>
        </div>
        <div className="items">
          <img src={Cam} alt="" />
          <div>
            <p>
              Meta Quest 2 — Advanced All-In-One Virtual Reality
              <br />
              Headset — 128 GB
              <br />
              <soan>₹31,970.00</soan>
            </p>{" "}
          </div>
        </div>
        <div className="items">
          <img src={Cam} alt="" />
          <div>
            <p>
              Meta Quest 2 — Advanced All-In-One Virtual Reality
              <br />
              Headset — 128 GB
              <br />
              <soan>₹31,970.00</soan>
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="product">
        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
          <Card.Body>
            <img src={Cam} alt="" className="camera" />
            <div className="desc2">
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality
                <br />
                Headset — 128 GB
                <br />
                <soan>₹31,970.00</soan>
              </p>{" "}
            </div>
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

        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
          <Card.Body>
            <img src={Carioke} alt="" className="carioke" />
            <div className="desc2">
              <p>
                Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
                <br />
                3200MHz C16 LED Desktop Memory - Black
                <br />
                <soan>₹31,970.00</soan>
              </p>{" "}
            </div>
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
          onClick={() => NavigationHandler("/single")}
        >
          <Card.Body>
            <img src={Watch} alt="" />
            <div className="desc2">
              <p>
                Apple Watch Series 8 GPS + Cellular 45mm Midnight
                <br />
                Aluminium Case with Midnight Sport Band - M/L <br />
                <soan>₹41,970.00</soan>
              </p>{" "}
            </div>
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
        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
          <Card.Body>
            <img src={Bud} alt="" />
            <div className="desc2">
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality
                <br />
                Headset — 128 GB <br />
                <soan>₹31,970.00</soan>
              </p>
            </div>
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
        <p style={{ paddingLeft: "15px" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "50px" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "80px" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "50px" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>

      <hr
        style={{
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />

      <Reviews />
      <hr
        style={{
          width: "90%",
          border: "2px solid black",
          marginLeft: "5%",
        }}
      />
      {/* <div className="pro">
        <h1>BEST DEAL'S</h1>
        <button className="shop" onClick={() => allProductNavigation()}>
          Shop Now
        </button>
      </div>

      <div className="photo">
        <div className="left">
          <img src={man} alt="" />
        </div>
        <div className="right">
          <div className="up">
            <div className="images">
              <img
                src={Bag}
                alt=""
                onClick={() => NavigationHandler("/single")}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality
                <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images">
              <img
                src={Camera2}
                alt=""
                onClick={() => NavigationHandler("/single")}
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
          </div>
          <div className="up">
            <div className="images">
              <img
                src={Game}
                alt=""
                onClick={() => NavigationHandler("/single")}
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
            <div className="images">
              <img
                src={Head}
                alt=""
                onClick={() => NavigationHandler("/single")}
              />
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality <br />
                Headset — 128 GB
                <br />
                ₹31,970.00
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}

      <div className="myNewSec">
        <p className="head">BEST DEAL'S</p>
        <button className="btn">Shop Now</button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={man} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={Bag} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={Camera2} alt="" />
              </div>

              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>
          </div>
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={Game} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={Head} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="resBigDealCarousel">
        <ResBigCarousel />
      </div>

      <div className="pro" style={{ marginTop: "8%" }}>
        <h1>INTERNATION BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="product">
        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
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

        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
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
        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
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
        <Card
          className="ProductCard"
          onClick={() => NavigationHandler("/single")}
        >
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
        <p style={{ paddingLeft: "50px" }}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "60px" }}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{ paddingLeft: "50px" }}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>

      <h1
        style={{ textAlign: "center", fontFamily: "Monument" }}
        className="forRes"
      >
        RECENTLY VIEWED
      </h1>

      <div className="many">
        <div>
          <img src={Hair} alt="" />
        </div>
        <div>
          <img src={some} alt="" />
        </div>
        <div>
          <img src={Apple} alt="" id="app" className="watch-new-res" />
        </div>
        <div>
          <img src={clock} alt="" id="clock" />
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={adi} alt="" />
        </div>
        <div>
          <img src={gel} alt="" />
        </div>
      </div>

      <div className="Give">
        <img src={Give} alt="" />
      </div>

      <h1 style={{ textAlign: "center", fontFamily: "Monument" }}>
        TALK TO HUMAN
      </h1>
      <div className="human">
        <div>
          <img src={phone} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>PHONE</h3>
        </div>
        <div className="Hori"></div>
        <div>
          <img src={Mail} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>EMAIL US</h3>
        </div>
        <div className="Hori"></div>

        <div>
          <img src={Whatsapp} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>WHATSAPP US</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
