import React from 'react';
import gptLogo from '../../assets/images/gpt_logo.png';
import image1 from '../../assets/images/image.png';
import penImage from '../../assets/images/pen.png';
import finalImage from '../../assets/images/finalimage.jfif';
import shoppingBagImage from '../../assets/images/shoppingbag.jfif';

const Main = () => {
  return (
    <div className="flex-1 bg-white p-6 flex flex-col items-center">
      {/* Adjusted the margin to move the logo and cards down */}
      <img 
        src={gptLogo} 
        alt="ChatGPT Logo" 
        className="w-24 h-16 mt-32 mb-10 rounded-lg" 
      />

      <section className="text-gray-600 body-font mt-16 w-full">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-48 h-36 mb-4 mx-2">
                <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-4 h-36 w-48"> 
                  <img 
                    className="rounded-full w-10 h-10 object-cover object-center mb-2" 
                    src={image1} 
                    alt="Card Image"
                  />
                  <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-2"> 
                    <p className="text-xs font-semibold">What's in my Kitchen</p>
                  </div>
                </div>
              </div>
              <div className="w-48 h-36 mb-4 mx-2">
                <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 h-36 w-48">
                  <img 
                    className="rounded-full w-10 h-10 object-cover object-center mb-2" 
                    src={penImage} 
                    alt="Card Image"
                  />
                  <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-2"> 
                    <p className="text-xs font-semibold">Content Calendar</p> 
                  </div>
                </div>
              </div>
              <div className="w-48 h-36 mb-4 mx-2">
                <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 h-36 w-48"> 
                  <img 
                    className="rounded-full w-10 h-10 object-cover object-center mb-2" 
                    src={finalImage} 
                    alt="Card Image"
                  />
                  <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-2"> 
                    <p className="text-xs font-semibold">Plan a relaxing day</p> 
                  </div>
                </div>
              </div>
              <div className="w-48 h-36 mb-4 mx-2">
                <div className="relative flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-4 h-36 w-48"> 
                  <img 
                    className="rounded-full w-10 h-10 object-cover object-center mb-2" 
                    src={shoppingBagImage} 
                    alt="Card Image"
                  />
                  <div className="flex flex-col items-center justify-center text-black bg-white bg-opacity-90 rounded-2xl p-2"> 
                    <p className="text-xs font-semibold">Pick Outfit to look good on Camera</p> 
                  </div>
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
