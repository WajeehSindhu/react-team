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
    <section className='w-full flex flex-col justify-center items-center space-y-6 h-auto bg-blue-100 dark:bg-black p-6'>
      <h1 className='text-2xl font-bold text-blue-900 dark:text-blue-600'>Our Team</h1>
      <p className='text-blue-800 max-w-xl text-sm sm:text-base px-2 dark:text-gray-300 text-center mb-4'>
        Meet the passionate minds behind our work — a dedicated team of developers, designers, and creators driven to deliver impactful digital experiences.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-6 max-w-5xl '>
        {cardsContent.map((card, index) => {
          return (
            <div key={index} className='flex flex-col justify-start items-center bg-blue-300 rounded-md shadow-md shadow-blue-500 overflow-hidden group hover:translate-y-[-10px] hover:shadow-lg hover:shadow-blue-950 transition-all duration-300 ease-in-out'>
              <div className='w-full h-full'>
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className='w-full h-full object-cover transition-all duration-300 ease group-hover:blur-0 blur-[1px] group-hover:brightness-110 rounded-t-md zoom-target'
                />
              </div>

              <div className='p-4 text-center'>
                <h3 className='text-lg font-semibold tracking-wide text-blue-700'>{card.name}</h3>
                <h4 className='text-base text-blue-600'>{card.title}</h4>
                <p className='text-base text-blue-800 mt-2'>{card.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Cards
