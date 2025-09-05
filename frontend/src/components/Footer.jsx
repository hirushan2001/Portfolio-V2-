import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Coffee } from 'lucide-react';
import portfolioData from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const socialLinks = [
    { name: 'GitHub', url: personal.social.github, icon: Github },
    { name: 'LinkedIn', url: personal.social.linkedin, icon: Linkedin },
    { name: 'Twitter', url: personal.social.twitter, icon: Twitter },
    { name: 'Email', url: `mailto:${personal.email}`, icon: Mail }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              &lt;{personal.name.split(' ').map(n => n[0]).join('')}/&gt;
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Passionate about creating innovative solutions and building amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 flex items-center">
                <Mail size={16} className="mr-2" />
                {personal.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                📍 {personal.location}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                <Coffee size={16} className="mr-2 text-amber-500" />
                Available for freelance projects and collaborations!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} {personal.name}. Made with</span>
              <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with React + Node.js</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;