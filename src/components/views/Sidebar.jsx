import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { PiSidebarLight, PiChatTeardropDots, PiSquaresFour } from 'react-icons/pi';
import gptLogo from '../../assets/images/gpt_logo.png';  

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div className={`grid grid-cols-sidebar bg-gray-100 text-white min-h-screen ${isSidebarOpen ? 'w-80' : 'w-16'} transition-all duration-300`}>
     
      <aside className={`bg-gray-100 text-white min-h-screen ${isSidebarOpen ? 'w-80' : 'w-16'} transition-all duration-300`}>
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
          <nav className="grid-cols-1 overflow-y-auto">
            <ul className="space-y-4 p-4">
              <li>
                <div className="relative group">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-700 text-black">
                    <img src={gptLogo} alt="ChatGPT Logo" className="w-12 h-8 mr-4" />
                    <span className='text-xl font-bold'>ChatGPT</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="relative group">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-700">
                    <PiSquaresFour className="text-4xl mr-4 text-black" />
                    <span className='text-black text-lg'>Explore GPTs</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="relative group">
                 
                </div>
              </li>
            </ul>
          </nav>
        )}
      </aside>
    
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-80' : 'ml-16'} p-4`}>
      
      </main>
    </div>
  );
}

export default Sidebar;
