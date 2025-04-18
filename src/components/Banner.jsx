import React from "react";

const Banner = () => {
  const cardsContent = [
    {
      img: '/Team/Sajjad-ahmad.webp',
    },
    {
      img: '/Team/wajeeh.webp',
    },
    {
      img: '/Team/mubeen.webp',
    }
  ];

  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
        
        {/* Left side (White Background) */}
        <div className="bg-white py-12 px-6 md:px-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            BUSINESS BANNER <br /> <span className="text-gray-500">DESIGN</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition dark:bg-gray-900"
          >
            Learn More
          </a>
        </div>

        {/* Right side content (image grid on rotated bg) */}
        <div className="py-12 px-6 flex justify-center items-center relative z-10">
          <div className="grid grid-cols-3 gap-3">
            {cardsContent.map((item, i) => (
              <div
                key={i}
                className="w-[80px] md:w-[120px] h-[160px] overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={item.img}
                  alt={`Team member ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rotated green background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 transform skew-x-[-60deg] origin-left z-0  dark:bg-gray-900" />
    </section>
  );
};

export default Banner;
