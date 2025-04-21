import React, { useEffect } from 'react'
import Slider from "../components/Slider"
import Grid from "../components/About/Grid"

const About = () => {
  useEffect(() => {
    document.title = "About | Team Work"
  }, [])
  return (
    <>
      <Grid />
      <Slider />
    </>
  )
}

export default About
