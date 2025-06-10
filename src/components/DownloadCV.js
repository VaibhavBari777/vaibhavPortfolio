import React from 'react';

const DownloadCV = () => {
  return (
    <div className="fixed left-4 top-1/2 z-50 animate-bounce">
      <a
        href="/Vaibhav_CV.pdf"
        download="Vaibhav_Ramchandra_Bari_CV"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:scale-105 hover:rotate-1 transition-all duration-500"
      >
         <span>Download CV</span> 👈
      </a>
    </div>
  );
};

export default DownloadCV;
