import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../providers/ThemeProvider";
import { X, Send, MessageCircle, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Mihir's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return "Mihir is skilled in Java, JavaScript, ReactJS, HTML/CSS, Tailwind CSS, Three.js, AWS, Docker, MongoDB, Node.js, and more. He's always learning new technologies!";
    }

    if (message.includes("project")) {
      return "Mihir has worked on several exciting projects including a Real-Time Chat App with Socket.io, a YouTube Caption Translator Chrome Extension, a 3D Personal Expense Tracker, GenzFashion Store, Skillory Education App, and a classic Snake Game. You can check them out in the Projects section!";
    }

    if (message.includes("experience") || message.includes("work")) {
      return "Mihir is currently a Software Developer Intern at Designing Alley and previously worked as a Project Management Intern at Movidu Pvt Ltd. He's also pursuing B.Tech in Electronics & Communication at VIT Vellore.";
    }

    if (message.includes("education") || message.includes("study")) {
      return "Mihir is pursuing B.Tech in Electronics & Communication Engineering from VIT Vellore (2021-2025) with a GPA of 8.1. He's also certified in Google Cloud Computing and MERN Stack development.";
    }

    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("email")
    ) {
      return "You can reach Mihir at mihir123sen@gmail.com, call him at +91 8809909496, or connect on LinkedIn. Feel free to use the contact form below to send him a message!";
    }

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! I'm here to help you learn more about Mihir Sen. Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
    }

    if (message.includes("github")) {
      return "You can find all of Mihir's projects on his GitHub profile: https://github.com/mihirsen. He has several interesting repositories showcasing his coding skills!";
    }

    return "That's an interesting question! I can help you with information about Mihir's skills, projects, work experience, education, or contact details. What specifically would you like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={`fixed bottom-4 right-4 w-80 h-96 rounded-lg shadow-xl border z-50 ${
            isDark
              ? "bg-slate-800 border-slate-600"
              : "bg-white border-slate-200"
          }`}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 border-b ${
              isDark ? "border-slate-600" : "border-slate-200"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Bot
                className={`w-5 h-5 ${
                  isDark ? "text-cyan-400" : "text-indigo-600"
                }`}
              />
              <h3
                className={`font-semibold ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              >
                AI Assistant
              </h3>
            </div>
            <button
              onClick={onClose}
              className={`p-1 rounded-full hover:bg-opacity-20 ${
                isDark
                  ? "hover:bg-white text-slate-400"
                  : "hover:bg-black text-slate-600"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isUser ? "flex-row-reverse space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      message.isUser
                        ? isDark
                          ? "bg-cyan-400"
                          : "bg-indigo-600"
                        : isDark
                        ? "bg-slate-600"
                        : "bg-slate-300"
                    }`}
                  >
                    {message.isUser ? (
                      <User className="w-3 h-3 text-white" />
                    ) : (
                      <Bot
                        className={`w-3 h-3 ${
                          isDark ? "text-white" : "text-slate-600"
                        }`}
                      />
                    )}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? isDark
                          ? "bg-cyan-600 text-white"
                          : "bg-indigo-600 text-white"
                        : isDark
                        ? "bg-slate-700 text-slate-200"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                    isDark ? "bg-slate-700" : "bg-slate-100"
                  }`}
                >
                  <Bot
                    className={`w-3 h-3 ${
                      isDark ? "text-white" : "text-slate-600"
                    }`}
                  />
                  <div className="flex space-x-1">
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        isDark ? "bg-slate-400" : "bg-slate-500"
                      }`}
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        isDark ? "bg-slate-400" : "bg-slate-500"
                      }`}
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        isDark ? "bg-slate-400" : "bg-slate-500"
                      }`}
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className={`p-4 border-t ${
              isDark ? "border-slate-600" : "border-slate-200"
            }`}
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Mihir..."
                className={`flex-1 px-3 py-2 text-sm rounded-lg border focus:outline-none focus:ring-2 ${
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white focus:ring-cyan-400 placeholder-slate-400"
                    : "bg-white border-slate-300 text-slate-900 focus:ring-indigo-500 placeholder-slate-500"
                }`}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className={`px-3 py-2 rounded-lg transition-colors disabled:opacity-50 ${
                  isDark
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
