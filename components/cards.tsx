'use client'

import { motion } from "framer-motion";
import { Code, DatabaseZap, SquarePercent } from "lucide-react";

const features = [
  {
    title: 'AFFORDABLE RATES',
    desc: 'Launch your MVP, platform or tool within budget and schedule',
    icon: <Code className="w-7 h-7 text-white" />,
    highlight: 'Automation',
  },
  {
    title: 'BUILD WITHIN BUDGET',
    desc: 'Monitor and analyze production metrics in real-time for informed decision-making.',
    icon: <DatabaseZap className="w-7 h-7 text-white" />,
    highlight: 'Analytics',
  },
  {
    title: 'Performance Tracking',
    desc: 'Track and optimize manufacturing efficiency with advanced monitoring tools.',
    icon: <SquarePercent className="w-7 h-7 text-white" />,
    highlight: 'Tracking',
  },
];

const DesignSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-20%,#3b0764,transparent)]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Design, Development, and Automation
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Future-proof your manufacturing business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-gray-900/40 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                    <span className="text-purple-400 ml-2 text-sm">
                      {feature.highlight}
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default DesignSection;