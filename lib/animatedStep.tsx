'use client';

import { motion } from 'framer-motion';

interface StepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export function Step({ number, title, description, index, isLast }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
      className="flex gap-8 group relative"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative"
        >
          {/* Outer ring with gradient */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
          
          {/* Number container */}
          <div className="relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors">
            <div className="text-lg text-white  font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
              {number}
            </div>
          </div>

          {/* Connecting dot for non-last items */}
          {!isLast && (
            <div className="absolute left-1/2 top-full h-16 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
          )}
        </motion.div>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 text-white  bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:translate-x-1 transition-transform">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}