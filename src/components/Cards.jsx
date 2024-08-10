import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Cards = ({ onCardClick }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  const cards = [
    { question: "Create a cartoon illustration for my Pet", icon: "fa-solid fa-pen text-sky-500" },
    { question: "Make me a personal webPage", icon: "fa-solid fa-graduation-cap text-purple-500" },
    { question: "Activities to make friends in city", icon: "fa-regular fa-lightbulb text-yellow-500" },
    { question: "Python script for daily email reports", icon: "fa-solid fa-code text-red-500" }
  ];

  // Shuffle cards to show random ones
  const shuffledCards = cards.sort(() => 0.5 - Math.random());

  // Determine the number of cards to display based on screen size
  const cardsToDisplay = isSmallScreen ? shuffledCards.slice(0, 2) : shuffledCards.slice(0, 4);

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {cardsToDisplay.map((card, index) => (
        <div
        key={index}
        className='w-64 h-54 p-4 bg-white shadow-lg rounded-xl cursor-pointer hover:bg-gray-200 transition-all flex flex-col'
        onClick={() => onCardClick(card.question)}
      >
          <div className='flex items-start mb-4'>
            <i className={`${card.icon} text-2xl mt-2 ml-2`}></i>
          </div>
          <p className='text-gray-700 text-lg font-normal ml-2'>{card.question}</p> {/* Updated font weight */}
        </div>
      ))}
    </div>
  );
};

export default Cards;
