import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/views/Sidebar';
import Footer from './components/Footer';
import Main from './components/views/Main';
import { useMediaQuery } from 'react-responsive';
import { Drawer, Button } from 'antd';
import { PiSidebarLight } from 'react-icons/pi';

const App = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [chatHistory, setChatHistory] = useState([]); // Stores all chat sessions
  const [currentChat, setCurrentChat] = useState([]); // Stores the current chat session

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleSendMessage = (message, response) => {
    const newMessage = { user: message, response };
    setCurrentChat([...currentChat, newMessage]); // Add the message to the current chat session
  };

  const handleNewChat = () => {
    if (currentChat.length > 0 && !chatHistory.some(session => JSON.stringify(session) === JSON.stringify(currentChat))) {
      setChatHistory([...chatHistory, currentChat]); // Save the current session to history if not already saved
    }
    setCurrentChat([]); // Start a new chat session
  };

  const handleHistoryItemClick = (session) => {
    setCurrentChat(session); // Display the selected chat session
  };

  const handleDeleteHistory = (index) => {
    const updatedHistory = chatHistory.filter((_, i) => i !== index);
    setChatHistory(updatedHistory); // Remove the selected chat history item
    if (currentChat === chatHistory[index]) {
      setCurrentChat([]); // Clear the current chat if it's the one deleted
    }
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
            <Sidebar
              className="w-2/12 md:w-1/4 lg:w-1/5"
              onNewChat={handleNewChat}
              chatHistory={chatHistory}
              onHistoryItemClick={handleHistoryItemClick}
              onDeleteHistory={handleDeleteHistory}
            />
          </Drawer>
        ) : (
          <Sidebar
            className="w-2/12 md:w-1/4 lg:w-1/5"
            onNewChat={handleNewChat}
            chatHistory={chatHistory}
            onHistoryItemClick={handleHistoryItemClick}
            onDeleteHistory={handleDeleteHistory}
          />
        )}
        <div className="w-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <Main chatHistory={currentChat} showCards={currentChat.length === 0} />
          </main>
          <Footer onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
