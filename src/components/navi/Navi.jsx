import React from 'react'
import './navi.css'
import { AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { BiBookAlt,BiMessageDetail} from 'react-icons/bi'
import { RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


export const Navi = () => {
  const [activeNav,setActiveNav] = useState('#header');
  return (
    <div  >
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
</div>

    )
}
