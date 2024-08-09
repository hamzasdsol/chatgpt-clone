import React from 'react';
import { PiSidebarLight, PiChatTeardropDots, PiSquaresFour } from 'react-icons/pi';
import { FaTrash } from 'react-icons/fa'; // Font Awesome delete icon
import gptLogo from '../../assets/images/gpt_logo.png';
import starImage from '../../assets/images/starimage.png';

const Sidebar = ({ isSidebarOpen, toggleSidebar, onNewChat, chatHistory, onHistoryItemClick, onDeleteHistory, isSmallScreen }) => {
  
  const handleNewChat = () => {
    onNewChat(); // Notify parent to start a new chat
  };

  const handleDelete = (index) => {
    onDeleteHistory(index); // Notify parent to delete the specific history item
  };

  return (
    <div className={`flex min-h-screen text-white ${isSidebarOpen ? '' : 'bg-transparent'}`}>
      <aside className={`text-white ${isSidebarOpen ? 'w-80 bg-gray-100' : 'w-16'} transition-all duration-300 flex flex-col justify-between`}>
        <div>
          <div className={`p-4 flex items-center ${isSidebarOpen ? 'justify-between' : ''} mt-4`}>
            <button onClick={toggleSidebar} className="text-4xl font-bold text-black relative group pl-4">
              <PiSidebarLight />
              <div className={`absolute left-full ml-2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity ${isSidebarOpen ? '' : 'mr-4'}`}>
                {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
              </div>
            </button>
            <button className={`text-3xl text-black ${isSidebarOpen ? '' : 'ml-4'} relative group pl-4`} onClick={handleNewChat}>
              <PiChatTeardropDots />
              <div className="absolute left-full ml-2 text-sm bg-black text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                New Chat
              </div>
            </button>
          </div>
          {isSidebarOpen && (
            <nav className="overflow-y-auto">
              <ul className="space-y-4 p-2">
                <li>
                  <div className="relative group">
                    <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-300 text-black pl-4">
                      <img src={gptLogo} alt="ChatGPT Logo" className="w-10 h-6 mr-2 rounded-full" />
                      <span className="text-xl font-bold ml-2">ChatGPT</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="relative group">
                    <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-300 text-black pl-4">
                      <PiSquaresFour className="text-4xl mr-2 text-black flex-shrink-0 rounded-full w-10 h-6" />
                      <span className="text-black text-lg flex-shrink-0 ml-2">Explore GPTs</span>
                    </a>
                  </div>
                </li>
                {/* Render chat session history items */}
                {chatHistory.map((session, index) => (
                  <li key={index}>
                    <div className="relative group">
                      <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-300 text-black pl-4" onClick={() => onHistoryItemClick(session)}>
                        <span className="text-lg font-bold">{session[0].user}</span> {/* Display the first question */}
                      </a>
                      <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
                        onClick={() => handleDelete(index)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        {isSidebarOpen && (
          <div className="p-2 mb-4">
            <div className="flex items-center hover:bg-gray-300 hover:rounded-lg p-2">
              <img src={starImage} alt="Star Icon" className="w-10 h-10 object-contain mr-2 rounded-full" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-black">Upgrade Plan</span>
                <p className="text-sm text-gray-600 mt-1">Get GPT-4, DALL·E, and more</p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
