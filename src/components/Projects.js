// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the visibility to true after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className={`projects-section ${isVisible ? 'fade-in' : ''}`} id="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>CRM for Internet Service Provider</strong><br />
          Built using Java, XAMPP, and HTML/CSS for managing customers and service requests.<br />
        </li>
        <li>
          <strong>Online Examination System</strong><br />
          Built with Django, supports exam management, score tracking, admin-student views.<br />
          Repository: <a href="https://github.com/yourusername/Online-Examination-System" target="_blank" rel="noreferrer">Online Examination System</a>
        </li>
        <li>
          <strong>Expense Tracker</strong><br />
          Python with Tkinter GUI and SQLite backend for expense management with date filtering.<br />
          Repository: <a href="https://github.com/yourusername/Expense-Tracker" target="_blank" rel="noreferrer">Expense Tracker</a>
        </li>
        <li>
          <strong>Power Business Intelligence</strong><br />
          Dashboards in Power BI for customer insights.<br />
          Repository: <a href="https://github.com/yourusername/PowerBI-Dashboards" target="_blank" rel="noreferrer">PowerBI</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
