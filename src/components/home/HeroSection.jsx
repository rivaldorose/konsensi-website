import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const benefits = [
    "100% gratis, geen verborgen kosten, nooit",
    "Tools die je helpen om overzicht te krijgen",
    "Veilig, discreet en zonder oordeel",
    "Ondersteuning van mensen die snappen waar je doorheen gaat",
    "We werken samen met gemeenten en hulpverleners.",
    "200+ features om je te helpen, van overzicht tot actie"
  ];

  return (
    <section className="bg-[#265e3e] text-white py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Krijg Meer Overzicht Over Je <span className="text-[#b3fe77]">Geld</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Budgetteren, schulden beheren en werken aan financiële rust.
              We helpen je op weg, in je eigen tempo.
            </p>
            <div>
              <a href="https://app.konsensi-budgetbeheer.nl" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="bg-[#b3fe78] text-[#265e3e] hover:bg-white hover:scale-105 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all duration-300 w-full sm:w-auto min-h-[48px]">
                  Begin nu
                </Button>
              </a>
              <p className="text-white mt-4 text-sm md:text-base">
                💚 Altijd gratis. Geen verborgen kosten.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/6d72c95b3_loginIllustratie_2025-06-08.png"
              alt="Budget Overzicht Illustratie"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 md:mt-16 bg-[#b3fe78] rounded-2xl md:rounded-3xl p-6 md:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/cf58e8a2c_check1.png"
                  alt="Check"
                  className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1"
                />
                <p className="text-[#265e3e] font-medium text-sm md:text-base leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}