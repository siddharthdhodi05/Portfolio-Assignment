import React from 'react';
import { motion } from 'framer-motion';

const About = ({ sectionKey }) => {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Left Section with Local Video */}
            <motion.div
              key={sectionKey}
              className="w-full md:w-1/2 flex justify-center py-14"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-4/5">
                <video
                  src="/code.mp4" // Ensure this file is in the public folder
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg shadow-lg"
                ></video>
              </div>
            </motion.div>

            {/* Right Section with About Text */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Hello, I'm Siddharth Dhodi,</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A passionate Full Stack Developer with a strong foundation in computer engineering. As a soon-to-be graduate from Vidyavardhini’s College of Engineering and Technology, I’ve consistently combined my technical expertise with practical experience to create impactful solutions. With hands-on experience in developing applications like a MERN-based Job Portal, a Real-Time Chat Application, and a React-Firebase Email Application, I thrive on bringing ideas to life through elegant, user-centric designs and robust backend systems. My technical toolkit includes JavaScript (ES6+), Python, React, Node.js, Express.js, MongoDB, and Tailwind CSS, among others. I take pride in writing clean, maintainable code and implementing secure, scalable systems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond my technical work, I’ve demonstrated leadership as the Deputy Cultural Head of my college, where I spearheaded events attended by thousands of participants. I’m also a lifelong learner, continuously enhancing my skills.
                I believe in the power of technology to solve problems and am always excited to take on new challenges that help me grow personally and professionally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
