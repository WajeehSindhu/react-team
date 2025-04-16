import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>contact@yourwebsite.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p>+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>123 Street, Karachi, Pakistan</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-pink-500 hover:text-pink-700">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
