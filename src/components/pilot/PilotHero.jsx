import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function PilotHero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#265e3e] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png"
            alt="Konsensi Budgetbeheer"
            className="h-16 md:h-20 w-auto mx-auto mb-8"
          />
          
          <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 Pilot Programma 2025
          </span>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Doe mee aan de <span className="text-[#b3fe78]">Konsensi Pilot</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
            Samen bouwen we aan financiële rust voor iedereen. Word onderdeel van onze pilot en help ons om schuldhulp en budgetbeheer toegankelijker te maken in Nederland.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("aanmelden-gebruiker")}
              className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8 py-6 text-lg"
            >
              Aanmelden als gebruiker
            </Button>
            <Button
                size="lg"
                onClick={() => scrollToSection("aanmelden-partner")}
                className="bg-white text-[#265e3e] hover:bg-gray-100 font-semibold rounded-full px-8 py-6 text-lg"
              >
                Word partner
              </Button>
          </div>
          
          <button
            onClick={() => scrollToSection("wat-is-pilot")}
            className="animate-bounce inline-flex items-center gap-2 text-white hover:text-[#b3fe78] transition-colors"
          >
            <span>Ontdek meer</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}