import React,{useEffect} from 'react'

const Home = () => { 
 useEffect (()=>{
  document.title = "Home | Team Work"
 },[]) 

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4">
  <h1>homee</h1>
  </div>
  )
}

export default Home
