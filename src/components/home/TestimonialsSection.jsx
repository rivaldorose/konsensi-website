import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie, 32",
      role: "student",
      text: "Dankzij Konsensi heb ik eindelijk overzicht in mijn uitgaven. De app helpt me om op tijd te betalen en mijn schulden af te lossen zonder stress!",
      rating: 5
    },
    {
      name: "Mark, 45",
      role: "Zelfstandig ondernemer",
      text: "Ik was het overzicht over mijn financiën kwijt, maar met Konsensi en de begeleiding van een budgetcoach heb ik een duidelijk plan gemaakt. Ik voel me weer in controle!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D5F3F] mb-4">
          Wat onze gebruikers zeggen
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Echte verhalen van mensen die met Konsensi hun financiën weer onder controle kregen
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2D5F3F] text-white rounded-2xl p-8 hover:transform hover:scale-105 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#A8D5BA] text-[#A8D5BA]" />
                ))}
              </div>
              <p className="text-[#A8D5BA] text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-[#A8D5BA]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}