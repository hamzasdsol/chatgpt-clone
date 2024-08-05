import React from 'react';
import { FaPaperclip } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-white border-t border-gray-200 py-4'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Textarea Container */}
          <div className="relative col-span-1 md:col-span-10">
            <textarea
              className="w-full border-2 border-black rounded-full py-2 px-12 resize-none text-gray-900 text-lg font-semibold focus:outline-none"
              placeholder="Message ChatGPT..."
            ></textarea>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl font-bold">
              <FaPaperclip />
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
;


