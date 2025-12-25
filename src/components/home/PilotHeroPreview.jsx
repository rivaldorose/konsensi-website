import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PilotHeroPreview() {
  return (
    <section className="bg-[#b3fe78] text-[#265e3e] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#265e3e] text-[#b3fe78] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4" />
            Pilot Programma 2025
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Doe mee aan de <span className="text-[#265e3e]">Konsensi Pilot</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#265e3e]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Samen bouwen we aan financiële rust voor iedereen. Word onderdeel van onze pilot en help ons om schuldhulp en budgetbeheer toegankelijker te maken.
          </p>
          
          <Link to={createPageUrl("Pilot")}>
            <Button
              size="lg"
              className="bg-[#265e3e] text-white hover:bg-[#1a4329] font-semibold rounded-full px-8 py-6 text-lg gap-2"
            >
              Bekijk de pilot
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}