import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2 .jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


export const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

      <div className="testimonials-container container">
        <article className="testimonials">
          <div className="client-avatar">
            <img src="" alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}
