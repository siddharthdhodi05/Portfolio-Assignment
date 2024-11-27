import React from "react";
import { motion } from "framer-motion";

const Hero = ({sectionKey}) => {
  return (
    <>
      <section
        className="relative text-white py-20 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.giphy.com/media/IAb717kg5jMkMhNofp/giphy.gif")',
        }}
      >
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Animated Image */}
          <motion.img
           key={sectionKey}
            src="/me.jpg"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-6 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Animated Heading */}
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Siddharth Dhodi
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Animated Button */}
          <motion.a
            href="https://drive.google.com/file/d/1VWBWPU-0HTWRE_tQ_T9KLLD42ZgYrLzD/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 py-2 px-4 rounded-full font-bold hover:bg-gray-200 transition duration-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#4C9BFE",
              color: "#fff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Resume
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;
