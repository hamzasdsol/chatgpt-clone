import React, { useState } from 'react';
import { PiSidebarLight, PiChatTeardropDots, PiSquaresFour } from 'react-icons/pi';
import gptLogo from '../../assets/images/gpt_logo.png';  

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div className="flex min-h-screen text-white">
      <aside className={`text-white ${isSidebarOpen ? 'w-80 bg-gray-100' : 'w-16'} transition-all duration-300`}>
        <div className={`p-4 flex items-center ${isSidebarOpen ? 'justify-between' : ''} mt-4`}>
          <button onClick={toggleSidebar} className="text-4xl font-bold text-black relative group">
            <PiSidebarLight />
            <div 
              className={`absolute left-full ml-2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity ${isSidebarOpen ? '' : 'mr-4'}`}>
              {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            </div>
          </button>
          <button className={`text-3xl text-black ${isSidebarOpen ? '' : 'ml-4'} relative group`}>
            <PiChatTeardropDots />
            <div 
              className="absolute left-full ml-2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              New Chat
            </div>
          </button>
        </div>
        {isSidebarOpen && (
          <nav className="overflow-y-auto">
            <ul className="space-y-4 p-4">
              <li>
                <div className="relative group">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 text-black">
                    <img src={gptLogo} alt="ChatGPT Logo" className="w-12 h-8 mr-4" />
                    <span className='text-xl font-bold'>ChatGPT</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="relative group">
                  <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-300 text-black">
                    <PiSquaresFour className="text-4xl mr-4 text-black flex-shrink-0" />
                    <span className='text-black text-lg flex-shrink-0'>Explore GPTs</span>
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
      <main className={`flex-1 p-4 ${isSidebarOpen ? '' : 'ml-16'}`}>
      </main>
    </div>
  );
}

export default Sidebar;