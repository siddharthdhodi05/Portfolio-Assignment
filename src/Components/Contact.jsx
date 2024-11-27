import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect!</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Feel free to reach out through any of these platforms. I'm always open to new opportunities and conversations.
          </p>

          <div className="grid gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Icon className="h-5 w-5 text-gray-700 mr-4 dark:text-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{link.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{link.username}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
