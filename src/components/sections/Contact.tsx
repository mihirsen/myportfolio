import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { toast } from "sonner";
import { AIChatbot } from "../chat/AIChatbot";
import { MessageCircle, Download } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with your public key
emailjs.init("O9lptn28xTC1ipyUS");

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        "service_5sazkga",
        "template_5x5c9lm",
        formRef.current,
        "O9lptn28xTC1ipyUS"
      );

      if (result.status === 200) {
        toast.success(
          "Message sent successfully! Mihir will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(
        "Failed to send message. Please try emailing directly at mihir123sen@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "mihir123sen@gmail.com",
      link: "mailto:mihir123sen@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 8809909496",
      link: "tel:+918809909496",
    },
    {
      icon: "🌐",
      label: "Portfolio",
      value: "mihirsen.vercel.app",
      link: "https://mihirsen.vercel.app/",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/mihir-sen",
      link: "https://www.linkedin.com/in/mihir-sen/",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/mihirsen",
      link: "https://github.com/mihirsen",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? "bg-slate-800/50" : "bg-slate-100/50"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                      : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                      : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none resize-none ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                      : "bg-white border-slate-300 text-slate-900 focus:border-indigo-500"
                  }`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDark ? "text-cyan-400" : "text-indigo-600"
                }`}
              >
                Let's Connect
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                I'm always excited to work on new projects and collaborate with
                amazing people. Whether you have a specific project in mind or
                just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <h4
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                Contact Information
              </h4>
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    isDark
                      ? "bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400"
                      : "bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 shadow-sm hover:shadow-md"
                  }`}
                >
                  <span className="text-xl">{contact.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1MBUBmoihtn62ty8iGvpiDD-uhO6Ujgbw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + contactInfo.length * 0.1,
                }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-cyan-400"
                    : "bg-white hover:bg-slate-50 text-slate-700 hover:text-indigo-600 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="text-xl">📄</span>
                <div>
                  <p className="text-sm font-medium">Resume</p>
                  <p className="text-sm">Download my resume</p>
                </div>
                <Download size={16} className="ml-auto" />
              </motion.a>
            </div>

            {/* AI Chatbot Trigger */}
            <div
              className={`p-6 rounded-lg border ${
                isDark
                  ? "bg-slate-700/50 border-slate-600"
                  : "bg-white border-slate-200 shadow-lg"
              }`}
            >
              <h4
                className={`text-xl font-semibold mb-3 ${
                  isDark ? "text-cyan-400" : "text-indigo-600"
                }`}
              >
                AI Assistant
              </h4>
              <p
                className={`mb-4 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Have questions? Chat with my AI assistant!
              </p>
              <motion.button
                onClick={() => setIsChatOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    : "border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Chat</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Chatbot Component */}
      <AIChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <motion.button
          onClick={() => setIsChatOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 ${
            isDark
              ? "bg-gradient-to-r from-cyan-500 to-purple-500"
              : "bg-gradient-to-r from-indigo-500 to-purple-500"
          }`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </section>
  );
};
