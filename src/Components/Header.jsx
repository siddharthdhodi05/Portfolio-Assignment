import React from 'react';

const Header = ({ setSectionKey }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-extrabold text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out">
            My Portfolio
          </a>
          <ul className="flex space-x-6">
            <li className="group">
              <a
                href="#about"
                onClick={() => setSectionKey('about')}
                className="text-lg text-blue-500 hover:text-gray-900 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:scale-105 transform"
              >
                About
              </a>
            </li>
            <li className="group">
              <a
                href="#skills"
                onClick={() => setSectionKey('skills')}
                className="text-lg text-blue-500 hover:text-gray-900 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:scale-105 transform"
              >
                Skills
              </a>
            </li>
            <li className="group">
              <a
                href="#projects"
                onClick={() => setSectionKey('projects')}
                className="text-lg text-blue-500 hover:text-gray-900 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:scale-105 transform"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                onClick={() => setSectionKey('contact')}
                className="text-lg text-blue-500 hover:text-gray-900 transition duration-300 ease-in-out group-hover:shadow-lg group-hover:scale-105 transform"
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
