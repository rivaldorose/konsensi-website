import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Building2, Landmark, Users, Briefcase } from "lucide-react";

export default function ActievePartners() {
  const { data: partners = [], isLoading } = useQuery({
    queryKey: ["pilotPartners"],
    queryFn: () => base44.entities.PilotPartner.filter({ is_actief: true }, "-datum_toegetreden")
  });

  const { data: gebruikers = [] } = useQuery({
    queryKey: ["pilotGebruikers"],
    queryFn: () => base44.entities.PilotRegistratieGebruiker.list()
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case "gemeente": return Landmark;
      case "incassobureau": return Briefcase;
      case "schuldhulporganisatie": return Users;
      default: return Building2;
    }
  };

  const getTypeLabel = (type) => {
    const labels = {
      gemeente: "Gemeente",
      incassobureau: "Incassobureau",
      schuldhulporganisatie: "Schuldhulporganisatie",
      budgetcoach: "Budgetcoach",
      financiele_instelling: "Financiële instelling",
      overig: "Partner"
    };
    return labels[type] || "Partner";
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F5F7F0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Partners laden...</p>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return null;
  }

  return (
    <section className="py-8 bg-[#265e3e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-12 md:gap-20 mb-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#b3fe78]">{partners.length}</p>
            <p className="text-white/80">Organisaties</p>
          </div>
          <div className="w-px bg-white/30"></div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#b3fe78]">25</p>
            <p className="text-white/80">Gebruikers</p>
          </div>
        </div>

{/* Partner carousel tijdelijk verborgen */}


      </div>
    </section>
  );
}