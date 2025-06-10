import React from 'react';

const Github = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <a
        href="https://github.com/Vaibhavbari777"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-black rounded-full p-2 bg-white hover:bg-gray-100 shadow-lg transition duration-300"
      >
        <img
          src="/github.png"
          alt="GitHub Profile"
          className="w-12 h-12 object-contain"
        />
      </a>
    </div>
  );
};

export default Github;
