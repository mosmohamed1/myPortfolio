import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const clientFeedback = [
  {

    image:AVTR1,
    client: "sasa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {

    image:AVTR2,
    client: "sasa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."  },
  {

    image:AVTR3,
    client: "sasa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {

    image:AVTR4,
    client: "sasa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]


export const Testimonials = () => {
  

  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

      <Swiper className="testimonials-container container"      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >
      {
        clientFeedback.map(({image,client,review},index) => {
      return(

          <SwiperSlide key={index} className="testimonials">
          <div className="client-avatar">
            <img src={image} alt={client} />
          </div>
          <h5 className='client-name'>{client}</h5>
            <small className='client-review'>
              {review}
            </small>
        </SwiperSlide>
        )
        
        })
      }
      </Swiper>
    </section>
  )
}
