
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../providers/ThemeProvider';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mihirsen', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mihir-sen/', icon: '💼' },
    { name: 'Portfolio', url: 'https://mihirsen-me.netlify.app/', icon: '🌐' },
  ];

  return (
    <footer className={`py-12 ${isDark ? 'bg-slate-900' : 'bg-slate-800'}`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-cyan-400' : 'text-indigo-400'
            }`}>Mihir Sen</h3>
            <p className="text-slate-400 leading-relaxed">
              Software Engineer passionate about creating exceptional digital experiences
              with modern web technologies and solving real-world problems.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? 'text-slate-400 hover:text-cyan-400'
                        : 'text-slate-400 hover:text-indigo-400'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800 hover:bg-cyan-400 hover:text-slate-900'
                      : 'bg-slate-700 hover:bg-indigo-400 hover:text-white'
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              <a 
                href="mailto:mihir123sen@gmail.com" 
                className={`transition-colors ${
                  isDark ? 'hover:text-cyan-400' : 'hover:text-indigo-400'
                }`}
              >
                mihir123sen@gmail.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Mihir Sen. All rights reserved. Built with React, Three.js & ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
