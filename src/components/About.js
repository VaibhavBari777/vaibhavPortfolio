import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/vaibhav.png"
            alt="Vaibhav Bari"
            className="w-100 h-100 animation-bouncing rounded-full border-1 border-black shadow-[0_0_30px_#3b82f680] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold tracking-wide animate-pulse">About Me</h2>
          <p className="text-xl leading-relaxed font-light">
            👋 Hi, I'm <span className="font-semibold text- text-3xl ">Vaibhav Bari</span> — a dedicated and enthusiastic B.Tech student deeply passionate about technology.
          </p>
          <p className="text-lg leading-relaxed">
            🚀 Skilled in <span className="font-semibold">Python</span> and <span className="font-semibold">Java</span>, I thrive on solving real-world problems using AI/ML.
            I'm always excited to take on new challenges, learn, and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
