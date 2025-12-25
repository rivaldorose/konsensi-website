
import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Mail, Upload } from "lucide-react";

export default function PersPartners() {
  const [uploading, setUploading] = useState(false);
  const [uploadType, setUploadType] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        // User is not logged in or an error occurred
        setUser(null);
        // console.error("Failed to fetch user:", error); // Optional: for debugging
      }
    };
    checkAuth();
  }, []);

  const handleFileUpload = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadType(type);
    
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      alert(`✅ ${type} geüpload! \n\nURL: ${file_url}\n\nKopieer deze URL en vervang de oude URL in de code.`);
    } catch (error) {
      alert('❌ Upload mislukt. Probeer opnieuw.');
      console.error("Upload error:", error); // Log actual error for debugging
    } finally {
      setUploading(false);
      setUploadType("");
    }
  };

  const logoDownloads = [
    {
      title: "Logo - Wit op Groen (met slogan)",
      description: "Voor gebruik op donkere achtergronden",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png",
      uploadKey: "logo-wit-groen",
      formats: [
        { name: "PNG", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png" }
      ]
    },
    {
      title: "Logo met Slogan - Wit",
      description: "Inclusief slogan voor branding",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/c24d4c988_KonsensiBudgetbeheer_Slogan_WitteTekst2.png",
      uploadKey: "logo-slogan",
      formats: [
        { name: "PNG", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/c24d4c988_KonsensiBudgetbeheer_Slogan_WitteTekst2.png" }
      ]
    },
    {
      title: "Logo - Standaard",
      description: "Voor gebruik op lichte achtergronden",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/e01a6b1dd_Konsensi_Talks_logo.png",
      uploadKey: "logo-standaard",
      formats: [
        { name: "PNG", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/e01a6b1dd_Konsensi_Talks_logo.png" }
      ]
    }
  ];

  const brandColors = [
    { 
      name: "Konsensi Groen", 
      hex: "#265e3e", 
      rgb: "38, 94, 62",
      cmyk: "79% 0% 55% 63%",
      usage: "Primaire kleur voor headers en belangrijke elementen" 
    },
    { 
      name: "Konsensi Lichtgroen", 
      hex: "#6B9F7F", 
      rgb: "107, 159, 127",
      cmyk: "59% 0% 46% 0%",
      usage: "Secundaire kleur voor hover states" 
    },
    { 
      name: "Konsensi Accent", 
      hex: "#b3fe78", 
      rgb: "178, 255, 120",
      cmyk: "31% 0% 73% 0%",
      usage: "Accent kleur voor CTA's en highlights" 
    },
    { 
      name: "Konsensi Crème", 
      hex: "#F5F7F0", 
      rgb: "245, 247, 240",
      cmyk: "3% 0% 4% 3%",
      usage: "Achtergrondkleur voor secties" 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#265e3e] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pers & Partners
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Welkom op onze brand assets pagina. Hier vind je alle materialen die je nodig hebt om over Konsensi te communiceren.
          </p>
        </div>
      </section>

      {/* Brandbook Download Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#265e3e] to-[#1a4329] rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#b3fe78] rounded-2xl mb-6">
                <FileText className="w-10 h-10 text-[#265e3e]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Brandbook
              </h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Download ons complete brandbook met alle richtlijnen, logo's en merkidentiteit
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/dbf431348_Konsensi_BudgetbeheerBrandboek1.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-[#b3fe78] text-[#265e3e] px-8 py-4 rounded-full hover:bg-white transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Brandbook (PDF)
                </a>
                
                {user?.role === 'admin' && (
                  <label className="inline-flex items-center gap-3 bg-white text-[#265e3e] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, "Brandbook PDF")}
                      className="hidden"
                      disabled={uploading}
                    />
                    <Upload className="w-5 h-5" />
                    {uploading && uploadType === "Brandbook PDF" ? "Uploaden..." : "Upload Nieuwe Brandbook"}
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Downloads Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
              Logo Downloads
            </h2>
            <p className="text-gray-600 text-lg">
              Download onze logo's in verschillende formaten voor jouw gebruik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoDownloads.map((logo, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#265e3e] rounded-xl p-6 mb-4 flex items-center justify-center h-48">
                  <img 
                    src={logo.image}
                    alt={logo.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#265e3e] mb-2">
                  {logo.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {logo.description}
                </p>
                <div className="space-y-2">
                  {logo.formats.map((format, i) => (
                    <a
                      key={i}
                      href={format.url}
                      download
                      className="flex items-center justify-between bg-[#265e3e] text-white px-4 py-2 rounded-full hover:bg-[#1a4329] transition-colors"
                    >
                      <span className="font-semibold">{format.name}</span>
                      <Download className="w-4 h-4" />
                    </a>
                  ))}
                  
                  {user?.role === 'admin' && (
                    <label className="flex items-center justify-between bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full hover:bg-[#a8d5ba] transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, logo.title)}
                        className="hidden"
                        disabled={uploading}
                      />
                      <span className="font-semibold">
                        {uploading && uploadType === logo.title ? "Uploaden..." : "Upload Nieuw"}
                      </span>
                      <Upload className="w-4 h-4" />
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Colors Section */}
      <section className="py-20 bg-[#F5F7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
              Merkkleurenpalette
            </h2>
            <p className="text-gray-600 text-lg">
              Onze huisstijlkleuren voor consistente branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandColors.map((color, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div 
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#265e3e] mb-2">
                    {color.name}
                  </h3>
                  <div className="space-y-1 mb-3">
                    <p className="text-gray-600 font-mono text-sm">HEX: {color.hex}</p>
                    <p className="text-gray-600 font-mono text-sm">RGB: {color.rgb}</p>
                    <p className="text-gray-600 font-mono text-sm">CMYK: {color.cmyk}</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
              Typografie
            </h2>
            <p className="text-gray-600 text-lg">
              Onze merkfonts voor professionele communicatie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#265e3e] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Montserrat
              </h3>
              <p className="text-gray-600 mb-4">Voor koppen en headers</p>
              <div className="space-y-2">
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Montserrat Semi Bold</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Montserrat Bold</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>Montserrat Extra Bold</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>Montserrat Black</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#265e3e] mb-4">
                Lato
              </h3>
              <p className="text-gray-600 mb-4">Voor bodytekst en content</p>
              <div className="space-y-2">
                <p style={{ fontWeight: 400 }}>Lato Regular</p>
                <p style={{ fontWeight: 400, fontStyle: 'italic' }}>Lato Italic</p>
                <p style={{ fontWeight: 700 }}>Lato Bold</p>
                <p style={{ fontWeight: 700, fontStyle: 'italic' }}>Lato Bold Italic</p>
                <p style={{ fontWeight: 900 }}>Lato Black</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#265e3e] rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Richtlijnen voor gebruik
            </h2>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-[#b3fe78] text-2xl">✓</span>
                <p>Behoud voldoende vrije ruimte rondom het logo</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b3fe78] text-2xl">✓</span>
                <p>Gebruik het logo op effen achtergronden voor optimale leesbaarheid</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#b3fe78] text-2xl">✓</span>
                <p>Zorg ervoor dat het logo groot genoeg is om goed leesbaar te zijn</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <p>Verander de kleuren of verhoudingen van het logo niet</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <p>Voeg geen effecten, schaduwen of omlijningen toe aan het logo</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">✗</span>
                <p>Plaats het logo niet op drukke of complexe achtergronden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Konsensi Section */}
      <section className="py-20 bg-[#b3fe78]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6 text-center">
            Over Konsensi Budgetbeheer
          </h2>
          
          <div className="bg-white rounded-2xl p-8 text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong className="text-[#265e3e]">Konsensi Budgetbeheer</strong> is een innovatief platform dat mensen helpt grip te krijgen op hun financiën. We bieden toegankelijke tools voor budgetbeheer, schuldhulp en financiële educatie.
            </p>
            <p>
              Onze missie is om iedereen die moeite heeft met budgetteren te ondersteunen bij het beheren van hun financiën, het aflossen van schulden en het opbouwen van een gezonde financiële toekomst. Dit doen we door slimme technologie te combineren met persoonlijke begeleiding.
            </p>
            <p>
              Konsensi werkt samen met gemeenten, schuldhulporganisaties, budgetcoaches en incassobureaus om complete ondersteuning te bieden aan mensen die financiële uitdagingen ervaren.
            </p>
            <p className="font-semibold text-[#265e3e] text-lg">
              Slogan: "Het bouwen van vertrouwen"
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-[#265e3e] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Vragen over onze branding?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Neem gerust contact met ons op voor meer informatie of specifieke verzoeken
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@konsensi-budgetbeheer.nl">
              <Button className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full px-8 py-6 text-lg">
                info@konsensi-budgetbeheer.nl
              </Button>
            </a>
            <a href="mailto:partners@konsensi-budgetbeheer.nl">
              <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-[#265e3e] hover:text-white rounded-full px-8 py-6 text-lg">
                partners@konsensi-budgetbeheer.nl
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
