import React from 'react';
import gptLogo from '../../assets/images/gpt_logo.png';

const Main = ({ chatHistory }) => {
  return (
    <div className="flex-1 bg-white p-6 flex flex-col items-center">
      <img 
        src={gptLogo} 
        alt="ChatGPT Logo" 
        className="w-20 h-12 mt-40 mb-6 rounded-lg" 
      />
      <section className="text-gray-600 body-font mt-16 w-full">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col items-center">
            {chatHistory.map((chat, index) => (
              <div key={index} className="w-full mb-4">
                <div className="flex flex-col">
                  <div className="self-end bg-blue-100 p-4 rounded-lg shadow-md text-black mb-2">
                    <p className="text-base">{chat.user}</p>
                  </div>
                  <div className="self-start bg-gray-100 p-4 rounded-lg shadow-md text-black">
                    <p className="text-base">{chat.response}</p>
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
