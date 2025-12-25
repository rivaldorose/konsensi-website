import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import UpdateTimeline from "../components/updates/UpdateTimeline";
import { Sparkles } from "lucide-react";

export default function Updates() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F5F7F0] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Wat is er nieuw?
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#265e3e] mb-4">
            Updates & Changelog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blijf op de hoogte van de nieuwste functies, verbeteringen en aankondigingen van Konsensi.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <UpdateTimeline />
        </div>
      </section>

      <Footer />
    </div>
  );
}