import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Award, GraduationCap, Briefcase } from 'lucide-react';
import portfolioData from '../../data/mock';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const { experience, education } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];

  const renderExperience = () => (
    <div className="space-y-8">
      {experience.map((exp, index) => (
        <div
          key={exp.id}
          className={`relative transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          {/* Timeline line */}
          {index !== experience.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
          
          <div className="ml-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.position}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {exp.duration}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>
            
            {/* Achievements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                <Award size={16} className="mr-2 text-yellow-500" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-green-500 mr-2 mt-1.5 text-xs">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div
          key={edu.id}
          className={`relative transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
        >
          {/* Timeline line */}
          {index !== education.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30"></div>
          )}
          
          {/* Timeline dot */}
          <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
          
          <div className="ml-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:scale-[1.02]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Focus: {edu.focus}</p>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {edu.duration}
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {edu.location}
                </div>
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                  GPA: {edu.gpa}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional growth and educational background
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon size={18} className="mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'experience' ? renderExperience() : renderEducation()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;