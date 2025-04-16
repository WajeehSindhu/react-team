import React,{useEffect} from 'react'

const About = () => {
   useEffect (()=>{
    document.title = "About | Team Work"
   },[]) 
  return (
    <div className='min-h-screen'>
      About
    </div>
  )
}

export default About
