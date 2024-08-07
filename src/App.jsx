import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/views/Sidebar';
import Footer from './components/Footer';
import Main from './components/views/Main';
import { useMediaQuery } from 'react-responsive';
import { Drawer, Button } from 'antd'; // Import Button if you're using Ant 
import { PiSidebarLight } from 'react-icons/pi';

const App = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleSendMessage = (message) => {
    // Placeholder response from ChatGPT
    const response = "This is a placeholder response from ChatGPT.";

    setChatHistory([...chatHistory, { user: message, response }]);
  };

  const handleClearChatHistory = () => {
    setChatHistory([]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        {isSmallScreen && (
          <Button
            className="p-4 pt-9 border-0"
            onClick={toggleDrawer}
          >
            <PiSidebarLight className='text-3xl' />
          </Button>
        )}
        {isSmallScreen ? (
          <Drawer
            placement="left"
            closable={false}
            onClose={toggleDrawer}
            visible={drawerVisible}
            width={300}
          >
            <Sidebar className="w-2/12 md:w-1/4 lg:w-1/5" onNewChat={handleClearChatHistory} />
          </Drawer>
        ) : (
          <Sidebar className="w-2/12 md:w-1/4 lg:w-1/5" onNewChat={handleClearChatHistory} />
        )}
        <div className="w-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <Main chatHistory={chatHistory} />
          </main>
          <Footer onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;


