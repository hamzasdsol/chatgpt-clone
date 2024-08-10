import React, { useState } from 'react';
import { FaPaperclip, FaArrowCircleUp } from 'react-icons/fa';
import { faqData } from '../services/Api';

const Footer = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const findAnswer = (question) => {
    const normalizedQuestion = question.toLowerCase().trim();
    const faq = faqData.find(item => item.question.toLowerCase().includes(normalizedQuestion));
    return faq ? faq.answer : "Sorry, I don't know the answer to that question.";
  };

  const handleSend = () => {
    if (message.trim()) {
      const response = findAnswer(message);
      onSendMessage(message, response);
      setMessage('');
    }
  };

  return (
    <div className='bg-white py-4 mt-4'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative w-full md:w-4/5 lg:w-4/5 flex"> {/* Adjusted width here */}
            <textarea
              className="w-full border-2 border-gray-200 rounded-full pl-12 pr-16 pt-6 resize-none bg-gray-200 text-black text-xl placeholder-gray-500 placeholder:text-xl focus:outline-none"
              placeholder="Message ChatGPT..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold">
              <FaPaperclip />
            </div>
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl font-bold cursor-pointer"
              onClick={handleSend}
            >
              <FaArrowCircleUp />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-lg text-gray-500">ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

