import React, { useState } from 'react';
import { RiArrowDropDownLine, RiShare2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import GenericModal from './styles/GenericModal';
import starImage from '../assets/images/star.jfif';
import chatGPTImage from '../assets/images/images.jfif';
import tempChatImage from '../assets/images/download.png';

const Header = ({ isSidebarOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for toggle switch

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <header className="text-gray-600 body-font md:shrink-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-3xl font-bold text-gray-500 sm-ms-5 md:text-left">ChatGPT</span>
          <span className="text-5xl text-gray-400 md:shrink-0 cursor-pointer" onClick={toggleModal}>
            <RiArrowDropDownLine />
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
        <div className="flex items-center ml-8 space-x-5 flex-nowrap hidden md:flex">
          <a className="text-4xl relative group" title="">
            <RiShare2Line />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Share
            </div>
          </a>
          <a className="text-3xl relative group" title="">
            <SiGmail />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Gmail
            </div>
          </a>
        </div>
      </div>
      <GenericModal isOpen={isModalOpen} onClose={toggleModal} title="">
        <div className="flex flex-col hover:bg-gray-100 p-2 transition duration-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img src={starImage} alt="ChatGPT Plus" className="w-8 h-8 mr-2" />
              <h2 className="text-lg font-bold">ChatGPT Plus</h2>
            </div>
            <button className="ml-4 px-3 py-2 bg-white text-[#021526] rounded-full hover:bg-gray-200 border border-gray-600 transition duration-200">
              UPGRADE
            </button>
          </div>
          <p className="text-sm pl-10">Our smartest model & more</p>
        </div>
        <div className="flex flex-col hover:bg-gray-100 p-2 transition duration-200">
          <div className="flex items-center mb-2">
            <img src={chatGPTImage} alt="ChatGPT" className="w-8 h-8 mr-2" />
            <h2 className="text-lg font-bold">ChatGPT</h2>
          </div>
          <p className="text-sm pl-10">Great for everyday tasks</p>
        </div>
        <hr className="mb-2" />
        <div className="flex flex-col hover:bg-gray-100 p-2 transition duration-200">
          <div className="flex items-center mb-2">
            <img src={tempChatImage} alt="Temporary Chat" className="w-12 h-12 mr-2" />
            <h3 className="text-lg font-bold flex-grow">Temporary Chat</h3>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
            </label>
          </div>
        </div>
      </GenericModal>
    </header>
  );
};

export default Header;



