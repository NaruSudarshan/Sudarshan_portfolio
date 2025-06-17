import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-12 max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm space-y-4">
      <p className="text-xs">Developed with ❤️ by Naru Sudarshan Reddy, leveraging AI assistance.</p>
      <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/NaruSudarshan" target="_blank" rel="noreferrer" 
           className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors btn-animated">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noreferrer" 
           className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors btn-animated">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:narusudarshanreddy09@gmail.com" 
           className="hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors btn-animated">
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 