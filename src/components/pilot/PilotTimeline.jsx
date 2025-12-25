import React from "react";
import { Calendar, Users, Rocket, CheckCircle } from "lucide-react";

export default function PilotTimeline() {
  const phases = [
    {
      icon: Rocket,
      phase: "Fase 1",
      title: "Maak een Account & Start Direct",
      period: "December 2024 - Januari 2025",
      description: "Geen aanmelding of selectieproces - maak je account aan en begin meteen. Onboarding én gebruik lopen door elkaar: je leert de app kennen terwijl je budgetteert. Direct inzicht in je financiën vanaf elke browser.",
      status: "actief"
    },
    {
      icon: Users,
      phase: "Fase 2",
      title: "Actief Gebruik & Groei",
      period: "Januari - Februari 2025",
      description: "Dagelijks budgetbeheer met je eigen dashboard. Je ziet real-time waar je geld naartoe gaat en houdt je uitgaven bij per categorie. Gebruik de features die bij jou passen - van basisbudget tot volledige financiële planning.",
      status: "upcoming"
    },
    {
      icon: Calendar,
      phase: "Fase 3",
      title: "Jouw Input Telt",
      period: "Februari 2025",
      description: "We vragen om je ervaring via korte feedback sessies (10-15 min). Wat werkt? Wat kan beter? Jouw mening bepaalt hoe Konsensi doorontwikkelt. Dit is jouw kans om mee te bouwen aan de toekomst.",
      status: "upcoming"
    },
    {
      icon: CheckCircle,
      phase: "Fase 4",
      title: "Van Pilot naar Impact",
      period: "Maart 2025",
      description: "We evalueren de resultaten en bereiden de volgende fase voor. De beste features blijven, nieuwe worden toegevoegd. Deelnemers krijgen als eerste toegang tot nieuwe functionaliteit en kunnen ambassadeur worden.",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-20 bg-[#265e3e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hoe verloopt de pilot?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Van aanmelding tot evaluatie - dit is wat je kunt verwachten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${
                phase.status === "actief"
                  ? "bg-[#b3fe78] text-[#265e3e]"
                  : "bg-white/10 text-white"
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                phase.status === "actief"
                  ? "bg-[#265e3e]"
                  : "bg-white/20"
              }`}>
                <phase.icon className={`w-6 h-6 ${
                  phase.status === "actief" ? "text-[#b3fe78]" : "text-white"
                }`} />
              </div>
              
              <span className={`text-sm font-semibold ${
                phase.status === "actief" ? "text-[#265e3e]" : "text-[#b3fe78]"
              }`}>
                {phase.phase}
              </span>
              
              <h3 className="text-lg font-bold mt-1 mb-2">{phase.title}</h3>
              <p className={`text-sm mb-3 ${
                phase.status === "actief" ? "text-[#265e3e]/80" : "text-white/80"
              }`}>
                {phase.period}
              </p>
              <p className={`text-sm ${
                phase.status === "actief" ? "text-[#265e3e]/90" : "text-white/90"
              }`}>
                {phase.description}
              </p>
              
              {phase.status === "actief" && (
                <span className="inline-block mt-4 bg-[#265e3e] text-[#b3fe78] px-3 py-1 rounded-full text-xs font-semibold">
                  Nu actief
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}