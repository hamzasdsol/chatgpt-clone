import React from 'react';
import { FaPaperclip, FaArrowCircleUp } from 'react-icons/fa'; // Import the new icon

const Footer = () => {
  return (
    <div className='bg-white py-4 mt-4'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
          {/* Textarea Container */}
          <div className="relative col-span-1 md:col-span-10">
            <textarea
              className="w-full border-2 border-gray-200 rounded-full py-2 px-12 resize-none bg-gray-200 text-black placeholder-gray-500 focus:outline-none"
              placeholder="Message ChatGPT..."
            ></textarea>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold">
              <FaPaperclip />
            </div>
            {/* New Icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl font-bold">
              <FaArrowCircleUp /> {/* Use the new icon */}
            </div>
          </div>
          {/* Text Center */}
          <div className="col-span-1 md:col-span-12 text-center mt-4 md:mt-0">
            <p className="text-lg text-gray-500">ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
