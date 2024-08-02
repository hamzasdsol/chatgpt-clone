import React from 'react';
import { FaBeer, FaCoffee, FaApple, FaAndroid } from 'react-icons/fa'; // Import the icons you want to use

const Main = () => {
  return (
    <div className="flex-1 bg-white p-6 flex flex-col items-center">
      <img 
        src="src/assets/images/gpt logo.png" 
        className="w-32 h-auto mt-9 mb-6" 
        alt="GPT Logo" 
      /> 
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-row overflow-x-auto">
            <div className="flex-none w-80 p-4">
              <div className="relative h-full flex flex-col items-center text-center bg-white rounded-lg shadow-lg">
                <img 
                  className="rounded-lg w-full h-56 object-cover object-center mb-4" 
                  src="" 
                  alt="Card Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-lg">
                  <FaBeer className="text-4xl mb-2" />
                  <p className="text-lg font-semibold">Thank my interviewer</p>
                </div>
              </div>
            </div>
            <div className="flex-none w-80 p-4">
              <div className="relative h-full flex flex-col items-center text-center bg-white rounded-lg shadow-lg">
                <img 
                  className="rounded-lg w-full h-56 object-cover object-center mb-4" 
                  src="" 
                  alt="Card Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-lg">
                  <FaCoffee className="text-4xl mb-2" />
                  <p className="text-lg font-semibold">Recipe with what's in my kitchen</p>
                </div>
              </div>
            </div>
            <div className="flex-none w-80 p-4">
              <div className="relative h-full flex flex-col items-center text-center bg-white rounded-lg shadow-lg">
                <img 
                  className="rounded-lg w-full h-56 object-cover object-center mb-4" 
                  src="" 
                  alt="Card Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-lg">
                  <FaApple className="text-4xl mb-2" />
                  <p className="text-lg font-semibold">Information</p>
                </div>
              </div>
            </div>
            <div className="flex-none w-80 p-4">
              <div className="relative h-full flex flex-col items-center text-center bg-white rounded-lg shadow-lg">
                <img 
                  className="rounded-lg w-full h-56 object-cover object-center mb-4" 
                  src="" 
                  alt="Card Image"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-lg">
                  <FaAndroid className="text-4xl mb-2" />
                  <p className="text-lg font-semibold">Data fetched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
