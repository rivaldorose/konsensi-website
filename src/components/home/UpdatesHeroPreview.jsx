import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

export default function UpdatesHeroPreview() {
  const { data: updates = [] } = useQuery({
    queryKey: ["updates-preview"],
    queryFn: () => base44.entities.Update.filter({ is_gepubliceerd: true }, "-publicatie_datum", 3)
  });

  return (
    <section className="bg-[#265e3e] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Bell className="w-4 h-4" />
            Updates & Nieuws
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Wat is er <span className="text-[#b3fe78]">nieuw</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Bekijk de nieuwste functies, verbeteringen en aankondigingen van Konsensi Budgetbeheer.
          </p>
        </div>

        {/* Preview van recente updates */}
        {updates.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            {updates.map((update) => (
              <div key={update.id} className="bg-white/10 backdrop-blur rounded-xl p-5 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#b3fe78]" />
                  <span className="text-[#b3fe78] text-xs font-semibold">
                    {update.categorie === "nieuwe_functie" ? "Nieuw" : 
                     update.categorie === "verbetering" ? "Verbeterd" : 
                     update.categorie === "bugfix" ? "Opgelost" : "Update"}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-1 line-clamp-1">{update.titel}</h3>
                <p className="text-white/70 text-sm line-clamp-2">{update.beschrijving}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Link to={createPageUrl("Updates")}>
            <Button
              size="lg"
              className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8 py-6 text-lg gap-2"
            >
              Bekijk alle updates
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}