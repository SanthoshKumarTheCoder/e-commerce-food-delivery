import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-contant'>
            <div className='footer-content-left'>
            <img src={assets.logo_1} alt=''/>
            <p>Lorem Ipsum is simple dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a gallery of type and scrambled it to make specimen book.</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className='footer-content-center'>
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                   <ul>
                    <li>+1-212-456-789</li>
                    <li>contact@gmail.com</li>
                   </ul>
            </div>
        </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 @Tomato.com- All Right Reserved</p>
    </div>
  )
}

export default Footer
