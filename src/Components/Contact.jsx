import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/siddharthdhodi05',
    icon: Github,
    username: '@siddharthdhodi05'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/siddharth-dhodi-108790319/',
    icon: Linkedin,
    username: 'Siddharth Dhodi'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/DhodiSiddharth_',
    icon: Twitter,
    username: '@DhodiSiddharth_'
  },
  {
    name: 'Email',
    url: 'siddharth.dhodi.work@gmail.com',
    icon: Mail,
    username: 'siddharth.dhodi.work@gmail.com'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">Get In Touch</h2>

        <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-xl shadow-2xl hover:shadow-xl hover:shadow-blue-500 transition-all duration-300 ease-in-out">
          <h3 className="text-3xl font-semibold mb-6 text-white">Let's Connect!</h3>
          <p className="text-lg text-gray-300 mb-8">
            Feel free to reach out through any of these platforms. I'm always open to new opportunities and conversations.
          </p>

          <div className="grid gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out group"
                >
                  <Icon className="h-6 w-6 text-gray-300 group-hover:text-teal-400 transition-all duration-300 ease-in-out mr-4" />
                  <div className="flex flex-col">
                    <span className="text-lg font-medium text-white group-hover:text-teal-400">{link.name}</span>
                    <span className="text-sm text-gray-500">{link.username}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
