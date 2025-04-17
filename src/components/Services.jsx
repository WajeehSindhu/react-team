import React from 'react'
import { FaCode, FaPaintBrush, FaWordpress, FaRocket,FaSearch,FaMobileAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: 'Web Development',
      desc: 'Custom-built websites using modern technologies like React and Next.js.',
    },
    {
      icon: <FaPaintBrush className="text-4xl text-blue-600" />,
      title: 'UI/UX Design',
      desc: 'Creating intuitive, user-friendly interfaces for the best user experience.',
    },
    {
      icon: <FaWordpress className="text-4xl text-blue-600" />,
      title: 'WordPress Development',
      desc: 'Building dynamic, SEO-optimized WordPress themes and plugins.',
    },
    {
      icon: <FaRocket className="text-4xl text-blue-600" />,
      title: 'Performance Optimization',
      desc: 'Improving site speed, SEO, and responsiveness for better performance.',
    },
    {
        icon: <FaSearch className="text-4xl text-blue-600" />,
        title: 'SEO Optimization',
        desc: "Boost your website’s visibility with SEO strategies tailored to your audience.",
      },
      {
        icon: <FaMobileAlt className="text-4xl text-blue-600" />,
        title: 'Mobile App Development',
        desc: 'Create mobile apps that deliver fast, responsive, and immersive user experiences.',
      },
    ]
  

  return (
    <section className="w-full dark:bg-gray-700 py-12 px-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wider">
        What We Do
      </h2>
      <p className="text-blue-800  max-w-xl text-sm sm:text-base px-2 dark:text-gray-300 text-center mb-4">
        Our team specializes in full-cycle development, design, and optimization to build modern, scalable web experiences.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center space-y-1 bg-blue-50 dark:bg-black dark:border-blue-400 border border-blue-100 rounded-xl p-4 pt-6 pb-6 text-center shadow-md shadow-blue-700 dark:shadow-lg  hover:shadow-lg dark:shadow-blue-900 hover:shadow-blue-800 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-500 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm dark:text-gray-300 dark:italic">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
