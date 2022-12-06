/** @format */

import React from "react";
import Apple from '../Assets/151.png'
import Robot from '../Assets/150.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>For best experince , download theglobalgenie app</p>
        <div className="Foo-Icon">
          <img src={Apple} alt='' />
          <img src={Robot} alt='' />
        </div>
        <div className="menu">
          <ul>
            <li>ABOUT US</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS & CONDITIONS</li>
            <li>RETURN & REFUNDS</li>
            <li>CONTACT US</li>
            <li>BLOGS</li>
            <li>B2B</li>
          </ul>
        </div>
        <div className="t-p">
          <p>copyright @ 2020 theglobalgenie All Rights Reserved</p>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
