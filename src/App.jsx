import React from 'react'
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'
import {Portfolio} from './components/portfolio/Portfolio'
import {Testimonials} from './components/testimonials/Testimonials'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'
import {Navi} from './components/navi/Navi'
export const App = () => {
  return (

    <>
    <Header />
    <Navi />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}
