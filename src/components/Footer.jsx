import React, { useState } from 'react';
import { FaPaperclip, FaArrowCircleUp } from 'react-icons/fa';

const Footer = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className='bg-white py-4 mt-4'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
          <div className="relative col-span-1 md:col-span-10">
            <textarea
              className="w-full mt-4 border-2 border-gray-200 rounded-full py-2 px-12 pt-4 pb-2 resize-none bg-gray-200 text-black text-xl placeholder-gray-500 placeholder:text-xl focus:outline-none"
              placeholder="Message ChatGPT..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="absolute left-4 cursor-pointer top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold">
              <FaPaperclip />
            </div>
            <div
              className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold"
              onClick={handleSend}
            >
              <FaArrowCircleUp />
            </div>
          </div>
          <div className="col-span-1 md:col-span-12 text-center mt-4 md:mt-0">
            <p className="text-lg text-gray-500">ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
