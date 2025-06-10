import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 w-1/3 bg-blue  z-50">
      <ul className="flex justify-end gap-6 p-4 pr-8">
        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">About</Link></li>
        <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Projects</Link></li>
        <li><Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Education</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
