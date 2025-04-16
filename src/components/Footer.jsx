import React from 'react';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='w-full bg-black dark:bg-white text-white dark:text-black border-t-4 border-blue-500 dark:border-t-2 dark:border-red-500   flex flex-col justify-center items-center relative'>
      <div className='grid grid-cols-1 w-[90%] md:w-4/5 lg:grid-cols-2 gap-10 pt-10 pb-10 mb-20 sm:mb-10'>
        <div className='flex flex-col justify-start items-start p-2 space-y-4'>
          <h2 className='text-lg font-bold tracking-wider'>Quick Links</h2>
          <ul className='flex flex-col justify-center items-start space-y-2'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `no-underline transition-all duration-300 text-gray-400 dark:text-gray-700 ${isActive ? "text-red-400 dark:text-red-500" : ""} hover:text-red-400 dark:hover:text-red-500`
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='flex flex-col justify-start items-start  space-y-4 pb-6'>
          <h4 className='text-lg font-bold uppercase'>Connect with us</h4>
          <div className='flex gap-6'>
            <a href="https://www.facebook.com/barontechh" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out'>
              <FaFacebook size={22} />
            </a>
            <a href="https://www.linkedin.com/company/barontech-pvt-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out'>
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://www.instagram.com/barontech.co/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out'>
              <FaInstagram size={22} />
            </a>
            <a href="https://twitter.com/barontech_co" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-red-400 dark:hover:text-red-600 transition-colors duration-300 ease-in-out'>
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

      </div>
      <div className='bg-blue-500 dark:bg-black w-full flex flex-col sm:flex-row justify-evenly items-center pt-5 pb-5 px-2 absolute bottom-0 left-0 text-center'>
        <div>
          <a href="https://barontech.co/" target='_blank' rel="noopener noreferrer" className="text-white hover:text-red-600 transition-all duration-300 ease">
            &copy; {new Date().getFullYear()} Baron Tech Pvt Ltd. All Rights Reserved.
          </a>
        </div>
        <div className='flex gap-4'>
          <a href="/" className="text-lg text-black dark:text-red-400 hover:underline hover:text-white dark:hover:text-white transition-all duration-300">
            Privacy Policy
          </a>
          <a href="/" className="text-lg text-black dark:text-red-400 hover:underline dark:hover:text-white dark:hover:text-white transition-all duration-300">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
