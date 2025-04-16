import React from 'react'

const Cards = () => {
const cardsContent = [
    {
      img: '/Team/Sajjad-ahmad.webp',
      name:'Sajjad Ahmad',
      title: 'Full Stack Developer',
      desc: 'Skilled in both frontend and backend, building scalable and dynamic web applications.',
    },
    {
      img: '/Team/aliraza.webp',
      name:'Ali Raza Haider',
      title: 'Full Stack Developer',
      desc: 'Expert in creating efficient APIs, responsive UIs, and robust databases for seamless integration.',
    },
    {
      img: '/Team/abdullah-developer.webp',
      name:'Abdullah Amjad',
      title: 'WordPress Developer',
      desc: 'Specializes in creating custom themes and plugins to build dynamic, SEO-friendly websites.',
    },
    {
      img: '/Team/sardarali.webp',
      name:'Sardar Ali',
      title: 'WordPress Developer',
      desc: 'Specializes in creating custom themes and plugins to build dynamic, SEO-friendly websites.',
    },
    {
      img: '/Team/wajeeh.webp',
      name:'Wajeeh Ul Hassan',
      title: 'React Js Developer',
      desc: 'Focused on crafting high-performance user interfaces using modern React techniques.',
    },
    {
      img: '/Team/mubeen.webp',
      name:'Mubeen Yousaf',
      title: 'React Js Developer',
      desc: 'Experienced in building reusable components and optimizing frontend performance.',
    }
  ]

  return (
    <section className='w-full flex flex-col justify-center items-center space-y-6 h-auto bg-blue-100 p-6'>
    <h1 className='text-2xl font-bold text-blue-900'>Our Team </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl'>
    {cardsContent.map((card,index)=>{
        return(
            <div key={index} className='flex flex-col justify-center items-center gap-0 bg-blue-300 rounded-md shadow-md shadow-blue-500'>
              <div className='w-full h-auto'>
                <img src={card.img} alt={card.title} className='w-full h-full object-cover blur-[1px] hover:blur-[0px]  transition-all duration-300 ease'/>
              </div>
              <h3 className='text-lg font-semibold tracking-wide text-blue-700'>{card.name}</h3>      
              <h4 className='text-base text-blue-600'>{card.title}</h4>
              <p className='text-center'>{card.desc}</p>      
            </div>

        )
    })}
    </div>
    </section>
  )
}

export default Cards
