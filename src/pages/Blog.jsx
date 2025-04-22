import React from 'react'
import { Helmet } from 'react-helmet'
import BlogSection from '../components/BlogSection'
import Slider from "../components/Slider"
import Services from '../components/Services'

const Blog = () => {

  return (
    <>
    <Helmet>
  <title>Blog | Team Work - Articles & Insights</title>
  <meta 
    name="description" 
    content="Explore blog posts, tips, and development insights from the Team Work project. Stay updated with our journey!" 
  />
  <meta property="og:title" content="Team Work Blog | React Tips & Updates" />
  <meta property="og:description" content="Stay updated with blog posts, tutorials, and insights from the Team Work React project." />
  <meta property="og:image" content="/Images/Blog-Page.png" loading="lazy"/>
  <meta property="og:url" content="http://localhost:5173/blog" />
  <meta property="og:type" content="article" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Team Work Blog | React Tips & Updates" />
  <meta name="twitter:description" content="Stay updated with blog posts, tutorials, and insights from the Team Work React project." />
  <meta name="twitter:image" content="/Images/Blog-Page.png" loading="lazy"/>

  <link rel="canonical" href="http://localhost:5173/blog" />
</Helmet>
      <BlogSection/>
      <Slider />
      <Services/>
    </>
  )
}

export default Blog    
