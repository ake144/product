import { Code, DatabaseZap, SquarePercent } from "lucide-react"

const about =[
    {
      title: 'AFFORDABLE PRODUCT DEVELOPMENT',
      desc: 'Launch your MVP, platform, or internal tool within budget and schedule.',
      icon: (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
          <SquarePercent size={36} />
        </div>
      ),
    },
    {
      title: 'DATA LABELING AND MACHINE LEARNING',
      desc: 'Annotation for high-performing AI models.',
      icon: (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
          <DatabaseZap size={36} />
        </div>
      ),
    },
    {
      title: 'NO-CODE INNOVATION',
      desc: 'From idea to product 10X faster using the latest low-code frameworks and platforms.',
      icon: (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
         <Code size={36} />
        </div>
      ),
    },
  ]




const DesignSection=()=>{
    return(
        <section className="relative py-28 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-4xl font-bold text-center text-white mb-16">
            Design, Development, and Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-purple-500/20 to-transparent rounded-3xl blur-3xl"></div>

            {/* Card Items */}
            {about.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-800/50 to-purple-700/20 border border-purple-700/30 rounded-xl p-8 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className="flex justify-center text-3xl mb-6">{item.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">{item.desc}</p>

                {/* Decorative Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default DesignSection