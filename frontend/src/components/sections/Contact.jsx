import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Twitter } from 'lucide-react';
import portfolioData from '../../data/mock';
import axios from 'axios';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { personal } = portfolioData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // const response = await axios.post('http://localhost:5000/api/email/send', formData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACK_END_URL}/api/email/send`,
        formData
      );
    
    if (response.data.success) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Failed to send email. Please try again.');
    }
  } catch (error) {
    console.error('Email submission error:', error);
    alert('An error occurred while sending the email.');
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: personal.social.github, icon: Github, color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', url: personal.social.linkedin, icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', url: personal.social.twitter, icon: Twitter, color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or just have a conversation about technology and innovation. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={contact.label}
                      className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{contact.label}</p>
                        {contact.href !== '#' ? (
                          <a
                            href={contact.href}
                            className={`text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Currently Available</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I'm open to new opportunities and interesting projects. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                 {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;