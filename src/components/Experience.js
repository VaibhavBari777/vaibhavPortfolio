import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg- py-16 px-6 bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Experience</h2>
      
      <div className="flex flex-wrap justify-center gap-10">
        
        {/* Box 1 - College Coding Club */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-[400px] opacity-0 animate-fade-in animation-delay-1000">
          <h3 className="text-2xl font-semibold mb-3">Technical Member - College Coding Club</h3>
          <p className="text-gray-700 text-base">
            Represented the club at events and shared coding knowledge.As technical memeber responsibility to mange technical task into the events.
          </p>
        </div>

        {/* Box 2 - TechAlten */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-[400px] opacity-0 animate-fade-in animation-delay-2000">
          <h3 className="text-2xl font-semibold mb-3">Intern at TechAlntern - 1 Month (Virtual)</h3>
          <p className="text-gray-700 text-base mb-2">
             Completed 3 Machine Learning projects,
            enhancing skills in ML models, data
              analysis, and problem-solving.
          </p>
          <a 
            href="https://github.com/VaibhavBari777/TAI-IP10" 
            target="_blank" 
            rel="noreferrer"
            className="text-indigo-600 hover:underline text-sm font-medium"
          >
            View TechAlten - Repository
          </a>
        </div>

        {/* Box 3 - CodSoft */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full md:w-[400px] opacity-0 animate-fade-in animation-delay-3000">
          <h3 className="text-2xl font-semibold mb-3">Intern at CodSoft - 4 Weeks (Virtual)</h3>
          <p className="text-gray-700 text-base mb-2">
            Intern At CodSoft Which Provide Java
            Knowledge Problem Solving.
            virtual internship.
          </p>
          <a 
            href="https://github.com/VaibhavBari777/CODSOFT" 
            target="_blank" 
            rel="noreferrer"
            className="text-indigo-600 hover:underline text-sm font-medium"
          >
            View CodSoft - Repository
          </a>
        </div>

      </div>
    </section>
  );
};

export default Experience;
