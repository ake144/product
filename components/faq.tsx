"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "Who is Product Frontiers for?",
    answer: "We at Product Frontiers are hyper-focused on optimizing affordability and fast development times for startups, SMBs and corporations seeking design, development, and automation to modernize their business. If you're searching for contract development, MVP launches, or enterprise level systems and automations at affordable rates, we can help."
  },
  {
    question: "How can I build a new tool or MVP with Product Frontiers?",
    answer: "If you're confident in your product-market fit and scope of work, reach out, and we can help you map your user experience, flow and structure, and codebase. Our team is here to help you design, build, and launch your vision."
  },
  {
    question: "How can I guarantee security?",
    answer: "All our developers are triple-vetted both emotionally and technically to ensure their seamless integration with your needs, curated from only the top 1% of talent in all our countries of operation and managed with secure internal software. Regarding no-code options, platforms like Bubble encrypt traffic over HTTPS and pass data through Cloudflare and AWS to ensure security for your product."
  },
  {
    question: "How does no-code compare to traditional coding?",
    answer: "No-code platforms like Make, Framer, and Bubble are designed to replace traditional programming languages. Products built through no-code can be built fast and cheap, without the need for back-end technologies like PHP or Django and front-end technologies like Javascript and HTML."
  },
  {
    question: "What is the best method to develop with us?",
    answer: "Your development needs will vary based on your desired user experience, industry, and scope of work. If you've put in your research, we can help you bring your vision to life through affordable software development, website design, and internal automations at unbeatable rates."
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent opacity-80" />
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-3xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services and development process
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
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}