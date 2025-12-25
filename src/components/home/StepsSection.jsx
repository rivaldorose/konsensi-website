import React, { useState } from "react";
import { TrendingUp, FileText, Bell, BarChart3, Target, ChevronDown, ChevronUp } from "lucide-react";

export default function StepsSection() {
  const [openStep, setOpenStep] = useState(null);

  const steps = [
    {
      number: "Stap 1",
      title: "Inzicht Krijgen",
      description: "We weten dat financiële problemen stressvol zijn. Daarom helpen we je eerst overzicht krijgen. Scan je loonstrook of incassobrief met AI, upload je bankafschrift, en zie direct waar je staat. De app berekent automatisch hoeveel je vrij te besteden hebt - geen verrassingen meer.",
      icon: TrendingUp
    },
    {
      number: "Stap 2",
      title: "Een Plan Maken",
      description: "Schulden kunnen iedereen overkomen. Samen maken we een persoonlijk aflossingsplan dat bij jou past. Kies tussen Sneeuwbal (kleinste eerst), Lawine (hoogste rente eerst) of Urgentie methode (dringendste eerst). De app toont wanneer je schuldenvrij bent en hoeveel rente je bespaart.",
      icon: FileText
    },
    {
      number: "Stap 3",
      title: "Actie Ondernemen",
      description: "Je staat er niet alleen voor. Stel betalingsregelingen voor met onze automatische brief generator - de app maakt professionele voorstellen op basis van wat je kunt betalen. Registreer betalingen, upload documenten, en houd je voortgang bij. We helpen je elke stap.",
      icon: Bell
    },
    {
      number: "Stap 4",
      title: "Voortgang Monitoren",
      description: "Elke stap vooruit verdient een compliment. Volg je financiële reis met duidelijke grafieken en maandelijkse rapportages. Zie hoeveel je al hebt afgelost, wanneer potjes vol zijn, en krijg slimme tips. Je bent nooit verrast - altijd in controle.",
      icon: BarChart3
    },
    {
      number: "Stap 5",
      title: "Stabiliteit Bereiken",
      description: "Het einddoel is financiële rust. Met potjes voor vaste lasten, een buffer voor onverwachte kosten, en Adempauze modus bij crisis, ondersteunt Konsensi je op weg naar een gezonde financiële toekomst. We zijn trots op je - elke stap telt!",
      icon: Target
    }
  ];

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="over-ons" className="py-20 bg-[#F5F7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Onze werkwijze in 5 stappen
          </h2>
          <p className="text-lg text-gray-600">
            Zo helpen we je stap voor stap naar financiële rust en stabiliteit.
          </p>
        </div>

        {/* Desktop view - Grid zoals voorheen */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`bg-[#265e3e] text-white rounded-2xl p-8 hover:transform hover:scale-105 transition-all ${
                  index === 3 ? 'md:col-span-1' : ''
                } ${index === 4 ? 'md:col-span-1' : ''}`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#b3fe78] rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#265e3e]" />
                  </div>
                  <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                </div>
                <p className="text-white leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile view - Inklapbaar accordion */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isOpen = openStep === index;
            return (
              <div
                key={index}
                className="bg-[#265e3e] text-white rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#b3fe78] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#265e3e]" />
                    </div>
                    <div>
                      <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 flex-shrink-0" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-white leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}