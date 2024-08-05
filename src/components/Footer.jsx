import React from 'react';
import { FaPaperclip } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-white border-t border-gray-200 rounded-full'>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-full">
          <textarea
            className="w-full border-2 border-black rounded-full py-2 px-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message ChatGPT..."
          ></textarea>
          <div className="absolute top-1/2 left-4 transform -translate-y-4 text-gray-500 rounded-full">
            <FaPaperclip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

