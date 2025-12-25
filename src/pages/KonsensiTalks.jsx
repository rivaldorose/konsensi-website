
import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Mic2, Play } from "lucide-react";

export default function KonsensiTalks() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-[#265e3e] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/ffa6aa393_podcastbackground.png"
            alt="Podcast Microphone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#265e3e]/50 to-[#265e3e]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/90c59c57f_Konsensi_Talks_logo_witteTekst.png"
                alt="Konsensi Talks Logo"
                className="h-24 w-auto"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              KONSENSI TALKS – JOUW GIDS NAAR FINANCIËLE VRIJHEID
            </h1>
            
            <p className="text-xl text-white leading-relaxed">
              Luister mee naar inspirerende verhalen en praktische inzichten over geldbeheer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Spotify & YouTube */}
      <section className="py-16 bg-[#265e3e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#b3fe78] rounded-3xl p-12 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#265e3e] rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-8">
                VOLG ONS EN BLIJF OP DE HOOGTE VAN NIEUWE AFLEVERINGEN!
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://open.spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#265e3e] font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="w-8 h-8 bg-[#265e3e] rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"
                    alt="Spotify"
                    className="h-6"
                  />
                  <span>Spotify</span>
                </a>
                
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#265e3e] font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="w-8 h-8 bg-[#265e3e] rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                    alt="YouTube"
                    className="h-6"
                  />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achter de Microfoon Section */}
      <section className="py-20 bg-[#265e3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              ACHTER DE MICROFOON
            </h2>
            <p className="text-[#b3fe78] text-2xl md:text-3xl font-bold">
              Konsensi Talks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-white">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Geld is een onderwerp waar veel mensen mee worstelen, maar waar nog te weinig open over wordt gesproken. Bij <span className="font-semibold text-[#b3fe78]">Konsensi Talks</span> doorbreken we dit taboe. Onze podcast draait om eerlijke, toegankelijke en inspirerende gesprekken over financiën, schulden, sparen en financiële groei.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Of je nu moeite hebt om je maandelijkse uitgaven onder controle te houden, op zoek bent naar slimme bespaartips of gewoon wilt leren hoe anderen omgaan met geld – bij <span className="font-semibold text-[#b3fe78]">Konsensi Talks</span> krijg je inzichten die écht het verschil maken. We nodigen financiële experts, ervaringsdeskundigen en ondernemers uit om hun kennis en persoonlijke verhalen te delen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/e01a6b1dd_Konsensi_Talks_logo.png"
              alt="Konsensi Talks Logo"
              className="h-32 w-auto mx-auto"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">
            ONTDEK HOE JE FINANCIËLE STABILITEIT BEREIKT, ÉÉN GESPREK TEGELIJK.
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Financiële bewustwording vergroten en mensen helpen meer grip te krijgen op hun geld. Zonder oordeel, zonder ingewikkelde termen – gewoon praktische en motiverende gesprekken die je direct kunt toepassen in je dagelijks leven.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
