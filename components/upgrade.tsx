'use client'

import { benefits } from "@/lib/data";
import { motion } from "framer-motion";


const UpgradeSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3b0764,transparent)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Upgrading Your Industry
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Your own world-class product team at a fraction of the cost
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 px-4 py-1 rounded-bl-2xl rounded-tr-3xl">
                  <span className="text-purple-300 text-sm font-medium">
                    {benefit.stat}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default UpgradeSection