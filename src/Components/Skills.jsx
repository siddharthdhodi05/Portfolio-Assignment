import { CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"]
  },
  {
    category: "Frameworks/Libraries",
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "RESTful APIs", "Socket.IO", "JWT Authentication"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 text-white rounded-lg shadow-md p-8 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-teal-500"
            >
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 text-center">{category.category}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-lg text-gray-300">
                    <CheckCircle className="text-teal-400 mr-3 h-6 w-6" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
