import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: createPageUrl("Home"), isPage: true },
    { name: "Over ons", href: createPageUrl("OverOns"), isPage: true },
    { name: "Pilot", href: createPageUrl("Pilot"), isPage: true },
    { name: "Onze partners", href: createPageUrl("OnzePartners"), isPage: true },
    { name: "Blogs", href: createPageUrl("Blogs"), isPage: true },
    { name: "Budgetlessen", href: createPageUrl("Budgetlessen"), isPage: true },
    { name: "Contact", href: createPageUrl("Contact"), isPage: true },
    { name: "Konsensi Talks", href: createPageUrl("KonsensiTalks"), isPage: true },
    { name: "Updates", href: createPageUrl("Updates"), isPage: true }
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-[#265e3e] text-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-3 flex-shrink-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/b4770d4fd_KonsensiBudgetbeheer_Logo_WitteTekst1.png"
              alt="Konsensi Budgetbeheer Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center flex-1 mx-4">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                    isActive(item.href)
                      ? 'bg-[#b3fe78] text-[#265e3e]'
                      : 'text-white hover:bg-[#6B9F7F]'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium px-4 py-2 rounded-full text-white hover:bg-[#6B9F7F] transition-all"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden xl:block flex-shrink-0">
            <a href="https://app.konsensi-budgetbeheer.nl" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full text-sm px-5">
                Gratis account aanmaken
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-[#6B9F7F] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 border-t border-[#6B9F7F] mt-2 pt-4 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-base font-medium px-4 py-3 rounded-full transition-all ${
                      isActive(item.href)
                        ? 'bg-[#b3fe78] text-[#265e3e]'
                        : 'text-white hover:bg-[#6B9F7F]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium px-4 py-3 rounded-full text-white hover:bg-[#6B9F7F] transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a href="https://app.konsensi-budgetbeheer.nl" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold mt-2 w-full rounded-full h-12">
                  Maak een gratis account aan
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}