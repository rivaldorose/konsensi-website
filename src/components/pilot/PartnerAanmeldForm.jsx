import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Building2, User, Mail, Phone, Globe, AlertCircle } from "lucide-react";
import { sendEmailViaResend } from "@/api/functions";

export default function PartnerAanmeldForm() {
  const [formData, setFormData] = useState({
    organisatie_naam: "",
    type_organisatie: "",
    contactpersoon: "",
    email: "",
    telefoon: "",
    website: "",
    bericht: ""
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
    if (!phone) return true;
    const regex = /^(\+31|0031|0)[1-9][0-9]{8}$|^(\+31|0031|0)6[0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-]/g, "");
    return regex.test(cleanPhone);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.organisatie_naam.trim()) {
      newErrors.organisatie_naam = "Organisatienaam is verplicht";
    }
    
    if (!formData.type_organisatie) {
      newErrors.type_organisatie = "Selecteer een type organisatie";
    }
    
    if (!formData.contactpersoon.trim()) {
      newErrors.contactpersoon = "Contactpersoon is verplicht";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "E-mailadres is verplicht";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ongeldig e-mailadres";
    }
    
    if (formData.telefoon && !validatePhone(formData.telefoon)) {
      newErrors.telefoon = "Ongeldig telefoonnummer";
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
      await base44.entities.PilotRegistratiePartner.create({
        ...formData,
        status: "nieuw"
      });

      // Stuur interne notificatie e-mail
      try {
        await base44.integrations.Core.SendEmail({
          to: "info@konsensi-budgetbeheer.nl",
          subject: `Nieuwe partner aanmelding: ${formData.organisatie_naam}`,
          body: `
Er is een nieuwe partner aangemeld voor de pilot:

Organisatie: ${formData.organisatie_naam}
Type: ${formData.type_organisatie}
Contactpersoon: ${formData.contactpersoon}
E-mail: ${formData.email}
Telefoon: ${formData.telefoon || "Niet ingevuld"}
Website: ${formData.website || "Niet ingevuld"}
Bericht: ${formData.bericht || "Geen bericht"}

Datum: ${new Date().toLocaleDateString("nl-NL")}
          `
        });
      } catch (emailError) {
        console.error("Interne notificatie mislukt:", emailError);
      }

      // Stuur bevestigingsmail naar partner via Resend
      try {
        const typeLabels = {
          gemeente: "Gemeente",
          incassobureau: "Incassobureau",
          schuldhulporganisatie: "Schuldhulporganisatie",
          budgetcoach: "Budgetcoach",
          financiele_instelling: "Financiële instelling",
          overig: "Overig"
        };

        await sendEmailViaResend({
          to: formData.email,
          subject: "Bevestiging partneraanmelding Konsensi Pilot",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #265e3e;">Beste ${formData.contactpersoon},</h2>
              <p>Hartelijk dank voor de interesse van <strong>${formData.organisatie_naam}</strong> in de Konsensi Pilot!</p>
              <p>We hebben jullie aanmelding ontvangen en nemen binnen 2 werkdagen contact met jullie op om de mogelijkheden te bespreken.</p>
              
              <div style="background-color: #f5f7f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #265e3e; margin-top: 0;">Jullie ingevulde gegevens:</h3>
                <p><strong>Organisatienaam:</strong> ${formData.organisatie_naam}</p>
                <p><strong>Type organisatie:</strong> ${typeLabels[formData.type_organisatie] || formData.type_organisatie}</p>
                <p><strong>Contactpersoon:</strong> ${formData.contactpersoon}</p>
                <p><strong>E-mail:</strong> ${formData.email}</p>
                <p><strong>Telefoon:</strong> ${formData.telefoon || "Niet ingevuld"}</p>
                <p><strong>Website:</strong> ${formData.website || "Niet ingevuld"}</p>
                ${formData.bericht ? `<p><strong>Bericht:</strong> ${formData.bericht}</p>` : ''}
              </div>
              
              <p>Heb je vragen? Neem dan gerust contact met ons op via <a href="mailto:info@konsensi-budgetbeheer.nl" style="color: #265e3e;">info@konsensi-budgetbeheer.nl</a></p>
              
              <p style="margin-top: 30px;">Met vriendelijke groet,<br><strong>Het team van Konsensi Budgetbeheer</strong></p>
            </div>
          `,
          text: `
Beste ${formData.contactpersoon},

Hartelijk dank voor de interesse van ${formData.organisatie_naam} in de Konsensi Pilot!

We hebben jullie aanmelding ontvangen en nemen binnen 2 werkdagen contact met jullie op om de mogelijkheden te bespreken.

Jullie ingevulde gegevens:
Organisatienaam: ${formData.organisatie_naam}
Type organisatie: ${typeLabels[formData.type_organisatie] || formData.type_organisatie}
Contactpersoon: ${formData.contactpersoon}
E-mail: ${formData.email}
Telefoon: ${formData.telefoon || "Niet ingevuld"}
Website: ${formData.website || "Niet ingevuld"}
${formData.bericht ? `Bericht: ${formData.bericht}` : ''}

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

  const organisatieTypes = [
    { value: "gemeente", label: "Gemeente" },
    { value: "incassobureau", label: "Incassobureau" },
    { value: "schuldhulporganisatie", label: "Schuldhulporganisatie" },
    { value: "budgetcoach", label: "Budgetcoach" },
    { value: "financiele_instelling", label: "Financiële instelling" },
    { value: "overig", label: "Overig" }
  ];

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-[#b3fe78] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#265e3e]" />
        </div>
        <h3 className="text-2xl font-bold text-[#265e3e] mb-4">
          Bedankt voor uw interesse!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We hebben uw aanmelding ontvangen en nemen binnen 2 werkdagen contact met u op om de mogelijkheden te bespreken.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            Organisatienaam *
          </label>
          <Input
            required
            value={formData.organisatie_naam}
            onChange={(e) => {
              setFormData({ ...formData, organisatie_naam: e.target.value });
              if (errors.organisatie_naam) setErrors({ ...errors, organisatie_naam: "" });
            }}
            placeholder="Naam van uw organisatie"
            className={`h-12 ${errors.organisatie_naam ? "border-red-500" : ""}`}
          />
          {errors.organisatie_naam && <p className="text-red-500 text-sm mt-1">{errors.organisatie_naam}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type organisatie *
          </label>
          <Select
            value={formData.type_organisatie}
            onValueChange={(value) => {
              setFormData({ ...formData, type_organisatie: value });
              if (errors.type_organisatie) setErrors({ ...errors, type_organisatie: "" });
            }}
          >
            <SelectTrigger className={`h-12 ${errors.type_organisatie ? "border-red-500" : ""}`}>
              <SelectValue placeholder="Selecteer type" />
            </SelectTrigger>
            <SelectContent>
              {organisatieTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.type_organisatie && <p className="text-red-500 text-sm mt-1">{errors.type_organisatie}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Contactpersoon *
          </label>
          <Input
            required
            value={formData.contactpersoon}
            onChange={(e) => {
              setFormData({ ...formData, contactpersoon: e.target.value });
              if (errors.contactpersoon) setErrors({ ...errors, contactpersoon: "" });
            }}
            placeholder="Naam contactpersoon"
            className={`h-12 ${errors.contactpersoon ? "border-red-500" : ""}`}
          />
          {errors.contactpersoon && <p className="text-red-500 text-sm mt-1">{errors.contactpersoon}</p>}
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
            placeholder="email@organisatie.nl"
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
            placeholder="Telefoonnummer"
            className={`h-12 ${errors.telefoon ? "border-red-500" : ""}`}
          />
          {errors.telefoon && <p className="text-red-500 text-sm mt-1">{errors.telefoon}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Globe className="w-4 h-4 inline mr-2" />
            Website
          </label>
          <Input
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="www.organisatie.nl"
            className="h-12"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Aanvullende informatie of vragen
        </label>
        <Textarea
          value={formData.bericht}
          onChange={(e) => setFormData({ ...formData, bericht: e.target.value })}
          placeholder="Vertel ons meer over uw organisatie en hoe u wilt samenwerken..."
          className="h-32"
        />
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
        {isSubmitting ? "Aanvraag versturen..." : "Verstuur partneraanvraag"}
      </Button>
      
      <p className="text-center text-sm text-gray-500">
        We nemen binnen 2 werkdagen contact met u op.
      </p>
    </form>
  );
}