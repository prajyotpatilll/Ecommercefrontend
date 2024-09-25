import React from 'react'
import './Newslatter.css'
import './Newsx.css'

function Newslatter() {
  return (
    <div className='Newslwtter1'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe To Our Newsletter And Stay Updated</p>
      <div className='newsinput'>
        <input type="email" placeholder='Your Email Id' />
        <button className="button-30" role="button">
              Subscribe<i className="fa-solid fa-arrow-right"></i>
            </button>
      </div>
    
    </div>
  )
}

export default Newslatter
