import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import LessonPlayer from "../components/lessons/LessonPlayer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, Play, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Budgetlessen() {
  const [user, setUser] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

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

  const { data: allLessons = [], isLoading } = useQuery({
    queryKey: ['published-lessons'],
    queryFn: () => base44.entities.Les.filter({ is_published: true }, 'order')
  });

  const { data: completedLessons = [] } = useQuery({
    queryKey: ['user-completed-lessons', user?.email],
    queryFn: async () => {
      const progress = await base44.entities.GebruikerLesVoortgang.filter({
        user_email: user.email,
        is_completed: true
      });
      return progress.map(p => p.lesson_id);
    },
    enabled: !!user
  });

  const lessonsByCategory = {
    basisbudgettering: allLessons.filter(l => l.category === 'basisbudgettering'),
    schulden: allLessons.filter(l => l.category === 'schulden'),
    sparen: allLessons.filter(l => l.category === 'sparen'),
    investeren: allLessons.filter(l => l.category === 'investeren'),
    overig: allLessons.filter(l => l.category === 'overig')
  };

  const getCategoryTitle = (category) => {
    const titles = {
      basisbudgettering: "BASISBUDGETTERING",
      schulden: "OMGAAN MET SCHULDEN",
      sparen: "SPAREN",
      investeren: "INVESTEREN",
      overig: "OVERIG"
    };
    return titles[category] || category.toUpperCase();
  };

  const isLessonCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#265e3e] mx-auto mb-4"></div>
            <p className="text-gray-600">Lessen laden...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Als er geen lessen zijn, toon alleen "Binnenkort beschikbaar"
  if (allLessons.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#265e3e] rounded-3xl p-12 md:p-16 text-center shadow-2xl">
              <BookOpen className="w-20 h-20 text-[#b3fe78] mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Binnenkort beschikbaar
              </h1>
              <p className="text-xl text-[#b3fe78] mb-8 max-w-2xl mx-auto">
                We zijn hard aan het werk om geweldige lessen voor je te maken!
              </p>
              {user?.role === 'admin' && (
                <Link to={createPageUrl("LessenBeheer")}>
                  <Button className="bg-[#b3fe78] text-[#265e3e] hover:bg-white font-semibold rounded-full px-8 py-6 text-lg">
                    Eerste les publiceren
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

  // Als er wel lessen zijn, toon de normale pagina
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-[#b3fe78] to-[#a8d5ba] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#265e3e] font-semibold mb-4">Budgetlessen van Konsensi</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#265e3e] mb-6">
            Stap voor stap naar meer grip op je geld.
          </h1>
          <p className="text-lg text-[#265e3e] mb-8 max-w-2xl mx-auto">
            Begrijpelijke lessen die je helpen slimmer te budgetteren, geld te besparen en financieel sterker te worden.
          </p>
          
          {user && (
            <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[#265e3e] font-semibold">Je voortgang</p>
                {user.role === 'admin' && (
                  <Link to={createPageUrl("LessenBeheer")}>
                    <Button size="sm" className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full">
                      Beheer lessen
                    </Button>
                  </Link>
                )}
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-2xl font-bold text-[#265e3e]">
                  {completedLessons.length} / {allLessons.length}
                </span>
                <span className="text-gray-600">lessen voltooid</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#265e3e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Wat maakt onze lessen <span className="text-[#b3fe78]">anders?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#b3fe78] rounded-xl p-6 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#265e3e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#265e3e] font-bold text-lg mb-2">Geen ingewikkeld jargon</h3>
              </div>
            </div>
            
            <div className="bg-[#b3fe78] rounded-xl p-6 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#265e3e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#265e3e] font-bold text-lg mb-2">Direct toepasbaar in je dagelijks leven</h3>
              </div>
            </div>
            
            <div className="bg-[#b3fe78] rounded-xl p-6 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#265e3e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#265e3e] font-bold text-lg mb-2">Met voorbeelden, tools en opdrachten</h3>
              </div>
            </div>
            
            <div className="bg-[#b3fe78] rounded-xl p-6 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#265e3e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#265e3e] font-bold text-lg mb-2">Extra ondersteuning mogelijk via onze coaches</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Object.keys(lessonsByCategory).map((category) => {
        const lessons = lessonsByCategory[category];
        if (lessons.length === 0) return null;

        return (
          <section key={category} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#265e3e] mb-12">
                {getCategoryTitle(category)}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lessons.map((lesson) => {
                  const isCompleted = isLessonCompleted(lesson.id);
                  return (
                    <div
                      key={lesson.id}
                      className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:transform hover:scale-105 cursor-pointer relative"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      {isCompleted && (
                        <div className="absolute top-4 right-4">
                          <CheckCircle2 className="w-8 h-8 text-green-600 fill-green-100" />
                        </div>
                      )}
                      
                      <div className="w-12 h-12 bg-[#b3fe78] rounded-xl flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-[#265e3e]" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#265e3e] mb-3">
                        {lesson.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {lesson.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {lesson.duration_minutes > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span>{lesson.duration_minutes} min</span>
                          </div>
                        )}
                        
                        <Button
                          size="sm"
                          className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Bekijk les
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {selectedLesson && (
        <LessonPlayer
          lesson={selectedLesson}
          onClose={() => setSelectedLesson(null)}
          user={user}
        />
      )}

      <Footer />
    </div>
  );
}