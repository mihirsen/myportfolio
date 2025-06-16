
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../providers/ThemeProvider';

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'Real-Time Chat App',
      description: 'Modern real-time chat application with Socket.io, supporting authenticated users, persistent messaging, and smooth UI transitions designed for scalability.',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'Express', 'Socket.io', 'JWT'],
      github: 'https://github.com/mihirsen/chat-app',
    },
    {
      title: 'YouTube Caption Translator Extension',
      description: 'Chrome extension that translates YouTube subtitles on the fly using Google Translate API, improving accessibility for multilingual users.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['JavaScript', 'Chrome Extensions API', 'Google Translate API'],
      github: 'https://github.com/mihirsen/youtube-caption-translator',
    },
    {
      title: 'Personal Expense Tracker (3D Portfolio)',
      description: 'Sleek 3D web application to track expenses with stunning interactive UI using Three.js. Features expense listing, tracking, and animated responsive design.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      tech: ['React', 'Three.js', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/mihirsen/Personal-Expense-Tracker-App',
    },
    {
      title: 'GenzFashion Store (E-commerce UI)',
      description: 'Fashion-forward e-commerce frontend built for Gen Z users with dynamic product cards, category filters, and stylish responsive layout.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/mihirsen/genzfashion-store',
    },
    {
      title: 'Skillory – Online Education App',
      description: 'EdTech platform UI for course discovery and learning management. Built with modular React components and designed for scalability.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      tech: ['React', 'Redux', 'Tailwind CSS', 'Context API'],
      github: 'https://github.com/mihirsen/skillory-education-app',
    },
    {
      title: 'Snake Game (Classic Arcade)',
      description: 'Fun browser-based version of the classic Snake game developed using vanilla JavaScript with keyboard controls, score tracking, and retro styling.',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'Game Logic'],
      github: 'https://github.com/mihirsen/snake-game',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark 
              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A showcase of my recent work and open-source contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-lg overflow-hidden border transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400/50'
                  : 'bg-white border-slate-200 hover:border-indigo-400/50 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  isDark 
                    ? 'bg-gradient-to-t from-slate-900/80 to-transparent'
                    : 'bg-gradient-to-t from-black/20 to-transparent'
                }`}></div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>{project.title}</h3>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded ${
                        isDark 
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'bg-indigo-100 text-indigo-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-2 text-center rounded transition-all duration-300 ${
                    isDark 
                      ? 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      : 'border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
