import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-[#265e3e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Beheer je geld zonder zorgen
        </h2>
        <p className="text-slate-50 mb-6 md:mb-8 mx-auto text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed px-4">
          We helpen je grip te krijgen op je financiën, zonder stress. Met Konsensi krijg je volledig inzicht en behoud je de controle. Stap voor stap, cent voor cent, naar financiële rust
        </p>
        <Link to={createPageUrl("OverOns")}>
          <Button size="lg" className="bg-[#b3fe78] text-[#265e3e] hover:bg-white hover:scale-105 font-semibold text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-full transition-all w-full sm:w-auto min-h-[48px]">
            Meer over Konsensi
          </Button>
        </Link>
      </div>
    </section>
  );
}