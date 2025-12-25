import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Upload, Video, ShieldAlert } from "lucide-react";

export default function LessenBeheer() {
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    video_url: "",
    summary: "",
    category: "basisbudgettering",
    order: 1,
    duration_minutes: 0,
    is_published: false
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  const { data: lessons = [], isLoading } = useQuery({
    queryKey: ['all-lessons'],
    queryFn: () => base44.entities.Les.list('-created_date'),
    enabled: user?.role === 'admin'
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Les.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-lessons'] });
      resetForm();
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Les.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-lessons'] });
      resetForm();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Les.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-lessons'] });
    }
  });

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      alert('Selecteer alstublieft een video bestand');
      return;
    }

    setIsUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setFormData({ ...formData, video_url: file_url });
    } catch (error) {
      alert('Er ging iets mis bij het uploaden van de video');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingLesson) {
      updateMutation.mutate({ id: editingLesson.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (lesson) => {
    setEditingLesson(lesson);
    setFormData({
      title: lesson.title,
      description: lesson.description,
      video_url: lesson.video_url,
      summary: lesson.summary,
      category: lesson.category,
      order: lesson.order || 1,
      duration_minutes: lesson.duration_minutes || 0,
      is_published: lesson.is_published
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      video_url: "",
      summary: "",
      category: "basisbudgettering",
      order: 1,
      duration_minutes: 0,
      is_published: false
    });
    setEditingLesson(null);
    setShowForm(false);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      basisbudgettering: "Basisbudgettering",
      schulden: "Omgaan met schulden",
      sparen: "Sparen",
      investeren: "Investeren",
      overig: "Overig"
    };
    return labels[category] || category;
  };

  // Checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#265e3e] mx-auto mb-4"></div>
            <p className="text-gray-600">Toegang controleren...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Not authorized
  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#265e3e] rounded-3xl p-12 md:p-16">
              <ShieldAlert className="w-16 h-16 text-[#b3fe78] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Geen toegang
              </h2>
              <p className="text-[#b3fe78] text-lg mb-8">
                Je hebt geen toegang tot deze pagina. Alleen beheerders kunnen lessen beheren.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8"
              >
                Terug naar home
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-[#265e3e]">Lessen Beheer</h1>
            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nieuwe les
            </Button>
          </div>

          {/* Lesson Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#265e3e] mb-6">
                {editingLesson ? 'Les bewerken' : 'Nieuwe les maken'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titel *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Les titel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Korte beschrijving *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Korte beschrijving van de les"
                    className="h-24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video uploaden *
                  </label>
                  <div className="space-y-3">
                    {formData.video_url ? (
                      <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <Video className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-800">Video succesvol geüpload</span>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() => setFormData({ ...formData, video_url: "" })}
                        >
                          Verwijder
                        </Button>
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type="file"
                          accept="video/*"
                          onChange={handleFileUpload}
                          disabled={isUploading}
                          className="hidden"
                          id="video-upload"
                        />
                        <label
                          htmlFor="video-upload"
                          className={`flex items-center justify-center gap-3 p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#265e3e] transition-colors ${
                            isUploading ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <Upload className="w-6 h-6 text-gray-400" />
                          <span className="text-gray-600">
                            {isUploading ? 'Video uploaden...' : 'Klik om video te uploaden'}
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Samenvatting van de les *
                  </label>
                  <Textarea
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Volledige samenvatting van wat er in de les wordt behandeld"
                    className="h-48"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categorie *
                    </label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basisbudgettering">Basisbudgettering</SelectItem>
                        <SelectItem value="schulden">Omgaan met schulden</SelectItem>
                        <SelectItem value="sparen">Sparen</SelectItem>
                        <SelectItem value="investeren">Investeren</SelectItem>
                        <SelectItem value="overig">Overig</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Volgorde
                    </label>
                    <Input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duur (minuten)
                    </label>
                    <Input
                      type="number"
                      value={formData.duration_minutes}
                      onChange={(e) => setFormData({ ...formData, duration_minutes: parseInt(e.target.value) })}
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <Select
                    value={formData.is_published ? "gepubliceerd" : "concept"}
                    onValueChange={(value) => setFormData({ ...formData, is_published: value === "gepubliceerd" })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concept">Concept</SelectItem>
                      <SelectItem value="gepubliceerd">Gepubliceerd</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    className="bg-[#265e3e] text-white hover:bg-[#1a4329]"
                    disabled={!formData.video_url || isUploading}
                  >
                    {editingLesson ? 'Bijwerken' : 'Publiceren'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Annuleren
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Lessons List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#265e3e] mx-auto mb-4"></div>
                <p className="text-gray-600">Lessen laden...</p>
              </div>
            ) : lessons.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">Nog geen lessen aangemaakt</p>
              </div>
            ) : (
              lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#265e3e]">{lesson.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          lesson.is_published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {lesson.is_published ? 'Gepubliceerd' : 'Concept'}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {getCategoryLabel(lesson.category)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{lesson.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        {lesson.duration_minutes > 0 && (
                          <span>⏱️ {lesson.duration_minutes} min</span>
                        )}
                        <span>📋 Volgorde: {lesson.order}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(lesson)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm('Weet je zeker dat je deze les wilt verwijderen?')) {
                            deleteMutation.mutate(lesson.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}