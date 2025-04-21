import React from 'react';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='w-full bg-black dark:bg-white text-white dark:text-black border-t-4 border-blue-500 dark:border-t-2 dark:border-red-500 flex flex-col justify-center items-center relative'>
      <div className='grid grid-cols-1 w-[90%] md:w-4/5 lg:grid-cols-2 gap-10 pt-10 pb-10'>
        <div className='flex flex-col justify-start items-start p-2 space-y-4'>
          <h2 className='text-lg font-bold tracking-wider'>Quick Links</h2>
          <ul className='flex flex-col justify-center items-start space-y-2'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500 zoom-target`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500 zoom-target`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500 zoom-target`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500 zoom-target`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        
        <div className='flex flex-col justify-start items-start space-y-4 pb-6'>
          <h4 className='text-lg font-bold uppercase'>Connect with us</h4>
          <div className='flex gap-6'>
            <a href="https://www.facebook.com/barontechh" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out zoom-target'>
              <FaFacebook size={22} />
            </a>
            <a href="https://www.linkedin.com/company/barontech-pvt-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out zoom-target'>
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://www.instagram.com/barontech.co/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out zoom-target'>
              <FaInstagram size={22} />
            </a>
            <a href="https://twitter.com/barontech_co" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out zoom-target'>
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className='bg-blue-500 dark:bg-black w-full flex flex-col sm:flex-row justify-evenly items-center pt-5 pb-5 px-2 text-center border-t border-white/30 dark:border-black/30'>
        <div>
          <a href="https://barontech.co/" target='_blank' rel="noopener noreferrer" className="text-white hover:text-red-600 transition-all duration-300 ease zoom-target">
            &copy; {new Date().getFullYear()} Baron Tech Pvt Ltd. All Rights Reserved.
          </a>
        </div>
        <div className='flex gap-4 mt-2 sm:mt-0'>
          <a href="/" className="text-lg text-black dark:text-red-400 hover:underline hover:text-white dark:hover:text-white transition-all duration-300 zoom-target">
            Privacy Policy
          </a>
          <a href="/" className="text-lg text-black dark:text-red-400 hover:underline dark:hover:text-white transition-all duration-300 zoom-target">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
