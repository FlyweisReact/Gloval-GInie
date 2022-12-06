import React from 'react'
import Bag from '../Assets/Shopping Bag.png'

const NavBar = () => {
  return (
  <>

    <div className='MainNav'>
    <div className='left'>
    <i class="fa-solid fa-bars"></i>
    </div>
    <div className='mid'>
    <i class="fa-light fa-magnifying-glass"></i>
    <input type='search' />
    
    </div>
    <div className='right'>
    <img src={Bag} alt='Bag' />
    </div>

    </div>
  </>
  )
}

export default NavBar