import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <ul>
        <li>
          <strong>Technical Member</strong> – College Coding Club<br />
          Represented the club at events, delivered coding knowledge.
        </li>
        <li>
          <strong>Intern at TechAlten</strong> – 1 Month (Virtual)<br />
          Worked on ML models, data analysis, problem-solving. <br />
          Repository: <a href="https://github.com/yourusername/TechAlten" target="_blank" rel="noreferrer">TechAlten</a>
        </li>
        <li>
          <strong>Intern at CodSoft</strong> – 4 Weeks (Virtual)<br />
          Worked on Java, problem solving.<br />
          Repository: <a href="https://github.com/yourusername/CodSoft" target="_blank" rel="noreferrer">CodSoft</a>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
