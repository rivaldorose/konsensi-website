
import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { CheckCircle2 } from "lucide-react";

export default function OverOns() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[700px] bg-[#265e3e] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b60045e21_doelgroep.png"
            alt="Diverse doelgroep"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-semibold mb-4 drop-shadow-lg">Over Konsensi budgetbeheer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Geld zonder stress. Grip op je toekomst.
          </h1>
          <p className="text-lg text-white max-w-3xl mx-auto drop-shadow-lg">
            Bij Konsensi verdient iedereen financiële stabiliteit. Wij doorbreken stress door slimme technologie en persoonlijke begeleiding te bieden zonder oordeel of verborgen kosten.
          </p>
        </div>
      </section>

      {/* What Makes Konsensi Section */}
      <section className="py-20 bg-[#b3fe78]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#265e3e] rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  WAT MAAKT <span className="text-[#b3fe78]">KONSENSI</span> DE JUISTE OPLOSSING?
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Geldproblemen raken veel mensen, maar hulp vinden kan overweldigend zijn. Soms voelt het ingewikkeld, of juist te ver weg. Veel mensen ervaren schaamte en zoeken daarom geen hulp - terwijl die er wel is.
                </p>
                <p className="text-slate-50 text-lg leading-relaxed">
                  Wij geloven dat het anders kan. Konsensi is gebouwd om toegankelijk, eerlijk en begrijpelijk te zijn. Een platform waar je zonder oordeel terecht kunt, waar alles transparant is, en waar mensen écht voorop staan.
                </p>
              </div>

              {/* Right Content - Checkmarks */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#b3fe78] flex-shrink-0" />
                  <p className="text-white font-semibold">Eenvoudig & toegankelijk</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#b3fe78] flex-shrink-0" />
                  <p className="text-white font-semibold">Geen verborgen kosten</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-[#b3fe78] flex-shrink-0" />
                  <p className="text-white font-semibold">Mensen boven geld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">
                Waar het allemaal begon
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Het idee voor <span className="font-semibold text-[#265e3e]">Konsensi</span> ontstond uit persoonlijke ervaring van onze oprichter, die jarenlang zelf worstelde met financiële problemen en schulden. Hij merkte dat de meeste financiële apps waren ontworpen voor mensen die al financieel gezond waren - niet voor mensen die écht hulp nodig hadden.
                </p>
                <p>
                  We zagen hoe mensen vastliepen in onduidelijke schuldenregelingen, worstelden met financiële planning, en geen toegang hadden tot begrijpelijke budgetteringstools. Toen dachten we: <span className="font-semibold text-[#265e3e]">dit kan beter.</span>
                </p>
                <p>
                  Maar we wilden niet zomaar een app bouwen. We wilden een oplossing die de hele industrie bij elkaar brengt: gemeenten, incassobureaus, schuldhulporganisaties én jongeren. Alleen door samen te werken kunnen we het huidige probleem écht oplossen - niet met versnipperde hulp, maar met één toegankelijk platform waar iedereen bij gebaat is.
                </p>
                <p>
                  We kozen de naam <span className="font-semibold text-[#265e3e]">Konsensi</span> omdat het in het Surinaams "slim geld" én "geweten" betekent. Dit weerspiegelt perfect wat we doen: we helpen mensen slim om te gaan met hun geld, met respect en zonder oordeel. Ons doel is om een nieuwe generatie jongeren te leren budgetteren, zodat zij niet in dezelfde valkuilen trappen.
                </p>
                <p className="font-semibold text-[#265e3e] text-lg">
                  Konsensi is meer dan een app - het is een beweging naar financiële vrijheid voor iedereen.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/fb6ea690f_Spaardoelenillustratie_WhiteBorder.png"
                alt="Spaardoelen illustratie"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#b3fe78]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">ONZE MISSIE</h2>
              <p className="text-[#265e3e] leading-relaxed text-lg">
                Konsensi helpt mensen grip te krijgen op hun geld. Onze missie is om iedereen die moeite heeft met budgetteren te ondersteunen bij het beheren van hun financiën, het aflossen van schulden en het opbouwen van een gezonde financiële toekomst.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">ONZE VISIE</h2>
              <p className="text-[#265e3e] leading-relaxed text-lg">
                Wij willen dé toonaangevende app worden voor schuldhulp en financiële educatie in Nederland, in samenwerking met budgetcoaches, schuldhulporganisaties en gemeenten. Ons doel: financiële problemen oplossen en een gezonde geldrelatie bevorderen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Better Way Section with Coins */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/09d6cd53c_KonsensiCoin22.png"
                alt="Konsensi Coins"
                className="w-full h-auto relative -mt-32"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">
                Een betere manier om je financiën te beheren
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Voor veel mensen is grip krijgen op hun geld een uitdaging. Onverwachte kosten, onduidelijke schulden en gebrek aan overzicht zorgen voor stress. Het kan overweldigend voelen om te weten waar te beginnen.
                </p>
                <p>
                  Dat moet anders. Daarom bouwden we <span className="font-semibold text-[#265e3e]">Konsensi</span> - een platform dat slimme technologie combineert met persoonlijke begeleiding, zodat jij eenvoudig je financiën kunt beheren. Geen ingewikkelde formulieren, geen verborgen kosten, maar een gebruiksvriendelijke oplossing die écht werkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
