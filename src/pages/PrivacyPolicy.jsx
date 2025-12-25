import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. INLEIDING",
      content: "Konsensi BudgetBeheer B.V. (hierna: \"Konsensi\", \"wij\", \"ons\") hecht grote waarde aan de bescherming van uw privacy en persoonsgegevens. In deze Privacy Policy leggen wij uit welke persoonsgegevens wij verzamelen, waarom wij deze verzamelen, hoe wij deze gebruiken en welke rechten u heeft.",
      note: "Deze Privacy Policy is van toepassing op alle diensten van Konsensi, waaronder de Konsensi App en Konsensi Hulp Radar.",
      contactInfo: {
        company: "Konsensi BudgetBeheer B.V.",
        address: "Darlingstraat 371",
        city: "1102MX Amsterdam",
        kvk: "KvK-nummer: 97041858",
        email: "privacy@konsensi-budgetbeheer.nl",
        website: "https://konsensi-budgetbeheer.nl"
      }
    },
    {
      title: "2. WELKE GEGEVENS VERZAMELEN WIJ?",
      content: "Wij verzamelen verschillende soorten persoonsgegevens, afhankelijk van de dienst die u gebruikt:",
      subsections: [
        {
          subtitle: "2.1 Accountgegevens",
          list: ["Voor- en achternaam", "E-mailadres", "Telefoonnummer", "Geboortedatum", "Postcode en woonplaats", "BSN (alleen voor Konsensi Hulp Radar, indien noodzakelijk voor matching met hulporganisaties)"]
        },
        {
          subtitle: "2.2 Financiële gegevens",
          list: ["Handmatig ingevoerde inkomsten en uitgaven", "Categorieën van uitgaven en inkomsten", "Schuldeninformatie (schuldbedrag, crediteur, aflossingsstatus)", "Budgetinstellingen (potjes, spaardoelen)"]
        },
        {
          subtitle: "2.3 Communicatiegegevens",
          list: ["Chatberichten via de Adempauze-functie", "E-mailcorrespondentie met ons supportteam", "Contactgegevens bij bemiddeling met crediteuren"]
        },
        {
          subtitle: "2.4 Technische gegevens",
          list: ["IP-adres", "Browsertype en versie", "Apparaattype (mobiel, desktop)", "Gebruiksgegevens (bijvoorbeeld welke functies u gebruikt)", "Cookies en vergelijkbare technologieën"]
        },
        {
          subtitle: "2.5 Gegevens voor Konsensi Hulp Radar",
          list: ["Situatiebeschrijving (optioneel)", "Hulpvraag", "Gegevens gedeeld met hulporganisaties (naam, postcode, contactgegevens, BSN indien noodzakelijk)"]
        }
      ]
    },
    {
      title: "3. WAAROM VERZAMELEN WIJ DEZE GEGEVENS? (RECHTSGRONDSLAG)",
      content: "Wij verwerken uw persoonsgegevens alleen als daar een geldige rechtsgrondslag voor is:",
      subsections: [
        {
          subtitle: "3.1 Uitvoering van de overeenkomst",
          content: "Om onze diensten aan u te kunnen leveren, zoals:",
          list: ["Het beheren van uw account", "Het beheren van uw budget en financiële overzichten", "Het bieden van budgetadvies", "Het bemiddelen bij schuldhulp", "Het verbinden met hulporganisaties (Hulp Radar)"]
        },
        {
          subtitle: "3.2 Toestemming",
          content: "Voor bepaalde verwerkingen vragen wij expliciet uw toestemming, zoals:",
          list: ["Het versturen van marketingcommunicatie", "Het delen van uw gegevens met specifieke partnerorganisaties", "Het plaatsen van niet-noodzakelijke cookies"],
          note: "U kunt uw toestemming te allen tijde intrekken via de instellingen in de app of door contact met ons op te nemen."
        },
        {
          subtitle: "3.3 Wettelijke verplichting",
          content: "In sommige gevallen zijn wij wettelijk verplicht om gegevens te verwerken, zoals:",
          list: ["Fiscale administratie", "Identificatieplicht waar van toepassing", "Gegevensbewaring conform wetgeving"]
        },
        {
          subtitle: "3.4 Gerechtvaardigd belang",
          content: "Voor bepaalde doeleinden hebben wij een gerechtvaardigd belang, zoals:",
          list: ["Het verbeteren van onze diensten", "Het voorkomen van fraude en misbruik", "Het analyseren van gebruiksstatistieken (geanonimiseerd)", "Het waarborgen van de veiligheid van het platform"]
        }
      ]
    },
    {
      title: "4. MET WIE DELEN WIJ UW GEGEVENS?",
      content: "Wij delen uw gegevens alleen wanneer dit noodzakelijk is voor onze dienstverlening of wanneer u hier toestemming voor heeft gegeven.",
      subsections: [
        {
          subtitle: "4.1 Dienstverleners",
          list: ["Hostingproviders: Voor het hosten van de applicatie en database", "Base44: Het platform waarop de app is gebouwd", "E-mail dienstverleners: Voor het versturen van notificaties"],
          note: "Deze partijen verwerken gegevens uitsluitend volgens onze instructies en hebben een verwerkersovereenkomst met ons."
        },
        {
          subtitle: "4.2 Partnerorganisaties",
          content: "Met uw expliciete toestemming delen wij gegevens met:",
          list: ["Gemeenten: Voor subsidiëring en monitoring van schuldhulptrajecten (alleen wanneer u via gemeente-programma deelneemt)", "Schuldhulporganisaties: Bij gebruik van de Hulp Radar", "Incassobureaus: Bij bemiddeling voor betalingsregelingen (alleen met uw toestemming)"]
        },
        {
          subtitle: "4.3 Wettelijke verplichting",
          content: "Wij kunnen verplicht zijn om gegevens te delen met:",
          list: ["Toezichthouders (bijv. Autoriteit Persoonsgegevens)", "Justitie en politie (bij gerechtelijk bevel)", "Belastingdienst"]
        },
        {
          subtitle: "4.4 Gegevens worden NOOIT gedeeld met:",
          list: ["Commerciële partijen voor marketingdoeleinden zonder uw toestemming", "Databrokers", "Advertentienetwerken (zonder uw toestemming)", "Sociale media platforms (zonder uw toestemming)"]
        }
      ]
    },
    {
      title: "5. HOE BEVEILIGEN WIJ UW GEGEVENS?",
      content: "Wij nemen de beveiliging van uw gegevens zeer serieus en hebben passende technische en organisatorische maatregelen getroffen:",
      subsections: [
        {
          subtitle: "5.1 Technische maatregelen",
          list: ["Encryptie: Alle gegevens worden versleuteld opgeslagen (AES-256) en verzonden via HTTPS/TLS", "Toegangscontrole: Alleen geautoriseerde medewerkers hebben toegang tot persoonsgegevens op basis van need-to-know principe", "Firewalls en beveiligingssoftware: Tegen ongeautoriseerde toegang", "Regelmatige back-ups: Om gegevensverlies te voorkomen", "Two-factor authenticatie: Voor toegang tot kritieke systemen"]
        },
        {
          subtitle: "5.2 Organisatorische maatregelen",
          list: ["Alle medewerkers zijn gebonden aan geheimhouding", "Privacy by design en by default principes", "Regelmatige security audits", "Incidentresponsplan bij datalekken", "Datalekken worden binnen 72 uur gemeld aan de Autoriteit Persoonsgegevens"]
        },
        {
          subtitle: "5.3 Beveiliging bij partners",
          list: ["Alle partners zijn AVG-compliant", "Verwerkersovereenkomsten met strenge beveiligingseisen", "Periodieke evaluatie van partners"]
        }
      ]
    },
    {
      title: "6. HOE LANG BEWAREN WIJ UW GEGEVENS?",
      content: "Wij bewaren uw gegevens niet langer dan noodzakelijk. Na afloop van de bewaartermijn worden uw gegevens veilig verwijderd of geanonimiseerd.",
      note: "Bij beëindiging van uw account worden uw gegevens binnen 1 maand verwijderd, behalve gegevens die wij wettelijk verplicht zijn te bewaren.",
      table: [
        { type: "Accountgegevens", period: "Zolang uw account actief is + 1 maand na sluiting" },
        { type: "Financiële gegevens (handmatig ingevoerd)", period: "Zolang account actief + 7 jaar (fiscale bewaarplicht indien van toepassing)" },
        { type: "Chatberichten (support)", period: "2 jaar na laatste bericht" },
        { type: "Technische logs", period: "12 maanden" },
        { type: "Marketingtoestemming", period: "Totdat u zich uitschrijft" },
        { type: "Hulp Radar gegevens", period: "1 jaar na laatste gebruik" }
      ]
    },
    {
      title: "7. UW RECHTEN",
      content: "Op grond van de AVG heeft u de volgende rechten:",
      subsections: [
        {
          subtitle: "7.1 Recht op inzage (artikel 15 AVG)",
          content: "U heeft het recht om te weten welke persoonsgegevens wij van u verwerken. U kunt een kopie van uw gegevens opvragen."
        },
        {
          subtitle: "7.2 Recht op rectificatie (artikel 16 AVG)",
          content: "U kunt ons verzoeken om onjuiste of onvolledige gegevens te corrigeren. Dit kunt u ook zelf doen in de app via de instellingen."
        },
        {
          subtitle: "7.3 Recht op verwijdering / recht op vergetelheid (artikel 17 AVG)",
          content: "U kunt verzoeken om uw gegevens te laten verwijderen, tenzij wij een wettelijke bewaarplicht hebben (bijvoorbeeld fiscale gegevens voor 7 jaar)."
        },
        {
          subtitle: "7.4 Recht op beperking van verwerking (artikel 18 AVG)",
          content: "U kunt verzoeken om de verwerking van uw gegevens tijdelijk te beperken."
        },
        {
          subtitle: "7.5 Recht op dataportabiliteit (artikel 20 AVG)",
          content: "U heeft het recht om uw gegevens in een gestructureerd, gangbaar en machineleesbaar formaat (zoals CSV of JSON) te ontvangen."
        },
        {
          subtitle: "7.6 Recht van bezwaar (artikel 21 AVG)",
          content: "U kunt bezwaar maken tegen de verwerking van uw gegevens op basis van gerechtvaardigd belang of voor direct marketing doeleinden."
        },
        {
          subtitle: "7.7 Recht om toestemming in te trekken (artikel 7 AVG)",
          content: "Als wij uw gegevens verwerken op basis van toestemming, kunt u deze te allen tijde intrekken zonder dat dit gevolgen heeft voor de rechtmatigheid van de verwerking vóór de intrekking."
        },
        {
          subtitle: "7.8 Hoe oefent u uw rechten uit?",
          content: "U kunt uw rechten uitoefenen door:",
          list: ["Een e-mail te sturen naar privacy@konsensi-budgetbeheer.nl", "Via de instellingen in de app (voor bepaalde rechten zoals rectificatie en verwijdering)"],
          note: "Wij reageren binnen 30 dagen op uw verzoek. In complexe gevallen kunnen wij deze termijn met 60 dagen verlengen, waarvan wij u op de hoogte stellen. Voor uw veiligheid kunnen wij om identificatie vragen voordat wij uw verzoek in behandeling nemen."
        }
      ]
    },
    {
      title: "8. COOKIES EN TRACKING",
      content: "Wij gebruiken cookies en vergelijkbare technologieën om de functionaliteit van het platform te verbeteren en uw gebruikservaring te optimaliseren.",
      subsections: [
        {
          subtitle: "8.1 Soorten cookies",
          cookieTypes: [
            {
              name: "Noodzakelijke cookies (geen toestemming vereist)",
              description: "Deze cookies zijn essentieel voor het functioneren van de app:",
              items: ["Sessie cookies voor inloggen", "Beveiligingscookies", "Voorkeurscookies (taalinstellingen)"]
            },
            {
              name: "Analytische cookies (toestemming vereist)",
              description: "Om te begrijpen hoe gebruikers onze diensten gebruiken. Wij gebruiken hiervoor privacy-vriendelijke analytics (geen IP-tracking, geanonimiseerd)."
            },
            {
              name: "Marketing cookies (toestemming vereist)",
              description: "Voor gerichte advertenties. Deze worden alleen geplaatst met uw expliciete toestemming."
            }
          ]
        },
        {
          subtitle: "8.2 Cookiebeheer",
          content: "U kunt uw cookievoorkeuren beheren via:",
          list: ["De cookiebanner bij uw eerste bezoek", "De instellingen in de app", "Uw browserinstellingen"],
          note: "Let op: het uitschakelen van noodzakelijke cookies kan de functionaliteit van de app beperken."
        },
        {
          subtitle: "8.3 Cookiebanner",
          content: "Bij uw eerste bezoek krijgt u een cookiebanner te zien waarin u uw voorkeuren kunt aangeven. U kunt deze voorkeuren te allen tijde wijzigen."
        }
      ]
    },
    {
      title: "9. GEGEVENS VAN MINDERJARIGEN",
      content: "Onze diensten zijn bedoeld voor personen van 18 jaar en ouder. Wij verzamelen niet bewust gegevens van personen jonger dan 18 jaar.",
      note: "Als u vermoedt dat wij per ongeluk gegevens van een minderjarige hebben verzameld, neem dan contact met ons op via privacy@konsensi-budgetbeheer.nl, zodat wij deze gegevens kunnen verwijderen."
    },
    {
      title: "10. INTERNATIONALE GEGEVENSOVERDRACHT",
      content: "Wij streven ernaar om uw gegevens binnen de Europese Economische Ruimte (EER) te verwerken.",
      note: "In bepaalde gevallen kunnen gegevens worden verwerkt door dienstverleners buiten de EER. In dat geval zorgen wij ervoor dat:",
      list: ["Er passende waarborgen zijn (zoals EU Standaard Contractuele Clausules)", "Het niveau van gegevensbescherming vergelijkbaar is met de AVG", "U hierover geïnformeerd wordt"]
    },
    {
      title: "11. GEAUTOMATISEERDE BESLUITVORMING EN PROFILING",
      content: "Wij gebruiken geen geautomatiseerde besluitvorming die juridische gevolgen heeft voor u of u op vergelijkbare wijze significant beïnvloedt.",
      note: "Wel gebruiken wij algoritmes voor:",
      list: ["Automatische categorisatie van handmatig ingevoerde transacties (niet-bindend, u kunt dit aanpassen)", "Budgetsuggesties (adviserend, geen bindende beslissingen)", "Matching met hulporganisaties (Hulp Radar)"],
      footer: "Deze processen zijn transparant en u heeft altijd de mogelijkheid om handmatig aanpassingen te maken."
    },
    {
      title: "12. WIJZIGINGEN IN DEZE PRIVACY POLICY",
      content: "Wij kunnen deze Privacy Policy van tijd tot tijd aanpassen om te voldoen aan nieuwe wetgeving of om wijzigingen in onze diensten te weerspiegelen.",
      note: "Wijzigingen worden minimaal 30 dagen van tevoren gecommuniceerd via:",
      list: ["E-mail naar uw geregistreerde e-mailadres", "Een melding in de app", "Een notificatie op de website"],
      footer: "Materiële wijzigingen (zoals wijzigingen in het doel van gegevensverwerking) vragen opnieuw uw toestemming waar nodig.",
      version: {
        lastUpdate: "20 oktober 2025",
        version: "1.0"
      }
    },
    {
      title: "13. KLACHTEN EN CONTACT",
      subsections: [
        {
          subtitle: "13.1 Vragen over uw privacy?",
          content: "Voor vragen over deze Privacy Policy of over hoe wij met uw gegevens omgaan, kunt u contact opnemen via:",
          contactList: [
            "E-mail: privacy@konsensi-budgetbeheer.nl",
            "Algemeen contact: info@konsensi-budgetbeheer.nl",
            "Website: https://konsensi-budgetbeheer.nl",
            "Post: Darlingstraat 371, 1102MX Amsterdam"
          ],
          note: "Wij streven ernaar om binnen 5 werkdagen te reageren op uw vraag."
        },
        {
          subtitle: "13.2 Klacht bij de toezichthouder",
          content: "Als u niet tevreden bent over hoe wij met uw gegevens omgaan, heeft u het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens:",
          authority: {
            name: "Autoriteit Persoonsgegevens",
            address: "Postbus 93374",
            city: "2509 AJ Den Haag",
            website: "https://autoriteitpersoonsgegevens.nl",
            phone: "088 - 1805 250"
          },
          note: "Wij verzoeken u echter om eerst contact met ons op te nemen, zodat wij samen naar een oplossing kunnen zoeken."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="bg-[#265e3e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-[#b3fe78]">
            Konsensi BudgetBeheer B.V.
          </p>
          <p className="text-white mt-2">
            Versie 1.0 - Geldig vanaf 20 oktober 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#265e3e]">
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {section.contactInfo && (
                  <div className="bg-[#b3fe78] rounded-xl p-6 space-y-2">
                    <p className="font-semibold text-[#265e3e]">{section.contactInfo.company}</p>
                    <p className="text-[#265e3e]">{section.contactInfo.address}</p>
                    <p className="text-[#265e3e]">{section.contactInfo.city}</p>
                    <p className="text-[#265e3e]">{section.contactInfo.kvk}</p>
                    <p className="text-[#265e3e]">E-mail: {section.contactInfo.email}</p>
                    <p className="text-[#265e3e]">Website: {section.contactInfo.website}</p>
                  </div>
                )}

                {section.list && (
                  <ul className="space-y-2 ml-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-[#b3fe78] mr-3 mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#265e3e] text-white">
                          <th className="p-4 text-left font-semibold">Type gegevens</th>
                          <th className="p-4 text-left font-semibold">Bewaartermijn</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="p-4 text-gray-700">{row.type}</td>
                            <td className="p-4 text-gray-700">{row.period}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.subsections && section.subsections.map((subsection, j) => (
                  <div key={j} className="ml-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#265e3e]">
                      {subsection.subtitle}
                    </h3>
                    {subsection.content && (
                      <p className="text-gray-700 leading-relaxed">
                        {subsection.content}
                      </p>
                    )}
                    {subsection.list && (
                      <ul className="space-y-2 ml-6">
                        {subsection.list.map((item, k) => (
                          <li key={k} className="text-gray-700 leading-relaxed flex items-start">
                            <span className="text-[#b3fe78] mr-3 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {subsection.contactList && (
                      <ul className="space-y-2 ml-6">
                        {subsection.contactList.map((item, k) => (
                          <li key={k} className="text-gray-700 leading-relaxed flex items-start">
                            <span className="text-[#b3fe78] mr-3 mt-1">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {subsection.authority && (
                      <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                        <p className="font-semibold text-[#265e3e]">{subsection.authority.name}</p>
                        <p className="text-gray-700">{subsection.authority.address}</p>
                        <p className="text-gray-700">{subsection.authority.city}</p>
                        <p className="text-gray-700">Website: {subsection.authority.website}</p>
                        <p className="text-gray-700">Telefoon: {subsection.authority.phone}</p>
                      </div>
                    )}
                    {subsection.cookieTypes && subsection.cookieTypes.map((cookieType, l) => (
                      <div key={l} className="ml-6 space-y-2">
                        <p className="font-semibold text-[#265e3e]">{cookieType.name}</p>
                        <p className="text-gray-700">{cookieType.description}</p>
                        {cookieType.items && (
                          <ul className="space-y-2 ml-6">
                            {cookieType.items.map((item, m) => (
                              <li key={m} className="text-gray-700 leading-relaxed flex items-start">
                                <span className="text-[#b3fe78] mr-3 mt-1">●</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    {subsection.note && (
                      <p className="text-gray-600 italic mt-4">
                        {subsection.note}
                      </p>
                    )}
                  </div>
                ))}

                {section.note && (
                  <p className="text-gray-600 italic mt-4">
                    {section.note}
                  </p>
                )}

                {section.footer && (
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {section.footer}
                  </p>
                )}

                {section.version && (
                  <div className="bg-[#b3fe78] rounded-xl p-6 mt-6">
                    <p className="text-[#265e3e] font-semibold">Laatste update: {section.version.lastUpdate}</p>
                    <p className="text-[#265e3e]">Versie: {section.version.version}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-[#265e3e] text-xl font-bold mb-2">
              Konsensi BudgetBeheer B.V.
            </p>
            <p className="text-[#b3fe78] font-semibold">
              Het bouwen van vertrouwen
            </p>
            <p className="text-gray-600 mt-4">
              © 2025 Konsensi Budgetbeheer. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}