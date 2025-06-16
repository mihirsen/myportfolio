
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../providers/ThemeProvider';

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const experiences = [
    {
      company: 'Designing Alley',
      role: 'Software Developer Intern',
      duration: 'Dec 2024 - Present',
      location: 'Remote',
      achievements: [
        'Implemented bug fixes and feature updates for web applications',
        'Participated in project planning and design discussions',
        'Collaborated with development team on various software solutions',
      ],
    },
    {
      company: 'Movidu Pvt Ltd',
      role: 'Project Management Intern',
      duration: 'Jun 2023 - Oct 2023',
      location: 'Bangalore',
      achievements: [
        'Coordinated multiple project timelines and deliverables',
        'Prepared detailed project reports and documentation',
        'Implemented process improvements for better team efficiency',
      ],
    },
  ];

  const education = {
    degree: 'B.Tech in Electronics & Communication',
    institution: 'VIT Vellore',
    duration: '2021 - 2025',
    gpa: '8.1',
  };

  const certifications = [
    {
      name: 'Google Cloud Computing Foundation Program',
      date: 'Dec 2023',
    },
    {
      name: 'MERN Stack Certification',
      date: 'Sep 2023',
    },
  ];

  return (
    <section id="experience" className="py-20">
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
            Experience & Education
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className={`text-2xl font-semibold mb-8 ${
            isDark ? 'text-cyan-400' : 'text-indigo-600'
          }`}>Work Experience</h3>
          <div className="relative">
            <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full ${
              isDark 
                ? 'bg-gradient-to-b from-cyan-400 to-purple-400'
                : 'bg-gradient-to-b from-indigo-500 to-purple-500'
            }`}></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                  isDark 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                }`}></div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-lg border transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400/50'
                        : 'bg-white border-slate-200 hover:border-indigo-400/50 shadow-lg'
                    }`}
                  >
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-cyan-400' : 'text-indigo-600'
                    }`}>{exp.role}</h3>
                    <h4 className={`text-lg mb-2 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>{exp.company}</h4>
                    <p className={`text-sm mb-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>{exp.duration} • {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className={`text-sm flex items-start ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          <span className={`mr-2 ${
                            isDark ? 'text-cyan-400' : 'text-indigo-500'
                          }`}>•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Education</h3>
            <div className={`p-6 rounded-lg border ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700'
                : 'bg-white border-slate-200 shadow-lg'
            }`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>{education.degree}</h4>
              <p className={`mb-2 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>{education.institution}</p>
              <p className={`text-sm mb-2 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>{education.duration}</p>
              <p className={`text-sm font-semibold ${
                isDark ? 'text-cyan-400' : 'text-indigo-600'
              }`}>GPA: {education.gpa}</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              isDark ? 'text-cyan-400' : 'text-indigo-600'
            }`}>Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700'
                    : 'bg-white border-slate-200 shadow-lg'
                }`}>
                  <h4 className={`font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>{cert.name}</h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>{cert.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
