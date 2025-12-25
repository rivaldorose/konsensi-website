import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Users } from "lucide-react";

export default function OnzePartners() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#265e3e] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png"
              alt="Konsensi Budgetbeheer"
              className="h-16 w-auto mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Samen bouwen aan<br />
            <span className="text-[#b3fe78]">financiële rust</span>
          </h1>
          
          <p className="text-xl text-white max-w-2xl mx-auto">
            Word partner van Konsensi en help mensen stap voor stap naar financiële stabiliteit.
          </p>
        </div>
      </section>

      {/* No Partners Yet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#265e3e] rounded-3xl p-12 md:p-16">
            <Users className="w-16 h-16 text-[#b3fe78] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We zijn op zoek naar <span className="text-[#b3fe78]">partners</span>
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Op dit moment zijn we bezig met het opbouwen van ons partnernetwerk. We zijn actief in gesprek met gemeenten, schuldhulporganisaties, budgetcoaches en financiële instellingen die net als wij geloven in toegankelijke financiële ondersteuning voor iedereen.
            </p>
            <p className="text-[#b3fe78] text-lg">
              Binnenkort kun je hier onze officiële partners vinden!
            </p>
          </div>
        </div>
      </section>

      {/* Voor Wie Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#265e3e] rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Voor wie is de <span className="text-[#b3fe78]">samenwerking</span> bedoeld?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏛️</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#265e3e]">Gemeenten</span> die hun inwoners betere schuldhulp en budgetondersteuning willen bieden.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  <span className="font-semibold text-[#265e3e]">Schuldhulporganisaties</span> die extra tools zoeken om hun cliënten te ondersteunen.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💼</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#265e3e]">Budgetcoaches</span> die hun begeleiding efficiënter willen maken en klanten inzicht willen geven.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#265e3e]">Incassobureaus</span> die hun klanten willen helpen met duurzame oplossingen en betalingsregelingen.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-10 py-6 text-lg">
                  Neem contact met ons op
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}