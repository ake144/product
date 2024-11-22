'use client'


import { motion } from "framer-motion";
import { MovingButton } from "./ui/moving-border";
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";



const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };



  useEffect(() => {
    setIsVisible(true)

  }, [])


  return (
    <section className="relative h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#2c0548,transparent)] opacity-80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <MovingButton
            containerClassName="w-auto h-1/2 mb-6 max-w-[300px] mx-auto"
            borderRadius="1.75rem"
            className="text-purple-300 bg-gradient-to-r from-purple-400/10 to-purple-400/20 w-auto px-6 py-3 text-sm inline-flex items-center justify-center rounded-full backdrop-blur-sm border border-purple-400/10 hover:scale-105 transform transition-all"
          >
            ✨ Transforming Manufacturing
          </MovingButton>



          {/* Animated Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight"
            initial="hidden"
            animate="show"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            MODERNIZE YOUR
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              MANUFACTURING
            </span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial="hidden"
            animate="show"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Affordable Product Development for Manufacturing Companies. Future-proof your business with modern solutions.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full min-w-[200px] flex items-center justify-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              <span>Get Started Now</span>
              <ArrowRight className="ml-2 h-5 w-5 transform transition-all duration-300 ease-in-out group-hover:translate-x-2" />
            </Button>
          </div>

        </div>
      </div>
    </section>

  )

}

export default HeroSection