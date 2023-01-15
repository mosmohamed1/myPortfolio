import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience-container">
    <div className="experience-front">
      <h3>Frontend Developer</h3>
      <div className="experience-content">
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>Tailwind</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
        </article>
      </div>
    </div>


    <div className="experience-backend">
      <h3>Backend Developer</h3>
      <div className="experience-content">
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>Node JS</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>MySQL</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>Python</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience-details'>
          <BsFillPatchCheckFill/>
          <h4>Wordpress</h4>
          <small className='text-light'>Experienced</small>
        </article>
      </div>
    </div>
    </div>
    </section>
  )
}
