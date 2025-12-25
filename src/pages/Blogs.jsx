
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState(null);
  const blogsPerPage = 6;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const { data: allBlogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => base44.entities.Blog.filter({ status: 'published' }, '-publish_date')
  });

  const featuredBlog = allBlogs.find(blog => blog.is_featured);
  const regularBlogs = allBlogs.filter(blog => !blog.is_featured);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = regularBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(regularBlogs.length / blogsPerPage);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return format(new Date(dateString), 'd MMMM yyyy', { locale: nl });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#265e3e] mx-auto mb-4"></div>
            <p className="text-gray-600">Blogs laden...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (allBlogs.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#265e3e] rounded-3xl p-12 md:p-16">
              <FileText className="w-16 h-16 text-[#b3fe78] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nog geen blogs beschikbaar
              </h2>
              <p className="text-[#b3fe78] text-lg mb-8">
                Er zijn nog geen blogs gepubliceerd. Check binnenkort terug voor interessante artikelen over budgetbeheer en financiële tips!
              </p>
              {user?.role === 'admin' && (
                <Link to={createPageUrl("BlogBeheer")}>
                  <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8">
                    Eerste blog publiceren
                  </Button>
                </Link>
              )}
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

      {/* Featured Blog Hero */}
      {featuredBlog && (
        <section className="relative h-[500px] bg-[#265e3e] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={featuredBlog.image_url || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000"}
              alt={featuredBlog.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#265e3e] to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="inline-block bg-[#b3fe78] text-[#265e3e] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Gepubliceerd op: {formatDate(featuredBlog.publish_date)}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {featuredBlog.title}
              </h1>
              <p className="text-xl mb-8 text-white">
                {featuredBlog.description}
              </p>
              <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8">
                Lees meer
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Blogs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#265e3e]">
              Bekijk onze blogs
            </h2>
            {user?.role === 'admin' && (
              <Link to={createPageUrl("BlogBeheer")}>
                <Button className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full">
                  Beheer blogs
                </Button>
              </Link>
            )}
          </div>

          {currentBlogs.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:transform hover:scale-105 cursor-pointer"
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={blog.image_url || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800"}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block bg-[#b3fe78] text-[#265e3e] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {formatDate(blog.publish_date)}
                      </div>
                      <h3 className="text-xl font-bold text-[#265e3e] mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.description}
                      </p>
                      <Button variant="link" className="text-[#265e3e] hover:text-[#b3fe78] p-0 font-semibold">
                        Lees meer →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-12">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-12 h-12 rounded-full font-semibold transition-all ${
                        currentPage === index + 1
                          ? 'bg-[#b3fe78] text-[#265e3e]'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Geen blogs gevonden op deze pagina.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
