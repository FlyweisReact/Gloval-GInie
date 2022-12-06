import React from 'react'
import Hero3 from '../Component/Hero3';
import img from '../Assets/8.png'
import img2 from '../Assets/9.png'

const Gym = () => {
  return (
    <>
        <Hero3 />
        <div className="NewP">
        <h2>HEALTH & PERSONAL CARE</h2>
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
          <h1>HEALTH ESSENTIALS  </h1>
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
        <div className="month" style={{minWidth : '10%' }}>MEN</div>
        <div className="month" style={{minWidth : '10%' }}>WOMEN</div>
        <div className="month" style={{minWidth : '10%' }}>KIDS</div>
      </div>

      <div className="Give">
        <img src={img} alt="" />
      </div>
    </>
  )
}

export default Gym