import React from "react";
import { motion } from "framer-motion";

const Hero = ({ sectionKey }) => {
  return (
    <>
      <section
        className="relative text-white py-20 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.giphy.com/media/IAb717kg5jMkMhNofp/giphy.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Left Section with Text */}
          <motion.div
            key={sectionKey}
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Heading */}
            <motion.h1
              className="text-5xl font-extrabold mb-4 text-gray-100 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Siddharth Dhodi
            </motion.h1>

            {/* Animated Subheading */}
            <motion.p
              className="text-3xl font-semibold mb-4 text-gray-200"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            {/* Short Intro Paragraph */}
            <motion.p
              className="text-lg mb-8 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Passionate about technology, solving problems, and creating
              user-friendly applications. Always eager to learn and improve my
              skills, with a focus on full-stack development and building
              innovative solutions.
            </motion.p>

            {/* Animated Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1rLyto4vPNFTTMrBlMQyIY8BJq7dwGBfJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-4 px-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(0, 123, 255, 0.7)",
                transition: { duration: 0.3 },
              }}
            >
              Resume
            </motion.a>
          </motion.div>

          {/* Right Section with Profile Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/me.jpg" // Ensure the image is in the public folder
              alt="Profile"
              className="rounded-full object-cover w-80 h-80 md:w-96 md:h-96 mb-6 shadow-2xl border-4 border-teal-400 hover:scale-110 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
