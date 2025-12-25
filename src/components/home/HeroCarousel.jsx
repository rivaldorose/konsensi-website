import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const totalSlides = 3;

  const { data: updates = [] } = useQuery({
    queryKey: ["updates-preview"],
    queryFn: () => base44.entities.Update.filter({ is_gepubliceerd: true }, "-publicatie_datum", 3)
  });

  const benefits = [
    "100% gratis, geen verborgen kosten, nooit",
    "Tools die je helpen om overzicht te krijgen",
    "Veilig, discreet en zonder oordeel",
    "Ondersteuning van mensen die snappen waar je doorheen gaat",
    "We werken samen met gemeenten en hulpverleners.",
    "200+ features om je te helpen, van overzicht tot actie"
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Slides Container */}
      <div 
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1: Home Hero */}
        <div className="w-full flex-shrink-0 bg-[#265e3e] text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Krijg Meer Overzicht Over Je <span className="text-[#b3fe77]">Geld</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  Budgetteren, schulden beheren en werken aan financiële rust.
                  We helpen je op weg, in je eigen tempo.
                </p>
                <div>
                  <a href="https://app.konsensi-budgetbeheer.nl" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button size="lg" className="bg-[#b3fe78] text-[#265e3e] hover:bg-white hover:scale-105 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all duration-300">
                      Begin nu
                    </Button>
                  </a>
                  <p className="text-white mt-4 text-sm md:text-base">
                    💚 Altijd gratis. Geen verborgen kosten.
                  </p>
                </div>
              </div>
              <div className="relative mt-8 lg:mt-0">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/985828702_Spaardoelenillustratie2.png"
                  alt="Budget Overzicht Illustratie"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="mt-12 md:mt-16 bg-[#b3fe78] rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/cf58e8a2c_check1.png"
                      alt="Check"
                      className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 md:mt-1"
                    />
                    <p className="text-[#265e3e] font-medium text-sm md:text-base leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Pilot Hero */}
        <div className="w-full flex-shrink-0 bg-[#265e3e] text-white py-12 md:py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#b3fe78]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#b3fe78]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold">
                  <Rocket className="w-4 h-4" />
                  Pilot Programma 2025
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Doe mee aan de <span className="text-[#b3fe78]">Konsensi Pilot</span>
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                  Samen bouwen we aan financiële rust voor iedereen. Word onderdeel van onze pilot en help ons om schuldhulp en budgetbeheer toegankelijker te maken.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to={createPageUrl("Pilot")}>
                    <Button
                      size="lg"
                      className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8 py-6 text-lg gap-2"
                    >
                      Meld je aan
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#b3fe78]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#b3fe78] font-bold">✓</span>
                    </div>
                    <span className="text-white/90">100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#b3fe78]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#b3fe78] font-bold">✓</span>
                    </div>
                    <span className="text-white/90">Persoonlijke begeleiding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#b3fe78]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#b3fe78] font-bold">✓</span>
                    </div>
                    <span className="text-white/90">Iedereen is welkom</span>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#b3fe78]/20 rounded-3xl blur-2xl transform rotate-6"></div>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/6d72c95b3_loginIllustratie_2025-06-08.png"
                    alt="Pilot programma"
                    className="relative w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#b3fe78] rounded-full flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-[#265e3e]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#265e3e]">Start: Dec 2025</p>
                        <p className="text-sm text-gray-500">Schrijf je nu in!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Updates Hero */}
        <div className="w-full flex-shrink-0 bg-[#b3fe78] text-[#265e3e] py-12 md:py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#265e3e]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#265e3e]/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#265e3e]/10 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/74901cc09_Betaalachterstanden_illustratie_whiteBorder.png"
                    alt="Updates en nieuws"
                    className="relative w-full h-auto object-cover"
                  />
                  <div className="absolute -top-4 -right-4 bg-[#265e3e] text-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#b3fe78] rounded-full flex items-center justify-center">
                        <Bell className="w-6 h-6 text-[#265e3e]" />
                      </div>
                      <div>
                        <p className="font-bold">{updates.length || 0}+ Updates</p>
                        <p className="text-sm text-white/70">Dit jaar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 bg-[#265e3e] text-[#b3fe78] px-4 py-2 rounded-full text-sm font-semibold">
                  <Bell className="w-4 h-4" />
                  Updates & Nieuws
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Wat is er <span className="text-[#265e3e]">nieuw</span>?
                </h2>
                
                <p className="text-base md:text-lg lg:text-xl text-[#265e3e]/70 leading-relaxed">
                  Bekijk de nieuwste functies, verbeteringen en aankondigingen van Konsensi Budgetbeheer.
                </p>

                {updates.length > 0 && (
                  <div className="space-y-3">
                    {updates.slice(0, 2).map((update, index) => (
                      <div key={update.id} className="bg-white rounded-xl p-4 shadow-md flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#265e3e] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#b3fe78] font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#265e3e] line-clamp-1">{update.titel}</h3>
                          <p className="text-[#265e3e]/60 text-sm line-clamp-1">{update.beschrijving}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link to={createPageUrl("Updates")} className="mt-4 inline-block">
                  <Button
                    size="lg"
                    className="bg-[#265e3e] text-white hover:bg-[#1a4329] font-semibold rounded-full px-8 py-6 text-lg gap-2"
                  >
                    Bekijk alle updates
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-3 transition-all z-10"
        aria-label="Vorige slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-3 transition-all z-10"
        aria-label="Volgende slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-white scale-125" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Ga naar slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}