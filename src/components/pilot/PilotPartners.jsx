import React from "react";
import { Building2, Users, Briefcase, HandCoins } from "lucide-react";

export default function PilotPartners() {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Gemeenten",
      description: "We werken samen met gemeenten om inwoners betere financiële ondersteuning te bieden. Gemeenten krijgen inzicht in resultaten en kunnen hun schuldhulpverlening verbeteren."
    },
    {
      icon: HandCoins,
      title: "Incassobureaus",
      description: "Incassobureaus die geloven in duurzame oplossingen. Samen zorgen we voor betalingsregelingen die werken voor beide partijen."
    },
    {
      icon: Users,
      title: "Schuldhulporganisaties",
      description: "Organisaties die mensen helpen met schulden kunnen Konsensi inzetten als extra tool om cliënten te ondersteunen en monitoren."
    },
    {
      icon: Briefcase,
      title: "Budgetcoaches",
      description: "Budgetcoaches krijgen een platform om hun cliënten beter te begeleiden met overzichtelijke tools en rapportages."
    }
  ];

  return (
    <section className="py-20 bg-[#b3fe78]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Onze Pilotpartners
          </h2>
          <p className="text-lg text-[#265e3e]/80 max-w-3xl mx-auto">
            We zoeken partners die samen met ons willen bouwen aan een betere toekomst voor financiële hulpverlening.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partnerTypes.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#265e3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <partner.icon className="w-7 h-7 text-[#b3fe78]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#265e3e] mb-2">{partner.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Partners Placeholder */}
        <div className="bg-[#265e3e] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Word één van onze eerste partners
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            We zijn momenteel in gesprek met verschillende gemeenten en organisaties. Wil jouw organisatie ook onderdeel zijn van deze pilot? Meld je aan en we nemen contact op.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 px-6 py-3 rounded-full text-white text-sm">
              🏛️ Gemeenten in gesprek
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full text-white text-sm">
              🤝 Schuldhulporganisaties in gesprek
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full text-white text-sm">
              💼 Budgetcoaches in gesprek
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}