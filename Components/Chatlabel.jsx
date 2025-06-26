import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from "@/assets/assets";

const Chatlabel = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowOptions((prev) => !prev);
  };

  const closeOptions = () => setShowOptions(false);

  return (
    <div
      className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm cursor-pointer relative"
      onClick={closeOptions} // closes if you click anywhere else on the row
    >
      {/* Chat Name */}
      <p className="truncate max-w-[75%]">Chat Name Here</p>

      {/* Three-dot icon */}
      <div
        className="flex items-center justify-center h-6 w-6 hover:bg-black/80 rounded-lg"
        onClick={toggleOptions}
      >
        <Image src={assets.three_dots} alt="options" className="w-4" />
      </div>

      {/* Dropdown menu */}
      {showOptions && (
        <div className="absolute right-0 top-full mt-2 bg-gray-700 rounded-xl w-32 p-2 z-10 shadow-xl">
          <div className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded">
            <Image src={assets.pencil_icon} alt="Rename" className="w-4 h-4" />
            <p>Rename</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded">
            <Image src={assets.delete_icon} alt="Delete" className="w-4 h-4" />
            <p>Delete</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatlabel;
