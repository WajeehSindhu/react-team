import React from 'react'
import { Helmet } from 'react-helmet'
import Cards from '../components/Cards'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Portfolio from '../components/Portfolio'
import HomeBanner from '../components/HomeBanner'
import CallToAction from '../components/CallToAction'
import Contact from "../components/ContactUs";
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
<Helmet>
  <title>Home | Team Work - Collaboratively Building with React</title>
  <meta 
    name="description" 
    content="Welcome to our Team Project! We are collaboratively building something amazing using React. Join us and explore the possibilities." 
  />
  <meta property="og:title" content="Team Project | React Collaboration" />
  <meta 
    property="og:description" 
    content="A collaborative React-based project where we build amazing things together. Let's get started!" 
  />
  <meta property="og:image" content="/Images/Home-Page.png" loading="lazy"/>
  <meta property="og:url" content="http://localhost:5173/" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Team Project | React Collaboration" />
  <meta 
    name="twitter:description" 
    content="A collaborative React-based project where we build amazing things together. Let's get started!" 
  />
  <meta name="twitter:image" content="/Images/Home-Page.png" loading="lazy"/>
  <link rel="canonical" href="http://localhost:5173/" />
</Helmet>
      <HomeBanner />
      <Cards />
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
