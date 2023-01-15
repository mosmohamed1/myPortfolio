import React from 'react'
import { BsLinkedin,BsGithub,BsDribbble } from 'react-icons/bs'


export const HeaderSocial = () => {
  return (
    <div>
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/m-rezk/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/mosmohamed1"  target="_blank"><BsGithub/></a>
            <a href="https://dribbble.com/"  target="_blank"><BsDribbble/></a>
        </div>
    </div>
  )
}
