import React from 'react'
import Hero2 from '../Component/Hero2'
import './Baby.css'

const Baby = () => {
  return (
<>
    <Hero2 />
    <div className='NewP'>
      <h1>BABY & MOM</h1>
      <p>
      Allow notifications for tailored new arrivals , 
      <br /> 
      exciting launches and promotions
      </p>
    </div>
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
</>
  )
}

export default Baby