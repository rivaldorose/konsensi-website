import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PilotHero from "../components/pilot/PilotHero";
import WatIsPilot from "../components/pilot/WatIsPilot";
import PilotTimeline from "../components/pilot/PilotTimeline";
import PilotPartners from "../components/pilot/PilotPartners";
import PilotInfoSection from "../components/pilot/PilotInfoSection";
import GebruikerAanmeldForm from "../components/pilot/GebruikerAanmeldForm";
import PartnerAanmeldForm from "../components/pilot/PartnerAanmeldForm";
import PilotFAQ from "../components/pilot/PilotFAQ";
import ActievePartners from "../components/pilot/ActievePartners";
import PilotDownloads from "../components/pilot/PilotDownloads";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Pilot() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PilotHero />
      <ActievePartners />
      <WatIsPilot />
      <PilotTimeline />
      <PilotDownloads />
      <PilotInfoSection />
      <PilotPartners />

      {/* Aanmeld Secties */}
              <section className="py-20 bg-[#265e3e]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/3b21fb773_KonsensiBudgetbeheer_Slogan_DonkerGroen1.png"
                      alt="Konsensi Budgetbeheer"
                      className="h-16 w-auto mx-auto"
                    />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Gebruiker Aanmelding */}
                    <div id="aanmelden-gebruiker" className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
                      <div className="text-center mb-8">
                        <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          Voor gebruikers
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#265e3e] mb-2">
                          Meld je aan als gebruiker
                        </h2>
                        <p className="text-gray-600">
                          Krijg grip op je financiën met persoonlijke begeleiding
                        </p>
                      </div>
                      <GebruikerAanmeldForm />
                    </div>

                    {/* Partner Aanmelding */}
                    <div id="aanmelden-partner" className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
                      <div className="text-center mb-8">
                        <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          Voor organisaties
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#265e3e] mb-2">
                          Word pilotpartner
                        </h2>
                        <p className="text-gray-600">
                          Werk samen met ons aan betere financiële hulpverlening
                        </p>
                      </div>
                      <PartnerAanmeldForm />
                    </div>
                  </div>
                </div>
              </section>

      <PilotFAQ />

      {/* Contact CTA */}
      <section className="py-16 bg-[#b3fe78]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/3b21fb773_KonsensiBudgetbeheer_Slogan_DonkerGroen1.png"
            alt="Konsensi Budgetbeheer"
            className="h-16 w-auto mx-auto mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-[#265e3e] mb-4">
            Nog vragen over de pilot?
          </h2>
          <p className="text-[#265e3e]/80 mb-6">
            We staan klaar om al je vragen te beantwoorden. Neem gerust contact met ons op.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-block bg-[#265e3e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a4329] transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}