import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOOPER</p>
      </div>
      <ul className='footer-link'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icon">
        <div className="footer-icon-main">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-main">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-main">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footercopyright">
        <hr />
        <p>All Copyrights Reserved By @prajyotpatil</p>
      </div>
    </div>
  )
}

export default Footer
