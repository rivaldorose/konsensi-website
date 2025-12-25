
import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    onderwerp: "",
    bericht: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.integrations.Core.SendEmail({
        to: "info@konsensi-budgetbeheer.nl", // Updated email address here
        subject: `Contact formulier: ${formData.onderwerp}`,
        body: `
Nieuw bericht via contactformulier:

Naam: ${formData.naam}
E-mail: ${formData.email}
Onderwerp: ${formData.onderwerp}

Bericht:
${formData.bericht}
        `
      });

      setIsSubmitted(true);
      setFormData({ naam: "", email: "", onderwerp: "", bericht: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Er ging iets mis bij het versturen. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Form */}
      <section className="bg-[#265e3e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="mb-8">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png"
                  alt="Konsensi Budgetbeheer Logo"
                  className="h-16 w-auto mb-8" />

              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Neem <span className="text-[#b3fe78]">contact</span><br />
                met ons op.
              </h1>
              
              <p className="text-lg text-white leading-relaxed">
                Vul het formulier in of gebruik de contactgegevens hieronder – we reageren zo snel mogelijk.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {!isSubmitted ?
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Naam
                    </label>
                    <Input
                    value={formData.naam}
                    onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                    placeholder="Jouw naam"
                    required
                    className="bg-gray-50" />

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail adres
                    </label>
                    <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jouw@email.nl"
                    required
                    className="bg-gray-50" />

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Onderwerp
                    </label>
                    <Input
                    value={formData.onderwerp}
                    onChange={(e) => setFormData({ ...formData, onderwerp: e.target.value })}
                    placeholder="Waar gaat je bericht over?"
                    required
                    className="bg-gray-50" />

                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht
                    </label>
                    <Textarea
                    value={formData.bericht}
                    onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
                    placeholder="Typ hier je bericht..."
                    required
                    className="h-32 bg-gray-50" />

                  </div>

                  <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b3fe78] text-[#265e3e] hover:bg-[#265e3e] hover:text-white font-semibold text-lg py-6 rounded-full transition-all">

                    {isSubmitting ? "Versturen..." : "Bericht versturen"}
                  </Button>
                </form> :

              <div className="py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#265e3e] mb-2">
                    Bericht verzonden!
                  </h3>
                  <p className="text-gray-600">
                    Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-6">
            Wil je met ons samenwerken?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">Werk je bij een gemeente, schuldhulporganisatie, incassobureau of als budgetcoach? Wij staan open voor samenwerking!

          </p>

          <div className="bg-[#265e3e] rounded-2xl p-8 text-white">
            <Mail className="w-12 h-12 text-[#b3fe78] mx-auto mb-4" />
            <p className="text-lg mb-4">
              Mail ons via{" "}
              <a
                href="mailto:partners@konsensi-budgetbeheer.nl"
                className="text-[#b3fe78] font-semibold hover:underline">

                partners@konsensi-budgetbeheer.nl
              </a>
              {" "}of neem een kijkje op onze partnerspagina.
            </p>
            <Button
              className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8 mt-4"
              onClick={() => window.location.href = '/#partners'}>

              Bekijk partnerspagina
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}