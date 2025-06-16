
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ParticleField } from '../3d/ParticleField';
import { useTheme } from '../providers/ThemeProvider';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section 
      id="hero" 
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
      }`}
    >
      {/* Professional geometric background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[linear-gradient(45deg,transparent_24%,rgba(59,130,246,0.1)_25%,rgba(59,130,246,0.1)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_76%,transparent_77%,transparent)] bg-[length:20px_20px]'
            : 'bg-[linear-gradient(45deg,transparent_24%,rgba(99,102,241,0.1)_25%,rgba(99,102,241,0.1)_26%,transparent_27%,transparent_74%,rgba(99,102,241,0.1)_75%,rgba(99,102,241,0.1)_76%,transparent_77%,transparent)] bg-[length:20px_20px]'
        }`} />
      </div>

      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark
              ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
          }`}
        >
          Mihir Sen
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-2xl md:text-3xl mb-8 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Software Engineer / Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Enthusiastic coder and quick learner passionate about solving real-world problems
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
            }`}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
              isDark
                ? 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                : 'border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-cyan-400' : 'border-indigo-500'
          }`}
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-cyan-400' : 'bg-indigo-500'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
