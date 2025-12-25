import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { Sparkles, TrendingUp, Bug, Megaphone } from "lucide-react";

export default function UpdateTimeline() {
  const { data: updates = [], isLoading } = useQuery({
    queryKey: ["updates"],
    queryFn: () => base44.entities.Update.filter({ is_gepubliceerd: true }, "-publicatie_datum")
  });

  const getCategorieIcon = (categorie) => {
    switch (categorie) {
      case "nieuwe_functie": return Sparkles;
      case "verbetering": return TrendingUp;
      case "bugfix": return Bug;
      case "aankondiging": return Megaphone;
      default: return Sparkles;
    }
  };

  const getCategorieLabel = (categorie) => {
    const labels = {
      nieuwe_functie: "Nieuwe functie",
      verbetering: "Verbetering",
      bugfix: "Bugfix",
      aankondiging: "Aankondiging"
    };
    return labels[categorie] || "Update";
  };

  const getCategorieColor = (categorie) => {
    switch (categorie) {
      case "nieuwe_functie": return "bg-[#b3fe78] text-[#265e3e]";
      case "verbetering": return "bg-blue-100 text-blue-800";
      case "bugfix": return "bg-orange-100 text-orange-800";
      case "aankondiging": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Updates laden...</p>
      </div>
    );
  }

  if (updates.length === 0) {
    return (
      <div className="text-center py-12">
        <Sparkles className="w-12 h-12 text-[#265e3e]/30 mx-auto mb-4" />
        <p className="text-gray-500">Nog geen updates gepubliceerd.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Verticale lijn */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#265e3e]/20"></div>

      <div className="space-y-8">
        {updates.map((update, index) => {
          const Icon = getCategorieIcon(update.categorie);
          return (
            <div key={update.id} className="relative pl-16 md:pl-20">
              {/* Icoon op de lijn */}
              <div className="absolute left-3 md:left-5 w-6 h-6 md:w-7 md:h-7 bg-[#265e3e] rounded-full flex items-center justify-center shadow-md">
                <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>

              {/* Update kaart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategorieColor(update.categorie)}`}>
                    {getCategorieLabel(update.categorie)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(update.publicatie_datum), "d MMMM yyyy", { locale: nl })}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#265e3e] mb-2">
                  {update.titel}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {update.beschrijving}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}