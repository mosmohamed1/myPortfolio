import React from 'react'
import './footer.css'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import logo from '../../assets/Mostafa Rezk-logos_white.png'
export const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header"><img className='logo' src={logo} alt="logo" /></a>
      <ul className="permalinks">
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Servicces</a></li>
      <li><a href="#portoflio">Portoflio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-social">
        <a href="https://www.facebook.com/mostafamrezk1/">
          <FaFacebookF />
        </a>
        <a href="https://www.instgram.com/mostafamrezk1/">
        <FaInstagram />
        </a>
        <a href="https://www.twitter.com/mostafamrezk1/">
          <FaTwitter />
        </a>

      </div>
      <div className="footer-copyright">
        <small>&copy; Mostafa Rezk .All rights reserved </small>
      </div>
    </footer>
  )
}
