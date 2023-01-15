import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
export const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container container-services">
      <article className="service">
        <div className="service-head">
          <h3>UI/UX Design</h3>
        </div>
          <ul className="service-list">
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
          </ul>
      </article>


      <article className="service">
        <div className="service-head">
          <h3>Web Development</h3>
        </div>
          <ul className="service-list">
          <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
          </ul>
      </article>


      <article className="service">
        <div className="service-head">
          <h3>Content Ceation</h3>
        </div>
          <ul className="service-list">
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
            <li>
              <BiCheck className='icon' />
              <p>Lorem ipsum dolor sit amet,</p>
            </li>
          </ul>
      </article>
    </div>
    </section>
  )
}
