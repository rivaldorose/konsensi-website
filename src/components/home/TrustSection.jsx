import React from "react";

export default function TrustSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#265e3e] text-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative pt-32 md:pt-40 lg:pt-44 min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Decorative Coins Image */}
          <div className="absolute -top-24 md:-top-32 left-1/2 transform -translate-x-1/2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/6ab8b0220_KonsensiCoin21.png"
              alt="Konsensi Coins"
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="text-center w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-white">Empathisch.</span>{" "}
              <span className="text-white">Toegankelijk.</span>
              <br />
              <span className="text-[#b3fe78]">Betrouwbaar.</span>
            </h2>
            
            <p className="text-slate-50 mx-auto text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-4xl px-4">
              Bij Konsensi bouwen we aan een platform waar iedereen welkom is, zonder oordeel en zonder gedoe. Door innovatie en samenwerking helpen we jou naar financiële rust. Stap voor stap, cent voor cent in jouw tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}