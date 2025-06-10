import React from 'react';
import './DownloadCV.css'; // Optional: Add styling

function DownloadCV() {
  return (
    <div className="download-cv">
      <a
        href="/Vaibhav_CV.pdf"
        download="Vaibhav_Ramchandra_Bari_CV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="cv-button">Download CV</button>
      </a>
    </div>
  );
}

export default DownloadCV;
