import React from 'react'
import { Helmet } from 'react-helmet'
import Slider from "../components/Slider"
import Services from '../components/Services'

const Blog = () => {

  return (
    <>
    <Helmet>
  <title>Blog | Team Work - Articles & Insights</title>
  <meta 
    name="description" 
    content="Explore blog posts, tips, and development insights from the Team Work project. Stay updated with our journey!" 
  />
  <meta property="og:title" content="Team Work Blog | React Tips & Updates" />
  <meta property="og:description" content="Stay updated with blog posts, tutorials, and insights from the Team Work React project." />
  <meta property="og:image" content="/Images/Blog-Page.png" />
  <meta property="og:url" content="http://localhost:5173/blog" />
  <meta property="og:type" content="article" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Team Work Blog | React Tips & Updates" />
  <meta name="twitter:description" content="Stay updated with blog posts, tutorials, and insights from the Team Work React project." />
  <meta name="twitter:image" content="/Images/blog-preview.jpg" />

  <link rel="canonical" href="http://localhost:5173/blog" />
</Helmet>
      <section className="bg-gradient-to-br from-blue-300 via-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-blue-700 dark:text-white">CATEGORY</span>
                <span className="mt-1 text-gray-600 text-sm dark:text-gray-400">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-blue-900 title-font mb-2 dark:text-white">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4 dark:text-indigo-300">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-blue-700 dark:text-white">CATEGORY</span>
                <span className="mt-1 text-gray-600 text-sm dark:text-gray-400">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-blue-900 title-font mb-2 dark:text-white">Meditation bushwick direct trade taxidermy shaman</h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4 dark:text-indigo-300">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-blue-700 dark:text-white">CATEGORY</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">12 Jun 2019</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-blue-900 title-font mb-2 dark:text-white">Woke master cleanse drinking vinegar salvia</h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                <a className="text-indigo-500 inline-flex items-center mt-4 dark:text-indigo-300">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <Services/>
    </>
  )
}

export default Blog    
