import React from 'react';
import Header from './components/Header';
import Sidebar from './components/views/Sidebar';
import Footer from './components/Footer';
import Main from './components/views/Main';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar className="w-2/12 md:w-1/4 lg:w-1/5" />
        <div className="w-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <Main />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
