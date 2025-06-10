import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectData = [
    {
      title: 'CRM for Internet Service Provider',
      description: 'Manages customers and service requests.',
      tech: ['Java', 'XAMPP', 'HTML/CSS'],
      link: 'https://github.com/VaibhavBari777',
      image: 'P2.jpeg',
    },
    {
      title: 'Online Examination System',
      description: 'Exam management with score tracking and admin/student dashboards.',
      tech: ['Django', 'HTML', 'SQLite'],
      link: 'https://github.com/VaibhavBari777/Online_Examination',
      image: 'P1.jpg',
    },
    {
      title: 'Expense Tracker',
      description: 'GUI app for managing expenses with date filtering.',
      tech: ['Python', 'Tkinter', 'SQLite'],
      link: 'https://github.com/VaibhavBari777/Expense_Tracker',
      image: 'P3.jpeg',
    },
    {
      title: 'Power Business Intelligence',
      description: 'Dashboards and visualizations for customer insights.',
      tech: ['Power BI'],
      link: 'https://github.com/VaibhavBari777/Power-BI-',
      image: 'PowerBI.png',
    },
  ];

  return (
    <section
      className={`p-8 transition-opacity bg-gradient-to-r from-gray-500 via-indigo-500 to-red-700 duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      id="projects"
    >
      <h2 className="text-3xl font-bold mb-6 text-center border-black ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2 text-gray-600">{project.description}</p>
            <p className="text-sm mb-2">
              <strong>Technologies:</strong>{' '}
              {project.tech.map((t, i) => (
                <span key={i} className="inline-block bg-gray-100 px-2 py-1 mr-2 rounded text-xs text-indigo-700 font-semibold">
                  {t}
                </span>
              ))}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline text-sm"
              >
                View Repository
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
