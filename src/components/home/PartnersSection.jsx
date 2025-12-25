import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Users } from "lucide-react";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#265e3e] mb-8 md:mb-12">
          Onze Partners
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#265e3e] rounded-2xl md:rounded-3xl p-8 md:p-12">
            <Users className="w-12 h-12 md:w-16 md:h-16 text-[#b3fe78] mx-auto mb-4 md:mb-6" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
              We zijn op zoek naar <span className="text-[#b3fe78]">partners</span>
            </h3>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Op dit moment zijn we bezig met het opbouwen van ons partnernetwerk. We zijn actief in gesprek met gemeenten, schuldhulporganisaties, budgetcoaches en financiële instellingen.
            </p>
            <Link to={createPageUrl("OnzePartners")}>
              <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white hover:scale-105 font-semibold rounded-full px-6 md:px-8 h-12 md:h-auto py-3 transition-all w-full sm:w-auto min-h-[48px]">
                Lees meer over partnerschap
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}