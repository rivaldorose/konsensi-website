import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: createPageUrl("Home"), isPage: true },
    { name: "Over ons", href: createPageUrl("OverOns"), isPage: true },
    { name: "Onze partners", href: createPageUrl("OnzePartners"), isPage: true },
    { name: "Blogs", href: createPageUrl("Blogs"), isPage: true },
    { name: "Budgetlessen", href: createPageUrl("Budgetlessen"), isPage: true },
    { name: "Contact ons", href: createPageUrl("Contact"), isPage: true },
    { name: "Konsensi Talks", href: createPageUrl("KonsensiTalks"), isPage: true },
    { name: "Pers & Partners", href: createPageUrl("PersPartners"), isPage: true }
  ];

  return (
    <footer className="bg-[#265e3e] text-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and Brand */}
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/c24d4c988_KonsensiBudgetbeheer_Slogan_WitteTekst2.png"
                alt="Konsensi Budgetbeheer Logo met Slogan"
                className="h-20 w-auto mb-4"
              />
            </div>

            {/* Snel Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Snel links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.isPage ? (
                      <Link to={link.href} className="text-white hover:text-[#b3fe78] transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-white hover:text-[#b3fe78] transition-colors">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact info</h4>
              <div className="space-y-3 text-white">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/f05e26e8a_website.png"
                    alt="Website"
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <p>www.konsensi-budgetbeheer.nl</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/268f35578_location.png"
                    alt="Locatie"
                    className="w-8 h-8 flex-shrink-0 mt-1"
                  />
                  <p>Konsensi Budgetbeheer<br />
                  Hessenbergweg 8<br />
                  1101 BT Amsterdam, Nederland</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/d18077c26_mail.png"
                    alt="Email"
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <p>info@konsensi-budgetbeheer.nl</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/8f62dda29_phonr.png"
                    alt="Telefoon"
                    className="w-8 h-8 flex-shrink-0"
                  />
                  <p>+31 6 19 86 62 18</p>
                </div>
              </div>
            </div>

            {/* Volg Ons */}
            <div>
              <h4 className="font-bold text-lg mb-4">Volg ons</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61569954091948"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/940d0e869_facebook-icon.png"
                    alt="Facebook"
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://www.instagram.com/konsensi_budgetbeheer?igsh=MW1vbjBnZXYzeHJzNQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/127c5752c_instagram.png"
                    alt="Instagram"
                    className="w-12 h-12"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/konsensibeheer/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ee3c5c171e1ac48f180590/3e7ad850b_linkedin.png"
                    alt="LinkedIn"
                    className="w-12 h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="bg-[#b3fe78] py-8 border-t border-[#6B9F7F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#265e3e] text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© 2025 Konsensi Budgetbeheer. Alle rechten voorbehouden.</p>
              <span className="hidden sm:inline">•</span>
              <p>KvK-nummer: 97041858</p>
            </div>
            <div className="flex gap-6">
              <Link to={createPageUrl("AlgemeneVoorwaarden")} className="hover:text-[#1a4329] transition-colors">
                Algemene voorwaarden
              </Link>
              <Link to={createPageUrl("PrivacyPolicy")} className="hover:text-[#1a4329] transition-colors">
                Privacy beleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}