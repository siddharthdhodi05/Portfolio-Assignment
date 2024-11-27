import React from 'react';

const Header = ({ setSectionKey }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-md sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 border-b border-gray-600">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Title */}
          <a
            href="/"
            className="text-3xl font-extrabold text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            My Portfolio
          </a>
          
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li className="group">
              <a
                href="#about"
                onClick={() => setSectionKey('about')}
                className="text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                About
              </a>
            </li>
            <li className="group">
              <a
                href="#skills"
                onClick={() => setSectionKey('skills')}
                className="text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                Skills
              </a>
            </li>
            <li className="group">
              <a
                href="#projects"
                onClick={() => setSectionKey('projects')}
                className="text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                onClick={() => setSectionKey('contact')}
                className="text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
