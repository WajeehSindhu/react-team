import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Team Work"
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-red-500  p-8 rounded-2xl shadow-md dark:shadow-red-600">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 dark:bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-red-800 transition-all duration-300 ease"
            >
              Send Message
            </button>
          </form>
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            <div className="space-y-2">
              <a href="mailto:contact@yourwebsite.com">
                <h3 className="text-lg font-semibold ">Email</h3>
                <p>contact@yourwebsite.com</p>
              </a>
            </div>

            <div className="space-y-2">
              <a href="tel:+923001234567">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+92 300 1234567</p>
              </a>
            </div>

            <div className="space-y-2">
              <a href="https://www.google.com/maps/place/123+Street,+Karachi,+Pakistan" target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">Address</h3>
                <p>123 Street, Karachi, Pakistan</p>
              </a>
            </div>
            <div className="space-y-2"> 
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex justify-center items-center space-x-4 dark:bg-white  p-2 rounded-lg w-[120px]">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-xl hover:opacity-60 transition-opacity duration-300 ease"><FaFacebook/></a>
                <a href="#" className="text-blue-400 hover:text-blue-600 text-xl hover:opacity-60 transition-opacity duration-300 ease"><FaTwitter/></a>
                <a href="#" className="text-pink-500 hover:text-pink-700 text-xl hover:opacity-60 transition-opacity duration-300 ease"><FaInstagram/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
