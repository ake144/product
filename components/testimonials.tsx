'use client'

import { technologies } from "@/lib/data";
import { motion } from "framer-motion";

const TestimonialsSkill = () => {
  return (
    <section  id="testimonials" className="relative py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_center_90%,rgba(59,7,100,0.7),transparent)]" />

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-20 px-4"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Technologies We Master
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Diverse <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge tools and technologies powering the future of manufacturing
          </p>
        </motion.div>

        {/* Technologies Showcase */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="overflow-hidden py-10">
            <motion.div
              className="flex gap-12 items-center"
         
              animate={{
                x: [0, -(technologies.length * 140)], // Assuming each item has a minimum width of 140px
              }}
              
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-4 px-6 min-w-[140px] group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full group-hover:bg-purple-600/30 transition-all duration-300" />
                    <div className="relative transform group-hover:scale-110 transition-all duration-300">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Visual Elements */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-1/2 h-40 bg-purple-600/20 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

export default TestimonialsSkill;