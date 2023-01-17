import React from 'react'
import { BsLinkedin,BsGithub,BsTwitter } from 'react-icons/bs'


export const HeaderSocial = () => {
  return (
    <div>
        <div className="header-socials">
            <a href="https://www.linkedin.com/in/m-rezk/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/mosmohamed1"  target="_blank"><BsGithub/></a>
            <a href="https://twitter.com/mostafamrezk1"  target="_blank"><BsTwitter/></a>
        </div>
    </div>
  )
}
