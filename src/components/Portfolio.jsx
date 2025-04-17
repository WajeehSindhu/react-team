import React from 'react'

const projects = [
  {
    title: "E-Commerce Website",
    desc: "Responsive website with cart, product filters, and payment gateway.",
    img: "/Portfolio/Ecommerce.jpg",
    tech: ["React", "Tailwind", "Stripe"],
    link: "#"
  },
  {
    title: "Mechanic Website",
    desc: "Modern personal website to showcase skills and projects.",
    img: "/Portfolio/Mechanic.jpg",
    tech: ["Next.js", "Framer Motion"],
    link: "#"
  },
  {
    title: "Blog CMS",
    desc: "A CMS-based blog site with admin panel and post management.",
    img: "/Portfolio/Blogcms.jpg",
    tech: ["WordPress", "PHP", "MySQL"],
    link: "#"
  },
  {
    title: "Restaurant Landing Page",
    desc: "Beautiful landing page for restaurant with menu and contact form.",
    img: "/Portfolio/Resturant.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Fitness Tracker App",
    desc: "Web app to track workouts, calories, and goals.",
    img: "/Portfolio/FitnessTracker.png",
    tech: ["React", "Firebase", "Chart.js"],
    link: "#"
  },
  {
    title: "Agency Website",
    desc: "Clean and modern multi-page site for a creative agency.",
    img: "/Portfolio/Agency.jpg",
    tech: ["Next.js", "Tailwind CSS"],
    link: "#"
  },
]

const Portfolio = () => {
  return (
    <section className="w-full dark:bg-gray-700 pb-20 p-4 flex flex-col items-center justify-center space-y-">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wide">
        Portfolio 
      </h2>
      <p className="text-blue-800  max-w-xl text-sm sm:text-base px-2 dark:text-gray-300 text-center mb-4">
        Here are some awesome projects I’ve worked on recently using modern technologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center space-y-1 bg-blue-50 dark:bg-black dark:border-blue-400 border border-blue-100 rounded-xl text-center shadow-md shadow-blue-700 dark:shadow-lg  hover:shadow-lg dark:shadow-blue-900 hover:shadow-blue-800 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover rounded-t-md"
              loading="lazy"
            />
            <div className="flex flex-col justify-between items-center space-y-2 p-2">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-500 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm dark:text-gray-300 dark:italic mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 justify-center text-sm text-blue-600 font-semibold">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-white dark:bg-blue-400 dark:text-black dark:border-1 dark:border-white px-2 py-1 rounded border border-blue-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-700 underline hover:text-blue-900 dark:hover:text-gray-200"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
