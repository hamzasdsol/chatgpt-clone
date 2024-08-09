import React from 'react';
import gptLogo from '../../assets/images/gpt_logo.png';
import Cards from '../Cards';

const Main = ({ chatHistory, showCards }) => {
  return (
    <div className="flex-1 bg-white p-6 flex flex-col items-center">
      {chatHistory.length === 0 && ( // Only show logo if chat history is empty
        <img 
          src={gptLogo} 
          alt="ChatGPT Logo" 
          className="w-20 h-18 mt-24 mb-8 rounded-lg md:mt-28 md:mb-12" // Adjusted margins for more spacing
        />
      )}
      {showCards && <Cards />}
      <section className="text-gray-600 body-font mt-6 w-full flex-grow flex flex-col">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow flex flex-col">
          <div className="flex flex-col items-center flex-grow overflow-y-auto">
            {chatHistory.map((chat, index) => (
              <div key={index} className="w-full mb-6 px-2 sm:px-4">
                <div className="flex flex-col">
                  <div className="self-end bg-blue-100 p-4 rounded-lg shadow-md text-black mb-2">
                    <p className="text-sm sm:text-base">{chat.user}</p>
                  </div>
                  <div className="self-start bg-gray-100 p-4 rounded-lg shadow-md text-black">
                    <p className="text-sm sm:text-base">{chat.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
