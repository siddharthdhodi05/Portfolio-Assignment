import React, { useState } from "react";

const Header = ({ setSectionKey }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

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

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 md:bg-transparent p-4 md:p-0 ${
              menuOpen ? "block" : "hidden"
            } md:block transition-transform duration-300 ease-in-out`}
          >
            <li className="group">
              <a
                href="#about"
                onClick={() => setSectionKey("about")}
                className="block text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                About
              </a>
            </li>
            <li className="group">
              <a
                href="#skills"
                onClick={() => setSectionKey("skills")}
                className="block text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                Skills
              </a>
            </li>
            <li className="group">
              <a
                href="#projects"
                onClick={() => setSectionKey("projects")}
                className="block text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
              >
                Projects
              </a>
            </li>
            <li className="group">
              <a
                href="#contact"
                onClick={() => setSectionKey("contact")}
                className="block text-lg text-white hover:text-indigo-400 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:text-indigo-500"
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
