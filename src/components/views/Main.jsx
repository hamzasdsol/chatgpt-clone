import React from 'react';
import gptLogo from '../../assets/images/gpt_logo.png';
import image1 from '../../assets/images/image.png';
import penImage from '../../assets/images/pen.png';
import finalImage from '../../assets/images/finalimage.jfif';
import shoppingBagImage from '../../assets/images/shoppingbag.jfif';

const Main = () => {
  return (
    <div className="flex-1 bg-white p-6 flex flex-col items-center">
      <img 
        src={gptLogo} 
        alt="ChatGPT Logo" 
        className="w-36 h-24 mt-10 mb-6 rounded-lg" 
      />

      <section className="text-gray-600 body-font mt-2">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4"> 
              <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-3 h-40"> 
                <img 
                  className="rounded-full w-6 h-6 object-cover object-center mb-2" 
                  src={image1} 
                  alt="Card Image"
                />
                <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-3"> 
                  <p className="text-sm font-semibold">What's in my Kitchen</p>
                </div>
              </div>
            </div>
            <div className="p-4"> 
              <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-3 h-40">
                <img 
                  className="rounded-full w-6 h-6 object-cover object-center mb-2" 
                  src={penImage} 
                  alt="Card Image"
                />
                <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-3"> 
                  <p className="text-sm font-semibold">Content Calendar</p> 
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-3 h-40"> 
                <img 
                  className="rounded-full w-6 h-6 object-cover object-center mb-2" 
                  src={finalImage} 
                  alt="Card Image"
                />
                <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-3"> 
                  <p className="text-sm font-semibold text-5xl">Plan a relaxing day</p> 
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-3 h-40"> 
                <img 
                  className="rounded-full w-6 h-6 object-cover object-center mb-2" 
                  src={shoppingBagImage} 
                  alt="Card Image"
                />
                <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-3"> 
                  <p className="text-sm font-semibold">Pick Outfit to look good on Camera</p> 
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
