import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { FileText, Image, Upload, Trash2, Plus } from "lucide-react";

export default function PilotDownloadsBeheer() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    titel: "",
    beschrijving: "",
    type: "pdf",
    bestand_url: "",
    is_actief: true
  });

  const { data: downloads = [], isLoading } = useQuery({
    queryKey: ["allPilotDownloads"],
    queryFn: () => base44.entities.PilotDownload.list(),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.PilotDownload.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPilotDownloads"] });
      setShowForm(false);
      setFormData({ titel: "", beschrijving: "", type: "pdf", bestand_url: "", is_actief: true });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.PilotDownload.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allPilotDownloads"] })
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.PilotDownload.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allPilotDownloads"] })
  });

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setFormData({ ...formData, bestand_url: file_url });
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#265e3e]">Pilot Downloads Beheer</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#265e3e] hover:bg-[#1a4329] text-white rounded-full gap-2"
          >
            <Plus className="w-4 h-4" />
            Nieuw document
          </Button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-[#265e3e] mb-6">Nieuw document toevoegen</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titel *</label>
                <Input
                  required
                  value={formData.titel}
                  onChange={(e) => setFormData({ ...formData, titel: e.target.value })}
                  placeholder="Titel van het document"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beschrijving</label>
                <Textarea
                  value={formData.beschrijving}
                  onChange={(e) => setFormData({ ...formData, beschrijving: e.target.value })}
                  placeholder="Korte beschrijving..."
                  className="h-20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="infographic">Infographic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bestand *</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-[#F5F7F0] rounded-lg cursor-pointer hover:bg-[#e8ebe3] transition-colors">
                    <Upload className="w-4 h-4 text-[#265e3e]" />
                    <span className="text-sm text-[#265e3e]">
                      {uploading ? "Uploaden..." : "Kies bestand"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {formData.bestand_url && (
                    <span className="text-sm text-green-600">✓ Bestand geüpload</span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={!formData.titel || !formData.bestand_url || createMutation.isPending}
                  className="bg-[#265e3e] hover:bg-[#1a4329] text-white rounded-full"
                >
                  {createMutation.isPending ? "Opslaan..." : "Opslaan"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="rounded-full"
                >
                  Annuleren
                </Button>
              </div>
            </form>
          </div>
        )}

        {isLoading ? (
          <p className="text-gray-500">Laden...</p>
        ) : downloads.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Nog geen downloads toegevoegd.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {downloads.map((download) => (
              <div key={download.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b3fe78]/30 rounded-lg flex items-center justify-center">
                  {download.type === "pdf" ? (
                    <FileText className="w-6 h-6 text-[#265e3e]" />
                  ) : (
                    <Image className="w-6 h-6 text-[#265e3e]" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#265e3e]">{download.titel}</h3>
                  <p className="text-sm text-gray-500">{download.type === "pdf" ? "PDF" : "Infographic"}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Actief</span>
                    <Switch
                      checked={download.is_actief}
                      onCheckedChange={(checked) => updateMutation.mutate({ id: download.id, data: { is_actief: checked } })}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(download.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}