import React,{useEffect} from 'react'

const Blog = () => {
   useEffect (()=>{
    document.title = "Blog | Team Work"
   },[]) 
  return (
    <div className='min-h-screen'>
      Blog
    </div>
  )
}

export default Blog
