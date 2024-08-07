import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

const GenericModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center bg-gray-800 bg-opacity-50 z-50 pt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative w-[500px] rounded-xl">
        <button className="absolute top-2 right-2 text-gray-600 text-2xl" onClick={onClose}>
          <MdOutlineCancel />
        </button>
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GenericModal;
