import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, CheckCircle2, Clock, MessageSquare, Send } from "lucide-react";
import { format } from "date-fns";
import { nl } from "date-fns/locale";

export default function LessonPlayer({ lesson, onClose, user }) {
  const [questionText, setQuestionText] = useState("");
  const [isSubmittingQuestion, setIsSubmittingQuestion] = useState(false);
  const queryClient = useQueryClient();

  // Fetch user's progress for this lesson
  const { data: progress } = useQuery({
    queryKey: ['lesson-progress', lesson.id, user?.email],
    queryFn: async () => {
      const results = await base44.entities.GebruikerLesVoortgang.filter({
        lesson_id: lesson.id,
        user_email: user.email
      });
      return results[0] || null;
    },
    enabled: !!user
  });

  // Fetch questions for this lesson
  const { data: questions = [] } = useQuery({
    queryKey: ['lesson-questions', lesson.id],
    queryFn: () => base44.entities.LesVraag.filter({ lesson_id: lesson.id }, '-created_date')
  });

  // Mark lesson as completed
  const markCompletedMutation = useMutation({
    mutationFn: async () => {
      if (progress) {
        await base44.entities.GebruikerLesVoortgang.update(progress.id, {
          is_completed: true,
          progress_percentage: 100,
          completed_date: new Date().toISOString(),
          last_watched_date: new Date().toISOString()
        });
      } else {
        await base44.entities.GebruikerLesVoortgang.create({
          user_email: user.email,
          lesson_id: lesson.id,
          is_completed: true,
          progress_percentage: 100,
          completed_date: new Date().toISOString(),
          last_watched_date: new Date().toISOString()
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['lesson-progress'] });
      queryClient.invalidateQueries({ queryKey: ['user-completed-lessons'] });
    }
  });

  // Submit question
  const submitQuestion = async () => {
    if (!questionText.trim()) return;
    
    setIsSubmittingQuestion(true);
    try {
      await base44.entities.LesVraag.create({
        lesson_id: lesson.id,
        user_email: user.email,
        user_name: user.full_name,
        question_text: questionText
      });
      setQuestionText("");
      queryClient.invalidateQueries({ queryKey: ['lesson-questions', lesson.id] });
    } catch (error) {
      alert('Er ging iets mis bij het versturen van je vraag');
    } finally {
      setIsSubmittingQuestion(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-[#265e3e] mb-2">
                {lesson.title}
              </h2>
              <div className="flex gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#b3fe78] text-[#265e3e] rounded-full text-sm font-semibold">
                  {lesson.category}
                </span>
                {lesson.duration_minutes > 0 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {lesson.duration_minutes} min
                  </span>
                )}
                {progress?.is_completed && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Voltooid
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Video Player */}
          <div className="p-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
              <video
                src={lesson.video_url}
                controls
                className="w-full h-full"
                onEnded={() => {
                  if (!progress?.is_completed) {
                    markCompletedMutation.mutate();
                  }
                }}
              >
                Je browser ondersteunt geen video.
              </video>
            </div>

            {/* Mark as Complete Button */}
            {!progress?.is_completed && (
              <div className="mb-6">
                <Button
                  onClick={() => markCompletedMutation.mutate()}
                  className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Markeer als voltooid
                </Button>
              </div>
            )}

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#265e3e] mb-4">Samenvatting</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {lesson.summary}
                </p>
              </div>
            </div>

            {/* Questions Section */}
            <div>
              <h3 className="text-xl font-bold text-[#265e3e] mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Vragen over deze les
              </h3>

              {/* Ask Question */}
              {user && (
                <div className="bg-[#b3fe78] rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-[#265e3e] mb-3">Stel een vraag</h4>
                  <Textarea
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Typ hier je vraag over deze les..."
                    className="mb-3 bg-white"
                  />
                  <Button
                    onClick={submitQuestion}
                    disabled={isSubmittingQuestion || !questionText.trim()}
                    className="bg-[#265e3e] text-white hover:bg-[#1a4329] rounded-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmittingQuestion ? 'Versturen...' : 'Vraag versturen'}
                  </Button>
                </div>
              )}

              {/* Questions List */}
              <div className="space-y-4">
                {questions.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600">Nog geen vragen gesteld</p>
                  </div>
                ) : (
                  questions.map((q) => (
                    <div key={q.id} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#265e3e] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {q.user_name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-[#265e3e]">{q.user_name}</span>
                            <span className="text-sm text-gray-500">
                              {format(new Date(q.created_date), 'd MMM yyyy', { locale: nl })}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-3">{q.question_text}</p>
                          
                          {q.is_answered && q.answer_text && (
                            <div className="bg-[#b3fe78] rounded-lg p-4 mt-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold text-[#265e3e]">Antwoord van coach:</span>
                              </div>
                              <p className="text-[#265e3e]">{q.answer_text}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}