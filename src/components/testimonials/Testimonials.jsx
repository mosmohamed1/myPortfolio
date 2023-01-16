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
    client: "Emily Smith",
    review: "I have been working with Mostafa for the past 6 months and they have exceeded my expectations. They are very knowledgeable in web development and have helped me to bring my ideas to life. Their attention to detail and willingness to go the extra mile has made my website look professional and user-friendly."
  },
  {

    image:AVTR2,
    client: "David Brown",
    review: "I was in need of a new website for my business and Mostafa was able to create exactly what I had in mind. They were professional, efficient, and delivered the final product on time. I would highly recommend them to anyone looking for a web developer"  },
  {

    image:AVTR3,
    client: "Michael Williams",
    review: "I was new to web development and Mostafa was able to guide me through the process and explain everything in a way that was easy for me to understand. They were patient and always available to answer my questions. Their expertise in HTML, CSS, and JavaScript helped to make my website look great."
  },
  {

    image:AVTR4,
    client: "Aisha Ahmed",
    review: "I have been working with Mostafa for several months now, and I am extremely impressed with their skills and work ethic. They have helped me to create a website that is both visually appealing and easy to navigate. I would recommend them to anyone in need of a web developer."
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
