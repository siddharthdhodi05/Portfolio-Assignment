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
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span className="text-gray-300">{skill}</span>
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
