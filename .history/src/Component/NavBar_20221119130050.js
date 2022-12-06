/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bag from "../Assets/Shopping Bag.png";
import {Link} from 'react-router-dom'

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
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Gym</li>
            <li>Perfume</li>
            <li>Cosmetics</li>
            <li>Technology</li>
            <li>Home</li>
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
