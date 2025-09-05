import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';
import portfolioData from '../../data/mock';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const { skills } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', label: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'database', label: 'Database', icon: Database, color: 'from-purple-500 to-violet-500' },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench, color: 'from-orange-500 to-red-500' }
  ];

  const SkillBar = ({ skill, index }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div className="group">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${animatedLevel}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills[activeCategory]?.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <SkillBar skill={skill} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:400%_400%] animate-gradient-x rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-6">
                Technology evolves rapidly, and I'm committed to staying at the forefront. 
                I regularly explore new frameworks, languages, and development methodologies to deliver cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">🚀</span>
                  <span>Continuous Learning</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">⚡</span>
                  <span>Fast Adaptation</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-2xl">💡</span>
                  <span>Innovation Mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;