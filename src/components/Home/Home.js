import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const contactButtons = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/yourusername',
      className: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/yourusername',
      className: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:your.email@example.com',
      className: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'Resume',
      icon: FaFileAlt,
      href: '/assets/documents/Resume_kenneth_AI engineer.pdf',
      className: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6"
        variants={item}
      >
        Hi, I'm <span className="text-blue-600">Kenneth Lim</span>
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12"
        variants={item}
      >
        AI and Machine Learning Engineer
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={item}
      >
        {contactButtons.map((button) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-6 py-3 text-white rounded-lg font-medium text-lg transition-colors duration-300 ${button.className}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-5 w-5 mr-2" />
              {button.name}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Home;