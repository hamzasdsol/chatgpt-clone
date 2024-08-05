import React, { useState } from 'react';
import { RiArrowDropDownLine, RiShare2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-3xl font-bold text-gray-500">ChatGPT</span>
          <span className="text-5xl text-gray-400" onClick={toggleModal}>
            <RiArrowDropDownLine />
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900"> RiShare2Line </a> */}
        </nav>
        <div className="flex items-center ml-8 ">
          <a 
            className="mr-5 text-4xl relative group" 
            title="Share"
          >
            <RiShare2Line />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Share
            </div>
          </a>
          <a 
            className="text-3xl relative group" 
            title="Gmail"
          >
            <SiGmail />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Gmail
            </div>
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 pt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button className="absolute top-2 right-2 text-gray-600 text-2xl" onClick={toggleModal}>
              ×
            </button>
            
            <div className="flex flex-col mb-4 hover:bg-gray-100 p-2 rounded transition duration-200">
              <div className="flex items-center mb-2">
                <img src="src/assets/images/star.jfif" alt="Image 1" className="w-6 h-6 mr-2" />
                <h2 className="text-lg font-bold">ChatGPT Plus</h2>
                <button className="ml-4 px-2 py-1 bg-gray-500 text-white rounded hover:bg-blue-700 transition duration-200">
                  UPGRADE
                </button>
              </div>
              <p className='mb-4'>Our smartest model & more</p>
            </div>

            <div className="flex flex-col mb-4 hover:bg-gray-100 p-2 rounded transition duration-200">
              <div className="flex items-center mb-2">
                <img src="src/assets/images/images.jfif" alt="Image 2" className="w-6 h-6 mr-2" />
                <h2 className="text-lg font-bold">ChatGPT</h2>
              </div>
              <p className='mb-4'>Great for everyday tasks</p>
            </div>
            
            <hr className='mb-4' />
            
            <div className="flex flex-col mb-4 hover:bg-gray-100 p-2 rounded transition duration-200">
              <div className="flex items-center mb-2">
                <img src="src/assets/images/download.png" alt="Image 3" className="w-10 h-10 mr-2" /> 
                <h3 className="text-lg font-bold">Temporary Chat</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


