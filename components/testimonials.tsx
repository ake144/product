'use client'


import { technologies } from "@/lib/data";
import { motion } from "framer-motion";






const TestimonialsSkill = ()=>{

  

  
    return(
        <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            Diverse <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Coding tools and technologies for businesses building our world.
          </p>
        </div>

        {/* Rotating Technology Banner */}
        <div className="relative overflow-hidden py-10 w-full">
   
      {/* Animated Scrolling Container */}
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: [0, -100 * technologies.length], // Move left continuously
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust for scrolling speed
            ease: "linear", // Linear motion for constant speed
          },
        }}
      >


        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 mx-9 px-5 min-w-[100px]"
          >
            {tech.icon}
            <span className="text-sm text-gray-400">{tech.name}</span>
          </div>
        ))}
      </motion.div>



        </div>
      </section>

    )
}



export default TestimonialsSkill