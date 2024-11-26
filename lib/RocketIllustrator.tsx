'use client';

import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function RocketIllustrator({ className }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <motion.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <Rocket
          className="w-full h-full text-purple-600"
          strokeWidth={1}
        />
      </motion.div>
    </div>
  );
}