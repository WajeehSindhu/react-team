import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat pt-20 pb-20 p-4 text-center text-white" style={{ backgroundImage: "url('/Images/cta-banner.jpg')" }}>
    <div className="bg-black bg-opacity-60 absolute inset-0 z-0"></div>
    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Let’s Build Something Amazing Together 🚀</h2>
      <p className="text-gray-200 text-lg sm:text-base px-2 dark:text-blue-200 text-center mb-4 italic">Whether it's a website, web app, or something bold — I'm ready for the challenge.</p>
      <div className="flex justify-center pt-4">
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition zoom-target">Let’s Talk</Link>
      </div>
    </div>
  </section>
  )
}

export default CallToAction
