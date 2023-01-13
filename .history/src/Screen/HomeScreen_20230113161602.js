/** @format */

import React, { useEffect } from "react";
import Bud from "../Assets/61tE7IcuLmL._SL1500_.png";
import Watch from "../Assets/71LKSq7g51L._AC_SL1500_.png";
import Cam from "../Assets/Canon EF 70-200mm f2.8L IS III USM Lens for Canon.png";
import Carioke from "../Assets/Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4 2933.png";
import Mask2 from "../Images/Mask Group 2 1.png";
import Hero from "../Component/Hero";
import Reviews from "../Component/Reviews";


import gel from "../Assets/618-39BSrgL._SL1500_.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Hair from "../";

import Give from "../Assets/Get Me This.png";

import Mail from "../Assets/Mail Icon.png";
import phone from "../Assets/Phone call.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import Footer from "../Component/Footer";

import img from "../Images/Vitamin C 1.png";

import { useNavigate } from "react-router-dom";
import ResBigCarousel from "../Component/ResBigCarousel";

import newImg from '../Images/Canon_EF_70-200mm_f2.8L_IS_III_USM_Lens_for_Canon-removebg-preview.png'

import newImg2 from '../Images/61tE7IcuLmL._SL1500_-removebg-preview.png'
import newImg4 from '../Images/71LKSq7g51L._AC_SL1500_-removebg-preview.png'
import newImg6 from '../Images/Corsair_Vengeance_RGB_Pro_32GB__2x16GB__DDR4_2933-removebg-preview.png'


import newImg7 from '../Images/photographer-man-taking-photos-village 1.png'

import newImg8 from '../Images/bag.png'
import newImg9 from '../Images/camera.png'
import newImg10 from '../Images/controller.png'
import newImg11 from '../Images/headphone.png'

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
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg6} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg4} alt="" />
          </div>
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
        <div className="item" onClick={() => NavigationHandler("/single")}>
          <div className="imgeOuter">
            <img src={newImg2} alt="" />
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
          maxWidth: "1400px",
          margin: "auto",
          border: "2px solid black",
        }}
      />

      
      <Reviews />
      <hr
        style={{
          border: "2px solid black",
          maxWidth: "1400px",
          margin: "auto",
        }}
      />

      <div className="pro" style={{marginTop : '5%'}}>
        <h1>BEST DEAL'S</h1>
        <button>Shop Now</button>
      </div>

      <div className="myNewOldSec">
        <div className="left">
          <img src={newImg7} alt="" />
        </div>
        <div className="right">
          <div className="group">
            <div className="dives">
              <div className="imageDiv">
                <img src={newImg8} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={newImg9} alt="" />
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
                <img src={newImg10} alt="" />
              </div>
              <p>
                Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128
                GB ₹31,970.00
              </p>
            </div>

            <div className="dives">
              <div className="imageDiv">
                <img src={newImg11} alt="" />
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

      <div className="pro">
        <h1>INTERNATION BEST SELLERS</h1>
        <button onClick={() => allProductNavigation()}>View all</button>
      </div>

      <div className="NewProductS">
        <div className="item">
          <div className="imgeOuter">
            <img src={newImg} alt="" />
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
            <img src={newImg6} alt="" />
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
            <img src={newImg4} alt="" />
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
            <img src={newImg2} alt="" />
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
          <img src={Apple} alt=""  />
        </div>
        <div>
          <img src={clock} alt=""  />
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

      <img src={Give} alt="" className="BanImage" />

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
