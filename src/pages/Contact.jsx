import React from 'react'
import { Helmet } from 'react-helmet';
import Banner from "../components/Banner"
import ContactUs from '../components/ContactUs';

const Contact = () => { 
  return (
    <>
    <Helmet>
  <title>Contact Us | Team Work - Let's Collaborate</title>
  <meta 
    name="description" 
    content="Have questions or want to work with us? Get in touch through our contact form and start collaborating today!" 
  />
  <meta property="og:title" content="Contact | Team Work Collaboration" />
  <meta property="og:description" content="Reach out to the Team Work developers for collaborations, feedback, or questions." />
  <meta property="og:image" content="/Images/Contact-Page.png"  loading="lazy"/>
  <meta property="og:url" content="http://localhost:5173/contact" />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact | Team Work Collaboration" />
  <meta name="twitter:description" content="Reach out to the Team Work developers for collaborations, feedback, or questions." />
  <meta name="twitter:image" content="/Images/Contact-Page.png" loading="lazy"/>

  <link rel="canonical" href="http://localhost:5173/contact" />
</Helmet>
    <section className="bg-gradient-to-br from-blue-300 via-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
       
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900 dark:text-white">
            Learn React with Modern UI
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Build dynamic web apps using React and Tailwind CSS. Start your frontend journey today with this beginner-friendly course!
            Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (NSAttributedString on iOS, SpannableString on Android). In practice, this is very tedious. For React Native, we decided to use the web paradigm for this, where you can nest text to achieve the same effect.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-full">
          <img
            src="./images/contactBanner.png"
            alt="React Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    <Banner/>
    <ContactUs/>
    </>
  );
};

export default Contact;
