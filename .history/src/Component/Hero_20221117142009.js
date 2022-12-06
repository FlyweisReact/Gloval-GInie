import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Mask from '../Assets/Mask Group 1.png'

const Hero = () => {
  return (
<>
<Carousel autoPlay>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
    </Carousel>

</>
  )
}

export default Hero