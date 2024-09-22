import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import './offerx.css'

function Offers() {
  return (
      
      <div className='offres'>
        
        <div className="offers-left">
         
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON THE BEST SELLER PRODUCT</p>
             <button className="button-25" role="button">
              Cheak Now<i className="fa-solid fa-arrow-right"></i>
            </button>
            
        </div>
        <div className="offers-right">
             <img src={exclusive_image} alt="image" />
        </div>
      
    </div>
  

    
  )
}

export default Offers
