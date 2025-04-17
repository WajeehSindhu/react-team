import React, { useEffect } from 'react'
import Cards from '../components/Cards'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Portfolio from '../components/Portfolio'
import HomeBanner from '../components/HomeBanner'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'
import Testimonials from '../components/Testimonials'

const Home = () => {
  useEffect(() => {
    document.title = "Home | Team Work"
  }, [])

  return (
   <>
 <HomeBanner />
  <Cards/>
  <Services />
  <TechStack />
  <Portfolio />
  <CallToAction />
  <Testimonials />
  <Contact />
   </>
  )
}

export default Home
