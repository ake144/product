"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";
import ContactForm from "./contact-form";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative -mt-36 min-h-screen w-full bg-black flex items-center justify-center pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/15 via-purple-800/5 to-transparent opacity-70" />

        <div
          className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
          style={{ opacity: 0.5 }}
        />
        <div
          className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
          style={{ opacity: 0.5 }}
        />
      </div>
      <div className="flex flex-col w-full gap-10">
        <div className="relative mt-20 max-w-3xl mx-auto w-full">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and
              development process
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-purple-500/20 backdrop-blur-sm"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between bg-purple-900/10 text-white hover:bg-purple-900/20 transition-all duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-left">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-purple-900/5">
                        <p className="text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
