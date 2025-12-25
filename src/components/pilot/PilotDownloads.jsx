import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { FileText, Image, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PilotDownloads() {
  const { data: downloads = [], isLoading } = useQuery({
    queryKey: ["pilotDownloads"],
    queryFn: () => base44.entities.PilotDownload.filter({ is_actief: true }),
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-[#F5F7F0]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">Laden...</p>
        </div>
      </section>
    );
  }

  if (downloads.length === 0) {
    return null;
  }

  const getIcon = (type) => {
    return type === "pdf" ? (
      <FileText className="w-8 h-8 text-[#265e3e]" />
    ) : (
      <Image className="w-8 h-8 text-[#265e3e]" />
    );
  };

  const getTypeLabel = (type) => {
    return type === "pdf" ? "PDF Document" : "Infographic";
  };

  return (
    <section className="py-16 bg-[#F5F7F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📥 Downloads
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-4">
            Meer informatie over de pilot
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download onze informatieve documenten om meer te leren over de Konsensi pilot en hoe we je kunnen helpen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {downloads.map((download) => (
            <div
              key={download.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#b3fe78]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  {getIcon(download.type)}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-[#265e3e] bg-[#265e3e]/10 px-2 py-1 rounded">
                    {getTypeLabel(download.type)}
                  </span>
                  <h3 className="text-lg font-bold text-[#265e3e] mt-2">
                    {download.titel}
                  </h3>
                  {download.beschrijving && (
                    <p className="text-gray-600 text-sm mt-1">
                      {download.beschrijving}
                    </p>
                  )}
                  <a
                    href={download.bestand_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button className="mt-4 bg-[#265e3e] hover:bg-[#1a4329] text-white rounded-full gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}