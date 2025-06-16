import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const Testimonials: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultImage = "https://randomuser.me/api/portraits/men/78.jpg";
  const testimonials = [
    {
      name: "Rohan Mehta",
      role: "Frontend Developer",
      company: "BrightPixel Solutions",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "Mihir is a dedicated developer who always delivers quality work on time. His problem-solving skills are impressive and he is a great team player.",
    },
    {
      name: "Ananya Iyer",
      role: "UI/UX Designer",
      company: "PixelNest Studios",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Working with Mihir was a wonderful experience. He transformed our ideas into a beautiful and functional product.",
    },
    {
      name: "Siddharth Rao",
      role: "Tech Lead",
      company: "CodeCrafters Hub",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      quote:
        "Mihir's technical expertise and attention to detail made a huge difference in our project's success. Highly recommended!",
    },
    {
      name: "Pooja Nair",
      role: "Software Engineer",
      company: "Innovatech Labs",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
      quote:
        "Mihir is reliable, creative, and always ready to help. I look forward to working with him again!",
    },
    {
      name: "Arjun Sethi",
      role: "Product Owner",
      company: "NextGen Apps",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      quote:
        "Mihir's professionalism and communication skills are top-notch. He exceeded our expectations at every stage.",
    },
    // Add a fallback testimonial with a default image if needed
  ].map((t) => ({ ...t, image: t.image || defaultImage }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-2">
            What clients say about working with me
          </p>
          <p className="text-green-400 text-base max-w-2xl mx-auto italic">
            All testimonials are from real clients and collaborators.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-slate-800/80 p-8 rounded-lg border border-slate-700 text-center max-w-2xl">
                  <div className="mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-cyan-400"
                    />
                    <blockquote className="text-lg text-slate-300 italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-cyan-400">
                      {testimonials[currentIndex].role},{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-cyan-400" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
