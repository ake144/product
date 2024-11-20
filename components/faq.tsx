'use client'


import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

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


const FAQ=()=>{

    const [openFaq, setOpenFaq] = useState<number | null>(null)
    
       
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
      }
    


    return(
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-16">FAQ</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between bg-gray-900/50 backdrop-blur-sm text-white hover:bg-gray-800/50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium">{item.question}</span>
                      {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 py-4 bg-gray-800/30 backdrop-blur-sm">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
    )

}


export default FAQ