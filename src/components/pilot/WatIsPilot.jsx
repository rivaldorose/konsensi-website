import React from "react";
import { Target, Users, TrendingUp, Shield, Lightbulb, Heart } from "lucide-react";

export default function WatIsPilot() {
  const features = [
    {
      icon: Target,
      title: "Wat willen we bereiken?",
      description: "We testen onze app en diensten met echte gebruikers en partners om financiële hulpverlening effectiever en toegankelijker te maken."
    },
    {
      icon: Users,
      title: "Voor wie is het?",
      description: "Mensen die grip willen krijgen op hun financiën, én organisaties die hun cliënten beter willen ondersteunen."
    },
    {
      icon: TrendingUp,
      title: "Wat levert het op?",
      description: "Inzicht in je financiën, persoonlijke begeleiding en tools die écht werken. Voor partners: efficiëntere werkprocessen."
    },
    {
      icon: Shield,
      title: "Volledig gratis",
      description: "De pilot is 100% gratis. Geen verborgen kosten, geen verplichtingen. We geloven dat financiële hulp voor iedereen bereikbaar moet zijn."
    },
    {
      icon: Lightbulb,
      title: "Jouw feedback telt",
      description: "Als pilotdeelnemer help je ons de app te verbeteren. Jouw ervaringen en suggesties maken Konsensi beter voor iedereen."
    },
    {
      icon: Heart,
      title: "Persoonlijke aanpak",
      description: "Geen algoritmes die beslissen, maar mensen die luisteren. We staan naast je, niet tegenover je."
    }
  ];

  return (
    <section id="wat-is-pilot" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Wat is de Konsensi Pilot?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Een unieke kans om samen te werken aan de toekomst van financiële hulpverlening in Nederland. We brengen gebruikers, gemeenten en organisaties samen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F7F0] rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-[#b3fe78] rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-[#265e3e]" />
              </div>
              <h3 className="text-xl font-bold text-[#265e3e] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}