export default function HowWorks() {
    return (
      <div className="relative bg-black text-white py-16 px-4">
        {/* Background Gradient */}
        <div
          className="absolute inset-x-0 -top-20 z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] bg-gradient-to-r from-[#a855f7cc] to-[#9b46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
  
        {/* Content */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">How it Works</h2>
            <p className="text-xl text-gray-400">
              Bring your vision to life with qualified developers on agile roadmaps
            </p>
          </div>
  
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Steps Section */}
            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-white hidden sm:block" />
  
              {/* Step 1 */}
              <div className="flex gap-11 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Product Planning</h3>
                  <p className="text-gray-400">
                    Together we create your product roadmap, prioritizing the highest value tasks.
                  </p>
                </div>
              </div>
  
              {/* Step 2 */}
              <div className="flex gap-11 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Product Building</h3>
                  <p className="text-gray-400">
                    A few weeks of focus bring your vision to life, tested and optimized with data-driven insights.
                  </p>
                </div>
              </div>
  
              {/* Step 3 */}
              <div className="flex gap-11 ">
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Iterate, Launch, Repeat</h3>
                  <p className="text-gray-400">
                    Agile sprints cross the finish line, monitor performance, and iterate in real-time.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Gears Illustration */}
            <div className="relative h-[400px] hidden md:block">
              {/* Gear 1 */}
              <div className="absolute top-0 right-1/4 w-32 h-32 animate-spin-slow">
                <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 gear-teeth" />
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
  
              {/* Gear 2 */}
              <div className="absolute top-1/4 right-1/3 w-48 h-48 animate-spin-slow-reverse">
                <div className="w-full h-full bg-red-600 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 gear-teeth" />
                  <span className="text-3xl font-bold">2</span>
                </div>
              </div>
  
              {/* Gear 3 */}
              <div className="absolute bottom-0 right-1/4 w-40 h-40 animate-spin-slow">
                <div className="w-full h-full bg-pink-300/30 rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 gear-teeth" />
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
  
              {/* Connecting Dots */}
              <div className="absolute top-12 right-1/3 w-3 h-3 bg-white rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full" />
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
  
        {/* Styles */}
        <style jsx>{`
          .gear-teeth {
            background: repeating-conic-gradient(
              from 0deg,
              transparent 0deg 15deg,
              currentColor 15deg 30deg
            );
          }
  
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
  
          @keyframes spin-slow-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
  
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
  
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 20s linear infinite;
          }
        `}</style>
      </div>
    );
  }
  