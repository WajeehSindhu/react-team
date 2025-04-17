'use client'
import React from 'react'
import Slider from 'react-slick'
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaGithub,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiBootstrap, SiOpenai } from 'react-icons/si'


const techIconsUp = [
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, name: 'CSS3' },
    { icon: <FaJs className="text-yellow-500 text-5xl" />, name: 'JavaScript' },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: 'React' },
    { icon: <SiNextdotjs className="text-black text-5xl" />, name: 'Next.js' },
    { icon: <SiTailwindcss className="text-sky-400 text-5xl" />, name: 'Tailwind CSS' },
]
const techIconsDown = [
    { icon: <SiBootstrap className="text-purple-600 text-5xl" />, name: 'Bootstrap' },
    { icon: <FaNodeJs className="text-green-600 text-5xl" />, name: 'Node.js' },
    { icon: <SiMongodb className="text-green-500 text-5xl" />, name: 'MongoDB' },
    { icon: <FaWordpress className="text-blue-800 text-5xl" />, name: 'WordPress' },
    { icon: <FaGithub className="text-gray-800 text-5xl" />, name: 'GitHub' },
    { icon: <SiOpenai className="text-[#412991] text-5xl" />, name: 'OpenAI' },

]

const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
    }
    ]       
}
const TechStackSlider = () => {
    return (
        <section className="w-full  pt-10 pb-20 px-6 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wider">
                Tech Stack
            </h2>
            <p className="text-blue-800  max-w-xl text-sm sm:text-base px-2  text-center mb-4">
                We work with the latest tools in frontend & backend to build top-tier experiences.
            </p>


            <div className="w-full  max-w-5xl transform rotate-[-4deg]">
                <Slider {...settings}>
                    {techIconsUp.map((tech, i) => (
                        <div key={i} className="p-2">
                            <div className='flex flex-col justify-center items-center space-y-2'>
                                {tech.icon}
                                <span className="text-base text-blue-700 italic">{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>


            <div className="w-full max-w-5xl transform -rotate-[4deg] mt-10">
                <Slider {...{ ...settings, rtl: true }}>
                    {techIconsDown.map((tech, i) => (
                        <div key={i} className="p-2">
                            <div className='flex flex-col justify-center items-center space-y-2'>
                                {tech.icon}
                                <span className="text-base text-blue-700 italic">{tech.name}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default TechStackSlider
