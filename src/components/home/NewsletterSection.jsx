import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.Newsletter.create({
        email: email,
        subscribe_date: new Date().toISOString(),
        status: "active"
      });

      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#F5F7F0] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#265e3e] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#b3fe78] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-[#b3fe78] rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
              Blijf op de hoogte met onze nieuwsbrief
            </h2>
            
            <p className="text-slate-50 mb-6 md:mb-8 mx-auto text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
              Ontvang handige tips over budgetbeheer, praktische financiële planning, en blijf op de hoogte van nieuwe Konsensi features. Gratis in je inbox, wanneer jij het nodig hebt
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Jouw e-mailadres"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1 bg-white text-[#265e3e] border-none h-12 md:h-14 text-base"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold h-12 md:h-14 px-6 md:px-8 rounded-full min-h-[48px]"
                  >
                    {isSubmitting ? "Bezig..." : "Aanmelden"}
                  </Button>
                </div>
                <p className="text-xs md:text-sm text-[#b3fe78] mt-4">
                  We respecteren je privacy. Je kunt je op elk moment afmelden.
                </p>
              </form>
            ) : (
              <div className="bg-[#b3fe78] rounded-xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 text-[#265e3e]">
                  <CheckCircle2 className="w-6 h-6" />
                  <p className="font-semibold">Bedankt voor je aanmelding!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8 md:mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#265e3e] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-semibold text-[#265e3e] mb-2 text-sm md:text-base">Budgettips</h3>
            <p className="text-gray-600 text-xs md:text-sm">Praktische tips om je financiën beter te beheren</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#265e3e] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="font-semibold text-[#265e3e] mb-2 text-sm md:text-base">Exclusieve lessen</h3>
            <p className="text-gray-600 text-xs md:text-sm">Toegang tot speciale budgetlessen en workshops</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#265e3e] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="font-semibold text-[#265e3e] mb-2 text-sm md:text-base">Nieuwe features</h3>
            <p className="text-gray-600 text-xs md:text-sm">Als eerste op de hoogte van updates</p>
          </div>
        </div>
      </div>
    </section>
  );
}