import React, { useEffect, useState } from 'react';
import { Download, ArrowDown, Code, Palette, Database, Smartphone } from 'lucide-react';
import portfolioData from '../../data/mock';
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specializations = [
    { name: 'Full-Stack', icon: Code, color: 'text-blue-500' },
    { name: 'Frontend', icon: Palette, color: 'text-purple-500' },
    { name: 'Backend', icon: Database, color: 'text-green-500' },
    { name: 'Mobile', icon: Smartphone, color: 'text-orange-500' }
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section 
        id="home"
        className="min-h-screen flex items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 relative overflow-hidden"
      >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-700 dark:text-blue-300">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for hire
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-[length:400%_400%]">
                  {personal.name}
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light min-h-[3rem] flex items-center ">
                <ReactTyped 
                  strings={personal.title}
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                  className="text-blue-600 dark:text-blue-400"                
                  />
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {personal.tagline}
              </p>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-4">
              {specializations.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.name}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon size={20} className={spec.color} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{spec.name}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a
                href={personal.resumeUrl}
                download="Dhananjana_Hirushan_CV.pdf"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              
              <button
                onClick={() => scrollToNext()}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowDown size={20} className="mr-2" />
                Explore My Work
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Users Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute top-10 right-0 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 left-10 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Main photo container */}
              <div className="relative z-10 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with gradient border */}
                <div className="absolute inset-0 rounded-2xl ring-4 ring-gradient-to-r from-blue-400 to-purple-600 ring-opacity-50"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-pulse">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;