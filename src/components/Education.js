import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700 text-white
       border-5 border-gray-300"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Education
      </h2>

      <div className="space-y-5 text-lg text-gray-100 text-center">
        <p className="animate-fade-bounce delay-[0.5s] text-2xl">
          🎓 <strong>Bachelor in Technology (B.Tech)</strong>
        </p>

        <p className="animate-fade-bounce delay-[1s] text-center  text-2xl">
          AI & ML Engineering –{' '}
          <span className="font-semibold text-indigo-300">
            R.C. Patel Institute of Technology, Shirpur
          </span>
        </p>

        <p className="animate-fade-bounce delay-[1.5s] text-center  text-2xl">
          📊 CGPA:{' '}
          <span className="font-bold text-black text-center">7.85 (Till Sem-V)</span>
        </p>

        <p className="animate-fade-bounce delay-[2s] text-center  text-2xl">
          🎓 Expected Graduation:{' '}
          <span className="text-blue-400 font-medium text-center">2026</span>
        </p>

        <p className="animate-fade-bounce delay-[2.5s] text-center  text-2xl">
          📄{' '}
          <a
            href="https://drive.google.com/file/d/1lbqMno8uqCJBerjFVDEOUTEOaxHFLFj2/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-300 underline font-medium hover:text-indigo-100 text-center"
          >
            View Result / Marksheet
          </a>
        </p>
      </div>
    </section>
  );
};

export default Education;
