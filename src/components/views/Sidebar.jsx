import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { PiSidebarLight, PiChatTeardropDots, PiSquaresFour } from 'react-icons/pi';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-gray-100 text-white min-h-screen flex flex-col ${isSidebarOpen ? 'w-64' : 'w-0'}`}>
      <div className="p-4 flex items-center justify-between">
        <div className="relative group mt-6">
          <button onClick={toggleSidebar} className="text-4xl font-bold text-black">
            <PiSidebarLight />
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          </div>
        </div>
        {isSidebarOpen && (
          <div className="relative group mt-6">
            <button className="text-3xl text-black">
              <PiChatTeardropDots />
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              New Chat
            </div>
          </div>
        )}
      </div>
      {isSidebarOpen && (
        <nav className="flex-1">
          <ul className="space-y-2 p-4">
            <li>
              <div className="relative group">
                <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700 text-black">
                  <img src='../../src/assets/images/gpt_logo.png' alt='' className="w-9 h-6 mr-3 font-bold" />
                  <span className='text-2xl font-bold'>ChatGPT</span>
                </a>
              </div>
            </li>
            <li>
              <div className="relative group">
                <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                  <PiSquaresFour className="text-3xl mr-3 text-black" />
                  <span className='text-black'>Explore GPTs</span>
                </a>
              </div>
            </li>
            <li>
              <div className="relative group">
                <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                  <FaCog className="text-2xl mr-3" />
                  <span>Settings</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
