import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

export default function AlgemeneVoorwaarden() {
  const sections = [
    {
      title: "Wie zijn wij?",
      content: 'Konsensi Budgetbeheer ("Konsensi", "wij" of "ons") is een platform gericht op het ondersteunen van mensen bij het beheren van hun financiën, het aflossen van schulden en het verbeteren van hun financiële kennis. Wij zijn gevestigd in Amsterdam, Nederland.'
    },
    {
      title: "Wat wij bieden",
      content: "Met Konsensi krijg je toegang tot:",
      list: [
        "Budgetbeheer dashboard",
        "Online cursussen en budgetlessen",
        "Tools voor spaardoelen en schuldaflossing",
        "Mogelijkheid tot contact met gecertificeerde budgetcoaches",
        "Community-ondersteuning via webinars, podcasts en online events"
      ],
      note: "Wij bieden geen persoonlijk financieel advies of beleggingsadvies. De informatie en tools zijn bedoeld voor algemene educatieve doeleinden."
    },
    {
      title: "Jouw gebruik van onze diensten",
      content: "Bij het gebruik van onze diensten:",
      list: [
        "Bevestig je dat je minimaal 18 jaar bent, of toestemming hebt van een ouder/verzorger",
        "Gebruik je onze diensten alleen voor persoonlijke en niet-commerciële doeleinden",
        "Verbied je misbruik, waaronder fraude, hacking, of verstoring van onze platformen",
        "Houd je je aan toepasselijke wet- en regelgeving"
      ]
    },
    {
      title: "Registratie en accountbeheer",
      content: "Om toegang te krijgen tot sommige functies moet je een account aanmaken:",
      list: [
        "Houd je inloggegevens vertrouwelijk",
        "Meld verlies of misbruik van je account onmiddellijk bij ons",
        "Wij behouden ons het recht voor accounts te blokkeren bij misbruik of overtreding van deze voorwaarden"
      ]
    },
    {
      title: "Aansprakelijkheid en garanties",
      content: "Hoewel wij streven naar een hoge kwaliteit van dienstverlening:",
      list: [
        "Kunnen wij niet garanderen dat onze tools of informatie altijd foutloos, volledig of actueel zijn",
        "Ben je zelf verantwoordelijk voor beslissingen die je neemt op basis van onze diensten",
        "Sluiten wij aansprakelijkheid uit voor schade, tenzij sprake is van opzet of grove nalatigheid van onze kant"
      ]
    },
    {
      title: "Privacy en gegevensverwerking",
      content: "Wij verzamelen en verwerken persoonsgegevens in overeenstemming met de Privacyverklaring.",
      subtitle: "Belangrijk:",
      list: [
        "Wij vragen alleen gegevens die noodzakelijk zijn voor onze diensten",
        "Jouw gegevens worden niet verkocht aan derden",
        "In sommige gevallen delen wij gegevens met partners, maar alleen als dit noodzakelijk is (bijv. voor coachbegeleiding)"
      ]
    },
    {
      title: "Intellectueel eigendom",
      content: "Alle teksten, afbeeldingen, software, ontwerpen en andere materialen op onze platforms zijn ons eigendom of van onze licentiegevers:",
      list: [
        "Je mag deze materialen niet kopiëren, aanpassen of verspreiden zonder onze voorafgaande schriftelijke toestemming"
      ]
    },
    {
      title: "Beëindiging van gebruik",
      content: "Je kunt je gebruik van onze diensten op elk moment beëindigen. Wij behouden ons het recht voor je toegang te blokkeren of je account te verwijderen bij misbruik of overtreding van de voorwaarden."
    },
    {
      title: "Wijzigingen van deze voorwaarden",
      content: "Wij kunnen deze algemene voorwaarden wijzigen:",
      list: [
        "Bij wetswijzigingen, technologische ontwikkelingen of uitbreiding van diensten",
        "Bij belangrijke wijzigingen informeren wij je via e-mail of melding in de app of website",
        "Door onze diensten te blijven gebruiken na wijziging, accepteer je de nieuwe voorwaarden"
      ]
    },
    {
      title: "Toepasselijk recht en geschillen",
      content: "Op deze algemene voorwaarden is Nederlands recht van toepassing. Geschillen worden uitsluitend voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders bepaalt."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#265e3e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Konsensi Budgetbeheer
          </h1>
          <h2 className="text-3xl md:text-4xl text-[#b3fe78] font-bold">
            ALGEMENE VOORWAARDEN
          </h2>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#265e3e]">
                  {section.title}
                </h3>
                
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.subtitle && (
                  <p className="text-gray-700 font-semibold">
                    {section.subtitle}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 ml-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-[#b3fe78] mr-3 mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="text-gray-600 italic mt-4">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2025 Konsensi Budgetbeheer. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}