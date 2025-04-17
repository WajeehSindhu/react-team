import React,{useEffect} from 'react'

const Blog = () => {
   useEffect (()=>{
    document.title = "Blog | Team Work"
   },[]) 
  return (
 <h1>Blog</h1>
  
  )
}

export default Blog
