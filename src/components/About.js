import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Dedicated and enthusiastic B.Tech student with a strong foundation in programming and a passion for AI/ML. Skilled in Python and Java, with hands-on experience in real-world projects and internships. Eager to learn and grow in the tech industry.
          </p>
        </div>
        <div className="about-image">
          <img  src="/vaibhav.png" alt="Vaibhav Bari" />
        </div>
      </div>
    </section>
  );
};

export default About;
