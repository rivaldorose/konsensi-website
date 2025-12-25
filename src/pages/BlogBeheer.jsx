
import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Eye, Star, ShieldAlert } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default function BlogBeheer() {
  const [user, setUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image_url: "",
    publish_date: new Date().toISOString().split('T')[0],
    is_featured: false,
    status: "draft"
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

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['all-blogs'],
    queryFn: () => base44.entities.Blog.list('-created_date'),
    enabled: user?.role === 'admin' // Only fetch blogs if user is an admin
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Blog.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-blogs'] });
      resetForm();
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Blog.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-blogs'] });
      resetForm();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.Blog.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-blogs'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBlog) {
      updateMutation.mutate({ id: editingBlog.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      image_url: blog.image_url || "",
      publish_date: blog.publish_date || new Date().toISOString().split('T')[0],
      is_featured: blog.is_featured,
      status: blog.status
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      content: "",
      image_url: "",
      publish_date: new Date().toISOString().split('T')[0],
      is_featured: false,
      status: "draft"
    });
    setEditingBlog(null);
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'd MMMM yyyy', { locale: nl });
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
                Je hebt geen toegang tot deze pagina. Alleen beheerders kunnen blogs beheren.
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
            <h1 className="text-4xl font-bold text-[#265e3e]">Blog Beheer</h1>
            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nieuwe blog
            </Button>
          </div>

          {/* Blog Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#265e3e] mb-6">
                {editingBlog ? 'Blog bewerken' : 'Nieuwe blog maken'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titel *
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Blog titel"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschrijving *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Korte beschrijving"
                    className="h-24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inhoud *
                  </label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Volledige blog inhoud"
                    className="h-48"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Afbeelding URL
                  </label>
                  <Input
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Publicatiedatum
                    </label>
                    <Input
                      type="date"
                      value={formData.publish_date}
                      onChange={(e) => setFormData({ ...formData, publish_date: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Concept</SelectItem>
                        <SelectItem value="published">Gepubliceerd</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured blog?
                    </label>
                    <Select
                      value={formData.is_featured ? "ja" : "nee"}
                      onValueChange={(value) => setFormData({ ...formData, is_featured: value === "ja" })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nee">Nee</SelectItem>
                        <SelectItem value="ja">Ja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="bg-[#265e3e] text-white hover:bg-[#1a4329]">
                    {editingBlog ? 'Bijwerken' : 'Publiceren'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Annuleren
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Blogs List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#265e3e] mx-auto mb-4"></div>
                <p className="text-gray-600">Blogs laden...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <p className="text-gray-600 text-lg">Nog geen blogs aangemaakt</p>
              </div>
            ) : (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-[#265e3e]">{blog.title}</h3>
                        {blog.is_featured && (
                          <Star className="w-5 h-5 fill-[#b3fe78] text-[#b3fe78]" />
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          blog.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {blog.status === 'published' ? 'Gepubliceerd' : 'Concept'}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{blog.description}</p>
                      <p className="text-sm text-gray-500">
                        Publicatiedatum: {formatDate(blog.publish_date)}
                      </p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(blog)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          if (confirm('Weet je zeker dat je deze blog wilt verwijderen?')) {
                            deleteMutation.mutate(blog.id);
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
