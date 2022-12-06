import React from 'react'
import Hero3 from '../Component/Hero3';
import img from '../Assets/8.png'

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
    </>
  )
}

export default Gym