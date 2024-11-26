'use client';

import { Step } from "@/lib/animatedStep";
import { steps } from "@/lib/data";
import { RocketIllustrator } from "@/components/icons";



export function ProcessSteps() {
  return (
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="space-y-16 relative">
        {/* Animated gradient line */}
      
        
        {steps.map((step, index) => (
          <Step
            key={step.number}
            {...step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
      <div className="relative h-[500px] hidden md:block">
            <div>
              <RocketIllustrator className="w-[550px] h-[550px]" />
            </div>
          </div>

    </div>
  );
}