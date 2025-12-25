import React from "react";
import Header from "../components/home/Header";
import HeroCarousel from "../components/home/HeroCarousel";
import PartnersSection from "../components/home/PartnersSection";
import TrustSection from "../components/home/TrustSection";
import StepsSection from "../components/home/StepsSection";
import CTASection from "../components/home/CTASection";
import NewsletterSection from "../components/home/NewsletterSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <PartnersSection />
        <TrustSection />
        <StepsSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}