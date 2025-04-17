import React from 'react'

const Cards = () => {
  const cardsContent = [
    {
      img: '/Team/Sajjad-ahmad.webp',
      name: 'Sajjad Ahmad',
      title: 'Full Stack Developer',
      short: 'MERN Expert & Team Lead',
      desc: 'Skilled in both frontend and backend, building scalable and dynamic web applications.',
    },
    {
      img: '/Team/aliraza.webp',
      name: 'Ali Raza Haider',
      title: 'Full Stack Developer',
      short: 'API & Database Architect',
      desc: 'Expert in creating efficient APIs, responsive UIs, and robust databases for seamless integration.',
    },
    {
      img: '/Team/abdullah-developer.webp',
      name: 'Abdullah Amjad',
      title: 'WordPress Developer',
      short: 'Theme & Plugin Specialist',
      desc: 'Specializes in creating custom themes and plugins to build dynamic, SEO-friendly websites.',
    },
    {
      img: '/Team/sardarali.webp',
      name: 'Sardar Ali',
      title: 'WordPress Developer',
      short: 'SEO & UI Optimization',
      desc: 'Specializes in creating custom themes and plugins to build dynamic, SEO-friendly websites.',
    },
    {
      img: '/Team/wajeeh.webp',
      name: 'Wajeeh Ul Hassan',
      title: 'React Js Developer',
      short: 'UI/UX Focused Developer',
      desc: 'Focused on crafting high-performance user interfaces using modern React techniques.',
    },
    {
      img: '/Team/mubeen.webp',
      name: 'Mubeen Yousaf',
      title: 'React Js Developer',
      short: 'Reusable Components Pro',
      desc: 'Experienced in building reusable components and optimizing frontend performance.',
    }
  ]

  return (
    <section className="w-full flex flex-col justify-center items-center space-y-6 h-auto bg-blue-100 dark:bg-gray-800  pt-10 pb-10">
      <div className="text-center space-y-2 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wider dark:text-white">Our Team</h1>
        <p className="text-blue-800 max-w-xl text-sm sm:text-base px-2 dark:text-gray-300">
          Meet the passionate developers who bring ideas to life with clean code, creative thinking, and teamwork.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl p-4">
        {cardsContent.map((card, index) => (
          <article key={index} className="bg-white dark:bg-black rounded-md shadow-md shadow-blue-700 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 group">
            <div className="w-full h-auto">
              <img 
                src={card.img} 
                alt={card.name} 
                 loading="lazy"
                className="w-full h-full object-cover blur-[2px] group-hover:blur-0 group-hover:scale-105 transition-all duration-300 ease-in-out rounded-t-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1 mt-2 p-2 pb-4">
              <h3 className="text-lg font-bold  text-blue-700 uppercase italic">{card.name}</h3>
              <h4 className="text-base font-semibold text-blue-600">{card.title}</h4>
              <p className="text-sm text-blue-500 italic">{card.short}</p>
              <p className="text-center text-blue-950 dark:text-gray-300">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cards
