/** @format */

import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Bag from "../Assets/Shopping Bag.png";

import Offcanvas from "react-bootstrap/Offcanvas";

import arrow from "../Assets/asset1.png";

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

      <Offcanvas show={show} onHide={handleClose} style={{ width: "50%" }}>
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
                <p>Tracking</p> <img src="" alt="" />{" "}
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