import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'

const data = [
  {
    id: 1,
    image:IMG1,
    title: "Jloys Jewllery WordPress Website ",
    github: 'https://github.com/mosmohamed1',
    URL: 'https://jloys.de/',
    status: "Live" 
  },
  {
    id: 2,
    image:IMG2,
    title: "Leon CSS and HTML Template",
    github: 'https://github.com/mosmohamed1/Leon-Template',
    URL: 'http://leon.mostafamrezk.com/',
    status: "Live Demo" 

  },
  {
    id: 3,
    image:IMG3,
    title: "Kasper CSS and HTML Template",
    github: 'https://github.com/mosmohamed1/Kasper-Template',
    URL: 'http://kasper.mostafamrezk.com/',
    status: "Live Demo"

  },
  {
    id: 4,
    image:IMG4,
    title: "Keyframe Template",
    github: 'https://github.com/mosmohamed1/Template-3-',
    URL: 'http://keyframe.mostafamrezk.com/',
    status: "Live Demo" 

  },
  {
    id: 5,
    image:IMG6,
    title: "LocalStorage Template",
    github: 'https://github.com/mosmohamed1/HTMl-CSS-JS-Template',
    URL: 'http://localstorage.mostafamrezk.com/',
    status: "Live Demo"

  },
  {
    id: 6,
    image:IMG7,
    title: "Bootstrap 5 Template",
    github: 'https://github.com/mosmohamed1/https://github.com/mosmohamed1/Bootstrap-5-template',
    URL: 'boostrap5T1.mostafamrezk.com',
    status: "Live Demo"

  }
]
export const Portfolio = () => {
  return (

    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio-container">
    {
      data.map(({id,image,title,github,URL,status})=> {
        return (
          <article key={id} className='portfolio-item'>
      <div className="image">
      <img src={image} alt={title} />
      </div>
        <h3>{title}</h3>
        <div className="pcta">
        <a href={github} className='btn' target="_blank">GitHub</a>
        <a href={URL} className='btn btn-primary' target="_blank">{status}</a>
        </div>
      </article>
        )
      })
    }
    </div>
    </section>
    
  )
}
