import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-100/50"}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Animated Software Developer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center h-full"
          >
            <motion.h3
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 text-center"
            >
              Software Developer
            </motion.h3>
          </motion.div>

          {/* Right: About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Electronics and Communication Engineering graduate with strong
              software development skills in Java, JavaScript, HTML/CSS,
              ReactJS. Passionate about coding, problem-solving, and learning
              new technologies.
            </p>

            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Quick learner and team player with experience in modern web
              technologies and cloud platforms. Always eager to take on new
              challenges and contribute to innovative projects.
            </p>

            <div className="space-y-4">
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDark ? "text-cyan-400" : "text-indigo-600"
                }`}
              >
                Skills
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span
                      className={isDark ? "text-slate-300" : "text-slate-700"}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={isDark ? "text-cyan-400" : "text-indigo-600"}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 ${
                      isDark ? "bg-slate-700" : "bg-slate-300"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      className={`h-2 rounded-full ${
                        isDark
                          ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
