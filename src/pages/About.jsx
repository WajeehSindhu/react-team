import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from "../components/Slider"
import Grid from "../components/About/Grid"
import Cards from '../components/Cards'

const About = () => {
  return (
    <>
    <Helmet>
  <title>About Us | Team Work - Meet the Developers</title>
  <meta 
    name="description" 
    content="Learn more about the passionate developers behind the Team Work project. Our goal is to build amazing things using React." 
  />
  <meta property="og:title" content="About Us | Team Work Developers" />
  <meta property="og:description" content="Meet the team behind Team Work – a collaborative React project built with passion." />
  <meta property="og:image" content="/Images/About-Page.png" />
  <meta property="og:url" content="http://localhost:5173/about" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Us | Team Work Developers" />
  <meta name="twitter:description" content="Meet the team behind Team Work – a collaborative React project built with passion." />
  <meta name="twitter:image" content="/Images/about-preview.jpg" />

  <link rel="canonical" href="http://localhost:5173/about" />
</Helmet>
      <Grid />
      <Slider />
      <Cards/>
    </>
  )
}

export default About
