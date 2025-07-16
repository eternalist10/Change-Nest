import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    const newTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 1000); // Delay of 500ms (adjust as needed)
    setTimer(newTimer);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setShowTooltip(false);
  };

  return (
    <div className="relative group">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transition-transform duration-700  translate-y-6 px-2 py-1 bg-gray-800 text-white text-sm rounded-md z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;