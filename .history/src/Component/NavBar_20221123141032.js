/** @format */

import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Bag from "../Assets/Shopping Bag.png";

import Offcanvas from "react-bootstrap/Offcanvas";

import arrow from "../Assets/asset1.png";
import arrow2 from "../Assets/asset1.jpg";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";

import Sign from "../Assets/Sign Out.jpg";

const NavBar = () => {
  const [side, setSide] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="MainNav">
        <div className="left">
          {/* <i class="fa-solid fa-bars" onClick={() => setSide(!side)}></i> */}
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="mid">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>
        <div className="right">
          <img src={Bag} alt="Bag" />
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}  style={{width : '100%'}}
      responsive='lg'
      >
        <Offcanvas.Header>
          <img
            src={arrow}
            alt=""
            onClick={() => handleClose()}
            className="ArrowI"
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="OFC">
            <p>MY ACCOUNT</p>
            <ul>
              <li>
                <p>Tracking</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Orders </p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Returns & Refunds</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Saved Address</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Profile & Payment Methods</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Settings</p> <img src={arrow2} alt="" />{" "}
              </li>
              <p className="head">DEDICATED SUPPORT</p>
              <li>
                <p>Talk to Human</p> <img src={arrow2} alt="" />{" "}
              </li>

              <div className="nav-Images">
                <div>
                  <img src={phone} alt="" />
                  <p>PHONE</p>
                </div>
                <div style={{ borderRight: "1px solid black" }}></div>
                <div style={{ marginTop: "20px" }}>
                  <img src={Mail} alt="" />
                  <p>EMAIL US</p>
                </div>
                <div style={{ borderRight: "1px solid black" }}></div>
                <div>
                  <img src={Whatsapp} alt="" />
                  <p>WHATSAPP US</p>
                </div>
              </div>

              <li>
                <p>FAQ</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Useful Blogs & Links</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Privacy policy</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li>
                <p>Terms & Conditions</p> <img src={arrow2} alt="" />{" "}
              </li>
              <li style={{ marginTop: "10%" }}>
                <p
                  style={{
                    fontFamily: "Monument",
                    paddingTop: "30px",
                    paddingLeft: "40px",
                  }}
                >
                  SIGN OUT
                </p>{" "}
                <img src={Sign} alt="" style={{ paddingBottom: "10px" }} />{" "}
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* {side ? (
        <div className="sideBar" style={{ left: "100px" }}>
          <ul>
            <LinkContainer to="/" onClick={() => setSide(false)}>
              <li>HOME</li>
            </LinkContainer>
            <LinkContainer to="/second" onClick={() => setSide(false)}>
              <li>BABY & MOM</li>
            </LinkContainer>
            <LinkContainer to="/gym" onClick={() => setSide(false)}>
              <li>HEALTH & PERSONAL CARE</li>
            </LinkContainer>
            <LinkContainer to="/Per" onClick={() => setSide(false)}>
              <li>BEAUTY & COSMETICS</li>
            </LinkContainer>
            <LinkContainer to="/tech" onClick={() => setSide(false)}>
              <li>GADGETS & ELECTRONICS</li>
            </LinkContainer>
            <LinkContainer to="/home" onClick={() => setSide(false)}>
              <li>HOME & KITCHEN</li>
            </LinkContainer>
            <LinkContainer to="/mens" onClick={() => setSide(false)}>
              <li>MEN’S GROOMING ESSENTIALS</li>
            </LinkContainer>
            <LinkContainer to="/life" onClick={() => setSide(false)}>
              <li>LIFESTYLE & SPORTS</li>
            </LinkContainer>
            <LinkContainer to="/single" onClick={() => setSide(false)}>
              <li>SINGLE PRODUCT</li>
            </LinkContainer>
          </ul>
        </div>
      ) : (
        <div className="sideBar">
          <ul></ul>
        </div>
      )} */}
    </>
  );
};

export default NavBar;
