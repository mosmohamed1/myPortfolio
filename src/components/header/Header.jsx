import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME from '../../assets/me.png'
import  {HeaderSocial}  from './HeaderSocial'
import MEt from '../../assets/me3.png'



export const Header = () => {
  return (
    <header id='header'>
    <div className='container header-container' >
      <h5>Hello I'm</h5>
      <h1>Mostafa <span>Rezk</span></h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className='me figure'>
        {/* <img src={ME} alt='Mostafa Rezk' className='photo-one'></img>
        <img src={MEt} alt='Mostafa Rezk' className='photo-two'></img> */}
        <img className="Sirv image-hover" src={ME} alt="Mostafa Rezk" ></img>
        <img className="Sirv image-main" src={MEt} alt="Mostafa Rezk" ></img>
      </div>
      <a href='#contact' className='scroll-down'>Scroll Down</a>
    </div>
    
    </header>
  )
}
