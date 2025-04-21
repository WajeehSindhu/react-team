import React, { useState } from 'react';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const cardData = [
    { img: '/Images/SliderImageone.jpeg', title: 'Shooting Stars' },
    { img: '/Images/SliderImagetwo.jpeg', title: 'The Catalyzer' },
    { img: '/Images/SliderImagethree.jpeg', title: 'The 400 Blows' },
    { img: '/Images/SliderImagefour.webp', title: 'Neptune' },
    { img: '/Images/SliderImagefive.jpeg', title: 'Holden Caulfield' },
    { img: '/Images/SliderImagesix.jpeg', title: 'Alper Kamu' },
];

export default function SliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsToShow = window.innerWidth < 768 ? 1 : 2;
    const maxIndex = cardData.length - cardsToShow;

    const slideLeft = () => {
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    const slideRight = () => {
        if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
    };

    return (
        <section className="bg-gray-300">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={slideLeft}
                        className="absolute sm:left-[-22px] top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-white zoom-target"
                    >
                        <FaChevronLeft size={20}/>
                    </button>
                    <button
                        onClick={slideRight}
                        className="absolute right-0 sm:right-[-22px] top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2  rounded-full hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-white zoom-target"
                        disabled={currentIndex >= maxIndex}
                    >
                       <FaChevronRight size={20}/>
                    </button>
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)` }}
                        >
                            {cardData.map((card, index) => (
                                <div key={index} className="w-full sm:w-1/2 p-4 flex-shrink-0">
                                    <div className="flex relative group hover:-translate-y-1 transition-all duration-300">
                                        <img
                                            alt="gallery"
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                            src={card.img}
                                        />
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 group-hover:opacity-100 dark:bg-black">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 dark:text-white">
                                                THE SUBTITLE
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-blue-500">{card.title}</h1>
                                            <p className="leading-relaxed dark:text-gray-500">
                                                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
