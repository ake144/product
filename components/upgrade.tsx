"use client";

import { benefits } from "@/lib/data";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";

const UpgradeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black">

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_center,#3b0764,transparent)] opacity-40" />

 
      <motion.div
        className="absolute top-10 left-1/4 w-24 h-24 bg-purple-700 rounded-full opacity-30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-16 h-16 bg-indigo-500 rounded-full opacity-40 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Upgrading Your Industry
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Your own world-class product team at a fraction of the cost.
          </motion.p>
        </motion.div>

      
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-[24rem] flex items-center justify-center"
            >
              <PinContainer title={benefit.title} href="#">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 px-4 py-1 rounded-bl-2xl rounded-tr-2xl">
                    <span className="text-purple-300 text-sm font-medium">
                      {benefit.stat}
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-20" />
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>

 
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
};

export default UpgradeSection;