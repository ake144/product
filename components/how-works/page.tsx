import { RocketIllustrator } from "../icons";
import { ProcessSteps } from "../processSteps";
export default function HowWorks() {
  return (
    <div className="relative bg-transparent text-white py-16 px-4">
      {/* Background Gradient */}
      <div
        className="absolute inset-x-0 -top-20 z-10 transform-gpu blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] bg-gradient-to-r from-[#a855f7cc] to-[#9b46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">How it Works</h2>
          <p className="text-xl text-gray-400">
            Bring your vision to life with qualified developers on agile
            roadmaps
          </p>
        </div>

        {/* Grid Layout */}
        
       <ProcessSteps />
      </div>
    </div>
  );
}
