import React from 'react';

const Contact = () => {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-8" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2 uppercase tracking-wider mb-6">Get in Touch</h2>
        <p className="text-base sm:text-lg dark:text-gray-300 mb-10">
          Have a question, project idea, or just want to say hello? Fill out the form below.
        </p>

        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-md border-2 border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-md border-2 border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 bg-blue-50 dark:bg-gray-800 rounded-md border-2 border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-md border-2 border-blue-300 dark:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
