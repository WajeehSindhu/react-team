import React from 'react'
import { Helmet } from 'react-helmet';
import ContactSection from '../components/ContactSection';
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
   <ContactSection/>
    <Banner/>
    <ContactUs/>
    </>
  );
};

export default Contact;
