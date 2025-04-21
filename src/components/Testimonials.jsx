// src/components/Testimonials.jsx
'use client'
import React from 'react'
import Slider from 'react-slick'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    comment:
      'This team is simply amazing! They delivered everything on time and the result was beyond our expectations.',
    image: '/Testimonials/Sarah.jpg',
  },
  {
    name: 'John Doe',
    role: 'Startup Founder',
    comment:
      'Incredible attention to detail and great communication throughout the entire project!',
    image: '/Testimonials/John.jpg',
  },
  {
    name: 'Ayesha Khan',
    role: 'Freelancer',
    comment:
      'Highly professional and easy to work with. I’ll definitely hire them again!',
    image: '/Testimonials/Ayesha.jpg',
  },
  {
    name: 'Ahmad Khan',
    role: 'UI/UX Designer',
    comment:
      'Creative, professional, and fast. A great team to work with on any web project!',
    image: '/Testimonials/Ahmad.jpg',
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
}

const Testimonials = () => {
  return (
    <section className="bg-blue-50 dark:bg-black/80 pt-10 pb-20 p-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wide">Testimonials </h2>
        <p className="text-blue-800 text-sm sm:text-base px-2 dark:text-gray-300 text-center mb-4 text-center">Hear what our clients and partners say about us.</p>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col justify-center  items-center p-6 min-h-[270px] bg-white  dark:bg-blue-50 dark:border-blue-400 border border-blue-100 rounded-xl text-center shadow-md shadow-blue-700 dark:shadow-lg  hover:shadow-lg dark:shadow-blue-900 hover:shadow-blue-800 hover:scale-105 transition-all duration-300 ease-in-out">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                   loading="lazy"
                  className="w-16 h-16 rounded-full mx-auto mb-1 object-cover zoom-target"
                />
                <h3 className="font-semibold text-lg text-blue-700 zoom-target">{testimonial.name}</h3>
                <span className="text-base text-gray-500 italic">{testimonial.role}</span>
                <p className="text-gray-700  text-base mt-3">"{testimonial.comment}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
