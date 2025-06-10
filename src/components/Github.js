// src/components/Github.js
import React from 'react';
import './Github.css';

const Github = () => {
  return (
    <div>
      <a
        href="https://github.com/Vaibhavbari777"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.png" 
          alt="GitHub Profile"
          style={{ width: '100px', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default Github;
