import { BadgeDollarSign, Component, Workflow } from "lucide-react";


const upgrade = [
    {
      title: 'AFFORDABLE PRODUCT DEVELOPMENT',
      desc: 'Launch your MVP, platform or tool within budget and schedule',
      icon:
      (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
          <BadgeDollarSign size={40} />
        </div>
      )
     ,
    },
    {
      title: 'HIGH-END DESIGN',
      desc: 'Upgrade your online presence with high-converting website and front-end design',
      icon:  (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
          <Component size={36} />
        </div>
      ),
    },
    {
      title: 'MODERN AUTOMATION',
      desc: 'Automate your business 10X faster using the latest low-code systems and internal tools',
      icon:  (
        <div className="bg-gradient-to-br from-purple-700 to-red-500 w-14 h-14 rounded-full flex items-center justify-center">
         <Workflow size={36} />
        </div>
      ),
    },
  ]

  
const UpgradeSection=()=>{
    return(
        <section className="py-24 px-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-white text-center mb-16 tracking-wide">
            Upgrading Your Industry
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {upgrade.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-950 via-gray-900 to-black backdrop-blur-md rounded-lg h-[500px] group hover:scale-105 transition-transform duration-300 shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <h3 className="text-3xl font-semibold text-white mb-6">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                    <div className="w-20 h-16 bg-gradient-to-br from-purple-700 to-red-500 rounded-full flex items-center justify-center text-white text-2xl">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    )

}


export default UpgradeSection;