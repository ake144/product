"use client";

import HowWorks from "./how-works/page";
import ContactForm from "./contact-form";
import TestimonialsSkill from "./testimonials";
import UpgradeSection from "./upgrade";
import DesignSection from "./cards";
import HeroSection from "./hero-section";
import NavBar from "./navbar";
import FAQ from "./faq";
import Footer from "./footer";

export function LandingPage() {
  return (
    <div className="min-h-screen font-geist-sans bg-black ">
      <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,200,0.15),rgba(0,0,0,0.8))]" />
        <NavBar />
        <main className="relative">
          <HeroSection />
          <DesignSection />
          <UpgradeSection />
          <section className="py-24 px-4 bg-black/80 backdrop-blur-sm">
            <HowWorks />
          </section>

          <section className="pt-24 px-4 bg-black/80 backdrop-blur-sm">
            <div className="min-h-screen bg-black text-white">
              <TestimonialsSkill />
            </div>
          </section>

          {/* FAQ Section */}
          <FAQ />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
