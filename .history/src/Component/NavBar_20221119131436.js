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
            <LinkContainer to="/">
              <li>HOME</li>
            </LinkContainer>
            <LinkContainer to="/second">
              <li>BABY & MOM</li>
            </LinkContainer>
            <LinkContainer to="/gym">
              <li>HEALTH & PERSONAL CARE</li>
            </LinkContainer>
            <LinkContainer to="/Per">
              <li>BEAUTY & COSMETICS</li>
            </LinkContainer>
            <LinkContainer to="/tech">
              <li>GADGETS & ELECTRONICS</li>
            </LinkContainer>
            <LinkContainer to="/">
              <li>HOME & KITCHEN</li>
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
