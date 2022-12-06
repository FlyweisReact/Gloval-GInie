import React from 'react'
import Hero4 from '../Component/Hero4'


// Images

import img from '../Assets/28.png'


const Perfume = () => {
  return (
    <>
        <Hero4 />
        <div className="NewP">
        <h2>BEAUTY & COSMETICS</h2>
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
          <h1>HEALTH ESSENTIALS </h1>
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

export default Perfume