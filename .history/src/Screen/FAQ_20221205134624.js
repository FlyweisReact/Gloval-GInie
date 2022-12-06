import React from 'react'

const FAQ = () => {
  return (
    <>
        <div className='FAQ'>
            <h2>ABOUT US & FREQUENTLY ASKED QUESTIONS</h2>
            <p>Search product info, Q&A, reviews</p>
        </div>
        <div className='FAQInput'>
            <input type='text' placeholder='Type a Keyword' />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </>
  )
}

export default FAQ