import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Upload, Trash2, Plus, Building2 } from "lucide-react";

export default function PartnersBeheer() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    naam: "",
    logo_url: "",
    type_organisatie: "overig",
    website: "",
    datum_toegetreden: new Date().toISOString().split("T")[0],
    is_actief: true
  });

  const { data: partners = [], isLoading } = useQuery({
    queryKey: ["allPartners"],
    queryFn: () => base44.entities.PilotPartner.list("-datum_toegetreden"),
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.PilotPartner.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPartners"] });
      setShowForm(false);
      setFormData({
        naam: "",
        logo_url: "",
        type_organisatie: "overig",
        website: "",
        datum_toegetreden: new Date().toISOString().split("T")[0],
        is_actief: true
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.PilotPartner.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allPartners"] })
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.PilotPartner.delete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["allPartners"] })
  });

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setFormData({ ...formData, logo_url: file_url });
    setUploading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation.mutate(formData);
  };

  const organisatieTypes = [
    { value: "gemeente", label: "Gemeente" },
    { value: "incassobureau", label: "Incassobureau" },
    { value: "schuldhulporganisatie", label: "Schuldhulporganisatie" },
    { value: "budgetcoach", label: "Budgetcoach" },
    { value: "financiele_instelling", label: "Financiële instelling" },
    { value: "overig", label: "Overig" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#265e3e]">Partners Beheer</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#265e3e] hover:bg-[#1a4329] text-white rounded-full gap-2"
          >
            <Plus className="w-4 h-4" />
            Nieuwe partner
          </Button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-[#265e3e] mb-6">Nieuwe partner toevoegen</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Naam organisatie *</label>
                  <Input
                    required
                    value={formData.naam}
                    onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
                    placeholder="Naam van de organisatie"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type organisatie *</label>
                  <Select
                    value={formData.type_organisatie}
                    onValueChange={(value) => setFormData({ ...formData, type_organisatie: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {organisatieTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <Input
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://www.organisatie.nl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datum toegetreden</label>
                  <Input
                    type="date"
                    value={formData.datum_toegetreden}
                    onChange={(e) => setFormData({ ...formData, datum_toegetreden: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-[#F5F7F0] rounded-lg cursor-pointer hover:bg-[#e8ebe3] transition-colors">
                    <Upload className="w-4 h-4 text-[#265e3e]" />
                    <span className="text-sm text-[#265e3e]">
                      {uploading ? "Uploaden..." : "Upload logo"}
                    </span>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg,.svg,.webp"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                  {formData.logo_url && (
                    <img src={formData.logo_url} alt="Preview" className="h-12 w-auto object-contain" />
                  )}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={!formData.naam || createMutation.isPending}
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
        ) : partners.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Nog geen partners toegevoegd.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-4">
                {partner.logo_url ? (
                  <img src={partner.logo_url} alt={partner.naam} className="w-16 h-12 object-contain" />
                ) : (
                  <div className="w-16 h-12 bg-[#265e3e]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#265e3e]" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-[#265e3e]">{partner.naam}</h3>
                  <p className="text-sm text-gray-500">
                    {organisatieTypes.find(t => t.value === partner.type_organisatie)?.label}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Actief</span>
                    <Switch
                      checked={partner.is_actief}
                      onCheckedChange={(checked) => updateMutation.mutate({ id: partner.id, data: { is_actief: checked } })}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMutation.mutate(partner.id)}
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