import React from "react";
import { FileText, BarChart3, MessageCircle, Shield } from "lucide-react";

export default function PilotInfoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Infographic placeholder */}
          <div className="bg-[#F5F7F0] rounded-3xl p-8 md:p-12">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/6d72c95b3_loginIllustratie_2025-06-08.png"
              alt="Konsensi App"
              className="w-full h-auto"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">
              Wat krijg je als pilotdeelnemer?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#b3fe78] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#265e3e]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#265e3e] mb-1">Volledige toegang tot de app</h3>
                  <p className="text-gray-600">Alle functies van Konsensi, inclusief budgettering, schuldbeheer en spaardoelen.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#b3fe78] rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#265e3e]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#265e3e] mb-1">Inzicht & Overzicht</h3>
                  <p className="text-gray-600">Duidelijke rapportages en overzichten van je financiële situatie.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#b3fe78] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#265e3e]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#265e3e] mb-1">Privacy gegarandeerd</h3>
                  <p className="text-gray-600">Je gegevens zijn veilig. We delen nooit zonder jouw toestemming.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}