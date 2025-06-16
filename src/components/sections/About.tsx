import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { isDark } = useTheme();

  const skills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "ReactJS", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 82 },
    { name: "Three.js", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 68 },
    { name: "MongoDB", level: 80 },
  ];

  const textColor = isDark ? "text-slate-200" : "text-slate-800";

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? "bg-slate-800/90" : "bg-slate-100"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div
          ref={ref}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* CARD 1: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-md p-8 flex items-center justify-center text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Software Developer
            </h1>
          </motion.div>

          {/* CARD 2: About Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`rounded-3xl shadow-md p-8 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 space-y-4 text-[1.05rem] leading-7 ${textColor}`}
          >
            <p>
              Electronics and Communication Engineering graduate with strong
              software development skills in Java, JavaScript, HTML/CSS,
              ReactJS. Passionate about coding, problem-solving, and learning
              new technologies.
            </p>
            <p>
              Quick learner and team player with experience in modern web
              technologies and cloud platforms. Always eager to take on new
              challenges and contribute to innovative projects.
            </p>
          </motion.div>

          {/* CARD 3: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`rounded-3xl shadow-md p-8 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 ${textColor}`}
          >
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
