import React,{useEffect} from 'react'

const Home = () => { 
 useEffect (()=>{
  document.title = "Home | Team Work"
 },[]) 

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4">
    <h1 className="text-4xl sm:text-6xl font-bold text-blue-900 dark:text-white mb-4">
      Welcome to Our Project 🚀
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6">
      This is the Home Page — just testing routes and components! If you're seeing this, your setup is working fine! 🎉
    </p>
    <a
      href="#"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg transition duration-300"
    >
      Get Started
    </a>
  </div>
  )
}

export default Home
