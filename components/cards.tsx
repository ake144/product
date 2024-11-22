"use client"

import { features } from "@/lib/data";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function DesignSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-20%,#3b0764,transparent)]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design, Development, and Automation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Future-proof your manufacturing business with cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="relative group h-full min-h-[300px] bg-gradient-to-r from-purple-800/20 to-indigo-800/20 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-indigo-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardItem
                    translateZ="100"
                    className="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    {feature.icon}
                  </CardItem>
                  <CardItem
                    as="h3"
                    translateZ="50"
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {feature.title}
                  </CardItem>
                  <CardItem
                    as="span"
                    translateZ="60"
                    className="text-purple-400 text-sm font-semibold mb-4 block"
                  >
                    {feature.highlight}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="70"
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {feature.desc}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}