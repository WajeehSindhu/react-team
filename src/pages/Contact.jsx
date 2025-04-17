import React,{useEffect} from 'react'
import Banner from "../components/Banner"

const Contact = () => {

   useEffect (()=>{
    document.title = "Home | Team Work"
   },[]) 

  return (
    <>
    <section className="h-[500px] flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-blue-100 to-white dark:from-gray-900 dark:to-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div className="space-y-6">
          <h1>mm</h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white text-gray-900">
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

        {/* Image Section */}
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
    </>
  );
};

export default Contact;
