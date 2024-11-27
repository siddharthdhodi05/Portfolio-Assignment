import { Github, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Job Portal Application',
    description: 'MERN Full-Stack Application',
    date: 'Oct 2024 - Nov 2024',
    details: [
      'Built a MERN-based job portal with distinct student and recruiter roles, ensuring role-specific functionalities.',
      'Established a secure and scalable backend featuring JWT authentication, middleware, and robust database models; thoroughly tested APIs using Postman.',
      'Implemented features such as job search, application submissions, company creation, and user profile management.',
      'Optimized the application for scalability and security, incorporating role-based permissions and efficient data handling.'
    ],
    codeLink: 'https://github.com/siddharthdhodi05/Job-Portal',
    liveLink: 'https://jobportal-production.onrender.com/'
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description: 'MERN Full-Stack Application',
    date: 'Oct 2024 - Nov 2024',
    details: [
      'Developed a full-stack, real-time chat application on the MERN stack, ensuring robust frontend-backend integration.',
      'Secured user interactions with JWT authentication, reinforcing session security and data integrity.',
      'Enabled seamless, low-latency communication using Socket.IO for dynamic, real-time messaging.',
      'Enhanced user experience with a visually appealing UI built using Tailwind CSS, DaisyUI, and efficient state management with Redux Toolkit.'
    ],
    codeLink: 'https://github.com/siddharthdhodi05/Chat-Application'
  },
  {
    id: 3,
    title: 'Email Application',
    description: 'React-Firebase Application',
    date: 'Oct 2024 - Oct 2024',
    details: [
      'Designed and implemented a dynamic email application using React and Firebase, integrating key frontend and database functionalities.',
      'Implemented 5+ core features like email composition, inbox management, individual email view, and deletion.',
      'Integrated a responsive search function for efficient inbox navigation and email retrieval.',
      'Directed application state management using Redux Toolkit and enhanced UI/UX using Tailwind CSS.'
    ],
    codeLink: 'https://github.com/siddharthdhodi05/Email-Application',
    liveLink: 'https://email-application-five.vercel.app/'
  },
  {
    id: 4,
    title: '2D Game Framework',
    description: 'JavaScript Game Development',
    date: 'Nov 2024 - Nov 2024',
    details: [
      'Developed a 2D game framework using HTML5 Canvas and JavaScript, enabling the creation of dynamic game worlds.',
      'Built core components such as game objects, a hierarchical scene graph, a camera system, and a game loop for smooth gameplay.',
      'Implemented key features like grid-based object placement, sprite rendering, and inventory management.',
      'Designed modular classes for extensibility, including `GameObject`, `Sprite`, `Input`, and `Camera`, ensuring reusability.',
      'Optimized rendering pipeline with camera offset logic and delta-time updates for consistent performance.',
    ],
    codeLink: 'https://2-d-rpg-metaverse.vercel.app/',
    liveLink: 'https://github.com/siddharthdhodi05/2D-RPG-Metaverse'
  },
  {
  id: 5,
  title: "Weather Application",
  description: "React-based Weather Web Application using OpenWeather API",
  date: "Nov 2024 - Nov 2024",
  details: [
    "Built a weather web application using React, leveraging the OpenWeather API to provide real-time weather updates.",
    "Implemented a dynamic search feature allowing users to search for weather data of different cities.",
    "Displayed real-time weather details including temperature, humidity, and wind speed for any given location.",
    "Designed a clean, user-friendly interface ensuring easy navigation and quick access to weather information.",
    "Deployed the application on Vercel for seamless access and fast performance."
  ],
  codeLink: "https://github.com/siddharthdhodi05/Weather-Application",
  liveLink: "https://weather-application-liart-three.vercel.app/"
}

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500"
            >
              {/* Project Details */}
              <div className="p-6 flex-grow bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="text-gray-300">{detail}</li>
                  ))}
                </ul>
              </div>
              {/* Links Section */}
              <div className="bg-gray-800 px-6 py-4 flex justify-between items-center rounded-b-lg">
                <a href={project.codeLink} passHref>
                  <a className="flex items-center text-blue-400 hover:text-blue-500">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} passHref>
                    <a className="flex items-center text-green-400 hover:text-green-500">
                      <Globe className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
