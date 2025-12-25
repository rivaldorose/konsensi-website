import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PilotFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is deelname aan de pilot echt gratis?",
      answer: "Ja, deelname is 100% gratis. Er zijn geen verborgen kosten en ook na de pilot blijft het basisgebruik van Konsensi gratis. We geloven dat iedereen toegang moet hebben tot financiële hulpmiddelen."
    },
    {
      question: "Wie kan meedoen aan de pilot?",
      answer: "Iedereen die grip wil krijgen op zijn of haar financiën kan meedoen. We zoeken specifiek mensen die moeite hebben met budgetteren, schulden willen aflossen, of gewoon beter willen leren omgaan met geld."
    },
    {
      question: "Hoe lang duurt de pilot?",
      answer: "De pilot loopt van december 2025 tot februari 2026. Gedurende deze periode krijg je volledige toegang tot alle functies en persoonlijke begeleiding."
    },
    {
      question: "Wat wordt er van mij verwacht als deelnemer?",
      answer: "We vragen je om de app actief te gebruiken en af en toe feedback te geven via korte vragenlijsten. Jouw input helpt ons om Konsensi beter te maken voor iedereen."
    },
    {
      question: "Hoe zit het met mijn privacy?",
      answer: "Je privacy is onze prioriteit. We gebruiken je gegevens alleen om je te helpen en om de app te verbeteren. We delen nooit persoonlijke informatie met derden zonder jouw expliciete toestemming."
    },
    {
      question: "Hoe kan mijn organisatie partner worden?",
      answer: "Vul het partnerformulier in en we nemen binnen 2 werkdagen contact op. We bespreken dan hoe we samen kunnen werken en wat de mogelijkheden zijn voor jouw organisatie."
    },
    {
      question: "Wat gebeurt er na de pilot?",
      answer: "Na de pilot kun je Konsensi gratis blijven gebruiken. De app blijft ook na de pilot volledig gratis. We evalueren de resultaten en rollen de beste functies uit naar alle gebruikers. Partners krijgen een speciale positie in ons netwerk."
    }
  ];

  return (
    <section className="py-20 bg-[#F5F7F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-gray-600">
            Heb je nog vragen? Hier vind je de antwoorden op de meest gestelde vragen.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[#265e3e] pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#265e3e] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#265e3e] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}