import React from 'react'
import './about.css'
import ME from '../../assets/ISO_6469.JPG.png'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'




export const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About me</h2>
    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-img">
          <img src={ME} alt="About Me Img" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
          <BsAward className='about-icon' />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about-card'>
          <FiUsers className='about-icon' />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about-card'>
          <VscFolderLibrary className='about-icon' />
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Eveniet ratione illum 
          harum voluptatem, architecto iste facilis
          aut eligendi ipsam quod perferendis odit,
          amet neque perspiciatis
          fuga a. Dignissimos, corporis consectetur?
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}
