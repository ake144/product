'use client'


import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";



const HeroSection=()=>{
    const [isVisible, setIsVisible] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
      };



      useEffect(() => {
        setIsVisible(true)
        const handleScroll = () => {
          setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])
    
      
return(
    <section className="relative h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b0764,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400/10 to-purple-400/20 rounded-full px-4 py-1 mb-8 backdrop-blur-sm border border-purple-400/10">
            <span className="text-purple-300 text-sm">✨ Transforming Manufacturing</span>
            <span className="bg-purple-500 rounded-full px-2 py-0.5 text-xs text-white">BETA</span>
          </div>
          
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
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 min-w-[200px]">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>

)

}

export default HeroSection