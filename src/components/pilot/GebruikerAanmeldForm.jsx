import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, User, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { sendEmailViaResend } from "@/api/functions";

export default function GebruikerAanmeldForm() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    woonplaats: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Optioneel veld
    const regex = /^(\+31|0031|0)[1-9][0-9]{8}$|^(\+31|0031|0)6[0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-]/g, "");
    return regex.test(cleanPhone);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.naam.trim()) {
      newErrors.naam = "Naam is verplicht";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ongeldig e-mailadres";
    }
    
    if (formData.telefoon && !validatePhone(formData.telefoon)) {
      newErrors.telefoon = "Ongeldig telefoonnummer (bijv. 06-12345678)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await base44.entities.PilotRegistratieGebruiker.create({
        ...formData,
        status: "nieuw"
      });

      // Stuur interne notificatie e-mail
      try {
        await base44.integrations.Core.SendEmail({
          to: "info@konsensi-budgetbeheer.nl",
          subject: `Nieuwe pilot aanmelding: ${formData.naam}`,
          body: `
Er is een nieuwe gebruiker aangemeld voor de pilot:

Naam: ${formData.naam}
E-mail: ${formData.email}
Telefoon: ${formData.telefoon || "Niet ingevuld"}
Woonplaats: ${formData.woonplaats || "Niet ingevuld"}

Datum: ${new Date().toLocaleDateString("nl-NL")}
          `
        });
      } catch (emailError) {
        console.error("Interne notificatie mislukt:", emailError);
      }

      // Stuur bevestigingsmail naar gebruiker via Resend
      try {
        await sendEmailViaResend({
          to: formData.email,
          subject: "Bevestiging aanmelding Konsensi Pilot",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #265e3e;">Beste ${formData.naam},</h2>
              <p>Hartelijk dank voor je aanmelding voor de Konsensi Pilot!</p>
              <p>We hebben je aanmelding ontvangen en nemen zo snel mogelijk contact met je op om de volgende stappen te bespreken.</p>
              
              <div style="background-color: #f5f7f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #265e3e; margin-top: 0;">Jouw ingevulde gegevens:</h3>
                <p><strong>Naam:</strong> ${formData.naam}</p>
                <p><strong>E-mail:</strong> ${formData.email}</p>
                <p><strong>Telefoon:</strong> ${formData.telefoon || "Niet ingevuld"}</p>
                <p><strong>Woonplaats:</strong> ${formData.woonplaats || "Niet ingevuld"}</p>
              </div>
              
              <p>Heb je vragen? Neem dan gerust contact met ons op via <a href="mailto:info@konsensi-budgetbeheer.nl" style="color: #265e3e;">info@konsensi-budgetbeheer.nl</a></p>
              
              <p style="margin-top: 30px;">Met vriendelijke groet,<br><strong>Het team van Konsensi Budgetbeheer</strong></p>
            </div>
          `,
          text: `
Beste ${formData.naam},

Hartelijk dank voor je aanmelding voor de Konsensi Pilot!

We hebben je aanmelding ontvangen en nemen zo snel mogelijk contact met je op om de volgende stappen te bespreken.

Jouw ingevulde gegevens:
Naam: ${formData.naam}
E-mail: ${formData.email}
Telefoon: ${formData.telefoon || "Niet ingevuld"}
Woonplaats: ${formData.woonplaats || "Niet ingevuld"}

Heb je vragen? Neem dan gerust contact met ons op via info@konsensi-budgetbeheer.nl

Met vriendelijke groet,
Het team van Konsensi Budgetbeheer
          `
        });
      } catch (emailError) {
        console.error("Bevestigingsmail verzenden mislukt:", emailError);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Aanmelding mislukt:", error);
      setSubmitError(error.message || "Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#265e3e]" />
        </div>
        <h3 className="text-2xl font-bold text-[#265e3e] mb-4">
          Bedankt voor je aanmelding!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We hebben je aanmelding ontvangen en nemen zo snel mogelijk contact met je op. Check je inbox (en spam folder) voor onze bevestigingsmail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Volledige naam *
          </label>
          <Input
            required
            value={formData.naam}
            onChange={(e) => {
              setFormData({ ...formData, naam: e.target.value });
              if (errors.naam) setErrors({ ...errors, naam: "" });
            }}
            placeholder="Je volledige naam"
            className={`h-12 ${errors.naam ? "border-red-500" : ""}`}
          />
          {errors.naam && <p className="text-red-500 text-sm mt-1">{errors.naam}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            E-mailadres *
          </label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            placeholder="je@email.nl"
            className={`h-12 ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Telefoonnummer
          </label>
          <Input
            value={formData.telefoon}
            onChange={(e) => {
              setFormData({ ...formData, telefoon: e.target.value });
              if (errors.telefoon) setErrors({ ...errors, telefoon: "" });
            }}
            placeholder="06-12345678"
            className={`h-12 ${errors.telefoon ? "border-red-500" : ""}`}
          />
          {errors.telefoon && <p className="text-red-500 text-sm mt-1">{errors.telefoon}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Woonplaats
          </label>
          <Input
            value={formData.woonplaats}
            onChange={(e) => setFormData({ ...formData, woonplaats: e.target.value })}
            placeholder="Je woonplaats"
            className="h-12"
          />
        </div>
      </div>

      {submitError && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm">{submitError}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#265e3e] hover:bg-[#1a4329] text-white font-semibold rounded-full h-14 text-lg"
      >
        {isSubmitting ? "Aanmelding versturen..." : "Meld je aan voor de pilot"}
      </Button>
      
      <p className="text-center text-sm text-gray-500">
        Door je aan te melden ga je akkoord met onze privacyvoorwaarden.
      </p>
    </form>
  );
}