import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Database, Wrench, Layers } from 'lucide-react';
import portfolioData from '../../data/mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [showBottom, setShowBottom] = useState(false); // new state for bottom section
  const sectionRef = useRef(null);

  const { skills } = portfolioData;

  const categories = [
    { id: 'all', label: 'All', icon: Layers, color: 'from-pink-500 to-red-500' },
    { id: 'frontend', label: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', label: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
    { id: 'database', label: 'Database', icon: Database, color: 'from-purple-500 to-violet-500' },
    { id: 'languages', label: 'Languages', icon: Code, color: 'from-yellow-500 to-amber-500' },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench, color: 'from-orange-500 to-red-500' }
  ];

  const skillList = activeCategory === 'all' ? Object.values(skills).flat() : skills[activeCategory] || [];

  const containerVariants = {
    hidden: {},
    visible: { 
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Scroll observer
 useEffect(() => {
  const section = sectionRef.current;
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(section);

  // Check if already visible on mount
  if (section.getBoundingClientRect().top < window.innerHeight) {
    setIsVisible(true);
  }

  return () => observer.disconnect();
}, []);


  return (
    <section
        id="skills"
        ref={sectionRef}
        className="py-16 bg-gray-50 dark:bg-gray-900"
        style={{ minHeight: '600px' }} // Add a minimum height to prevent layout shift
      >      
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Technologies I work with and love using</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:rotate-1 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-xl border border-gray-200 dark:border-gray-700'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Icon size={20} className={`mr-2 ${activeCategory === category.id ? 'animate-spin-slow' : ''}`} />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={activeCategory + isVisible}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center transition-all duration-500"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onAnimationComplete={() => setShowBottom(true)} // trigger bottom section after grid animates
            >
              {skillList.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants} className="flex flex-col items-center cursor-pointer">
                  <span className="text-4xl mb-1">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      {!showBottom && (
        <div style={{ height: '220px', transition: 'height 0.5s' }} aria-hidden="true"></div>
      )}
        {/* Bottom Section */}
          <AnimatePresence>
            {showBottom && (
              <motion.div
                className="mt-16"
                variants={bottomVariants}
                initial="hidden"
                animate="visible"
              >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
      `}</style>
    </section>
  );
};

export default Skills;
