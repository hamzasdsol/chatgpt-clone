import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Cards = ({ onCardClick }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  const cards = [
    { question: "Create a workout plan", icon: "fa-solid fa-pen text-sky-500" },
    { question: "Overcome procrastination", icon: "fa-solid fa-graduation-cap text-purple-500" },
    { question: "What to do with art", icon: "fa-regular fa-lightbulb text-yellow-500" },
    { question: "Python script for daily email reports", icon: "fa-solid fa-code text-red-500" }
  ];

  // Shuffle cards to show random ones
  const shuffledCards = cards.sort(() => 0.5 - Math.random());

  // Determine the number of cards to display based on screen size
  const cardsToDisplay = isSmallScreen ? shuffledCards.slice(0, 2) : shuffledCards.slice(0, 4);

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {cardsToDisplay.map((card, index) => (
        <div
          key={index}
          className='w-full sm:w-64 md:w-72 lg:w-80 h-40 p-3 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100 transition-all flex flex-col items-center justify-center'
          onClick={() => onCardClick(card.question)}
        >
          <i className={`${card.icon} text-3xl mb-4`}></i>
          <p className='text-slate-500 text-center text-sm sm:text-base'>{card.question}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
