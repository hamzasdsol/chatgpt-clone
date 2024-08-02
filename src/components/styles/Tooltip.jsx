// src/components/styles/Tooltip.jsx
import React from 'react';

const Tooltip = ({ children, tooltipText }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
        {tooltipText}
      </div>
    </div>
  );
};

export default Tooltip;
ip;
