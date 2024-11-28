import React from "react";
import { motion } from "framer-motion";

const About = ({ sectionKey }) => {
  return (
    <>
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100">
            About Me
          </h2>

          {/* First Row: Larger Card with Description */}
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-8 font-mono text-sm relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* IDE Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-gray-400 text-xs">about.js</p>
            </div>

            {/* IDE Content */}
            <div className="text-gray-300 leading-relaxed">
              <p>
                <span className="text-purple-400">const</span> aboutMe = {"{"}
              </p>
              <p className="pl-6">
                <span className="text-green-400">name</span>:{" "}
                <span className="text-yellow-400">'Siddharth Dhodi'</span>,
              </p>
              <p className="pl-6">
                <span className="text-green-400">education</span>: {"{"}
              </p>
              <p className="pl-12">
                <span className="text-blue-400">degree</span>:{" "}
                <span className="text-yellow-400">
                  'BE in Computer Engineering'
                </span>
                ,
              </p>
              <p className="pl-12">
                <span className="text-blue-400">college</span>:{" "}
                <span className="text-yellow-400">
                  'Vidyavardhini’s College of Engineering and Technology'
                </span>
                ,
              </p>
              <p className="pl-12">
                <span className="text-blue-400">graduationYear</span>:{" "}
                <span className="text-yellow-400">2024</span>,
              </p>
              <p className="pl-6">{"},"}</p>
              <p className="pl-6">
                <span className="text-green-400">description</span>:{" "}
                <span className="text-yellow-400">
                  "I am a passionate Full Stack Developer with expertise in the
                  MERN stack, focusing on creating scalable, user-friendly
                  applications. My technical experience includes React, Node.js,
                  MongoDB, and Tailwind CSS. I thrive on solving real-world
                  problems through technology."
                </span>
                ,
              </p>
              <p>{"};"}</p>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Smaller Card: Skills and Passion */}
            <motion.div
              className="w-full md:w-1/2 bg-gray-800 rounded-lg shadow-xl p-6 font-mono text-sm relative transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* IDE Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-gray-400 text-xs">achievements.js</p>
              </div>

              {/* IDE Content */}
              <div className="text-gray-300 leading-relaxed">
                <p>
                  <span className="text-purple-400">const</span> achievements ={" "}
                  {"{"}
                </p>
                <p className="pl-6">
                  <span className="text-green-400">notable</span>: [
                  <span className="text-blue-400">
                    'Completed 10+ Projects'
                  </span>
                  ,{" "}
                  <span className="text-blue-400">
                    'Contributed to Open Source'
                  </span>
                  ,{" "}
                  <span className="text-blue-400">
                    'Winner of College Hackathon'
                  </span>
                  ],
                </p>
                <p className="pl-6">
                  <span className="text-green-400">experience</span>: [{"{"}
                  <br />
                  <span className="text-blue-400">company</span>:{" "}
                  <span className="text-yellow-400">'Prodigy InfoTech'</span>,{" "}
                  <br />
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-yellow-400">'Data Science Intern'</span>
                  , <br />
                  <span className="text-blue-400">duration</span>:{" "}
                  <span className="text-yellow-400">'June - July 2023'</span>,
                  <br /> <span className="text-blue-400">description</span>:{" "}
                  <span className="text-yellow-400">
                    "Worked on industrial datasets to build ML models and
                    generate actionable insights."
                  </span>{" "}
                  {"}"},
                  <br />
                  {"{"}
                  <br />
                  <span className="text-blue-400">company</span>:{" "}
                  <span className="text-yellow-400">'Student Council'</span>,{" "}
                  <br />
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-yellow-400">
                    'Deputy Cultural Head'
                  </span>
                  , <br />
                  <span className="text-blue-400">duration</span>:{" "}
                  <span className="text-yellow-400">'2022 - 2023'</span>, <br />
                  <span className="text-blue-400">description</span>:{" "}
                  <span className="text-yellow-400">
                    "Led a team of 50+ to organize events including Zeal, a
                    large-scale cultural event attended by thousands."
                  </span>{" "}
                  {"}"}<br/>
                  ],
                </p>
                <p>{"};"}</p>
              </div>
            </motion.div>

            {/* Second GIF */}
            <motion.div
              key={sectionKey}
              className="w-full md:w-1/2 flex justify-center py-14 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-4/5 relative z-10">
                <video
                  src="/v1.mp4" // Ensure this file is in the public folder
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg shadow-2xl border border-gray-700"
                ></video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
