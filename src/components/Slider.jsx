import React, { useState } from 'react';

export default function Slider() {
    const cards = [
        { title: 'Card 1', description: 'This is the description for card 1.' },
        { title: 'Card 2', description: 'This is the description for card 2.' },
        { title: 'Card 3', description: 'This is the description for card 3.' },
        { title: 'Card 4', description: 'This is the description for card 4.' },
        { title: 'Card 5', description: 'This is the description for card 5.' },
   { title: 'Card 6', description: 'This is the description for card 6.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const slideRight = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    return (
        <div className="w-full overflow-hidden relative px-4 py-8 bg-gray-100">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(100 / (window.innerWidth <= 768 ? 1 : 2)) * currentIndex}%)`,
                }}
            >
                {cards.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 p-4 flex-shrink-0">
                        <div className="bg-white shadow-xl rounded-xl p-6 h-full transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={slideLeft}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-700 text-2xl hover:text-black transition"
            >
                ‹
            </button>

            {/* Next Button */}
            <button
                onClick={slideRight}
                className={`absolute top-1/2 right-2 -translate-y-1/2 text-gray-700 text-2xl hover:text-black transition ${currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={currentIndex === cards.length - 1}
            >
                ›
            </button>
        </div>
    );
}