import React from 'react';
import Header from './components/Header';
import Sidebar from './components/views/Sidebar';
import Footer from './components/Footer';
import Main from './components/views/Main';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar className="w-2/12" />
        <div className="w-10/12 flex flex-col">
          <Header />
          <Main/>
        
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

