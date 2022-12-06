/** @format */

import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Bag from "../Assets/Shopping Bag.png";

const NavBar = () => {
  const [side, setSide] = useState(false);
  return (
    <>
      <div className="MainNav">
        <div className="left">
          <i class="fa-solid fa-bars" onClick={() => setSide(!side)}></i>
        </div>
        <div className="mid">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" />
        </div>
        <div className="right">
          <img src={Bag} alt="Bag" />
        </div>
      </div>

      {side ? (
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
            <LinkContainer to="/tech">
              <li>GADGETS & ELECTRONICS</li>
            </LinkContainer>
            <LinkContainer to="/home">
              <li>HOME & KITCHEN</li>
            </LinkContainer>
            <LinkContainer to="/mens">
              <li>MEN’S GROOMING ESSENTIALS</li>
            </LinkContainer>
            <LinkContainer to="/life">
              <li>LIFESTYLE & SPORTS</li>
            </LinkContainer>
          </ul>
        </div>
      ) : (
        <div className="sideBar">
          <ul>
            <li>Care</li>
            <li>Gym</li>
            <li>Perfume</li>
            <li>Cosmetics</li>
            <li>Technology</li>
            <li>Home</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
