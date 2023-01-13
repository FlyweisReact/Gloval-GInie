/** @format */

import React, { useEffect } from "react";
import Bud from "../Assets/61tE7IcuLmL._SL1500_.png";
import Watch from "../Assets/71LKSq7g51L._AC_SL1500_.png";
import Cam from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import Carioke from "../Assets/Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 2933.png";
import Mask2 from "../Assets/Mask Group 2.png";
import Hero from "../Component/Hero";
import Reviews from "../Component/Reviews";

import Game from "../Assets/719xFB+eo6L._SL1500_.png";
import Camera2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import Bag from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import Head from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import man from "../Assets/photographer-man-taking-photos-village.png";

import gel from "../Assets/618-39BSrgL._SL1500_.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Hair from "../Assets/New 10.png";

import Give from "../Assets/Get Me This.png";

import Mail from "../Assets/Mail Icon.png";
import phone from "../Assets/Phone call.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

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

      <div className="NewProductS">
        <div className="item"  onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={Cam} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item"  onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter" >
            <img src={Carioke} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item"  onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={Watch} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item"  onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={Bud} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>

   

      <hr
        style={{
         maxWidth : '1400px',
         margin  : 'auto' ,
          border: "2px solid black",
          
        }}
      />

      <Reviews />
      <hr
        style={{
          border: "2px solid black",
          maxWidth : '1400px'
        }}
      />
   

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

      {/* <div className="pro" style={{ marginTop: "8%" }}>
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
      </div> */}

      <div className="pro">
        <h1>INTERNATION BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={Cam} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Carioke} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Watch} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item">
          <div className="imgeOuter">
            <img src={Bud} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
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

      {/* <div className="Give">
        <img src={Give} alt="" />
      </div> */}
      <img
        src={Give}
        alt=""
        style={{
          width: "90%",
          marginLeft: "5%",
          marginBottom: "3%",
        }}
      />

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
