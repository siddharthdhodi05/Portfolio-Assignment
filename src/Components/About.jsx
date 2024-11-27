import React from 'react';
import { motion } from 'framer-motion';

const About = ({ sectionKey }) => {
  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-100">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">

            {/* First GIF without Intersecting Circles Behind it */}
            <motion.div
              key={sectionKey}
              className="w-full md:w-1/2 flex justify-center py-14 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-4/5 relative z-10">
                <video
                  src="/code.mp4" // Ensure this file is in the public folder
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg shadow-xl"
                ></video>
              </div>
            </motion.div>

            {/* First Paragraph */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-2xl text-gray-100 mb-6 leading-relaxed">
                I am a passionate Full Stack Developer with a strong foundation in computer engineering. As a soon-to-be graduate from Vidyavardhini’s College of Engineering and Technology, I’ve combined my technical expertise with hands-on experience to create impactful solutions.
              </p>
              <p className="text-2xl text-gray-100 mb-6 leading-relaxed">
                My technical skills span across multiple areas, including the MERN stack, with hands-on experience in React, Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS. I’m passionate about creating user-friendly applications with robust backend systems and scalable code. I love writing clean and maintainable code to solve real-world problems and enhance user experiences.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Second Paragraph */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-2xl text-gray-100 mb-6 leading-relaxed">
                Beyond my technical work, I’ve demonstrated leadership as the Deputy Cultural Head of my college, where I led and organized events attended by thousands of participants. I believe in lifelong learning, continuously enhancing my skills through certifications, projects, and hackathons.
              </p>
              <p className="text-2xl text-gray-100 mb-6 leading-relaxed">
                I’m driven by the belief that technology has the power to change the world, and I’m always excited to take on new challenges that help me grow both personally and professionally.
              </p>
            </motion.div>

            {/* Second GIF without Intersecting Circles Behind it */}
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
                  className="w-full rounded-lg shadow-xl"
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
