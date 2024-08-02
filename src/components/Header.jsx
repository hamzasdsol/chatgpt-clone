import React from 'react';
import { RiArrowDropDownLine, RiShare2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="ml-3 text-3xl font-bold text-gray-500">ChatGPT</span>
          <span className="text-5xl text-gray-400"><RiArrowDropDownLine /></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900"> RiShare2Line </a> */}
        </nav>
        <div className="flex items-center ml-6 ">
          <a 
            className="mr-5 hover:text-black-900  text-4xl" 
            title="Close Sidebar"
          >
            <RiShare2Line />
          </a>
          <a 
            className="text-3xl" 
            title="New Chat"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

