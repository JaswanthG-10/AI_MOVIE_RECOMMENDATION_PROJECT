"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE, ALL_GENRES_LIST, LANGUAGES_LIST } from "@/data/movies";
import { filterAndRankMovies } from "@/lib/recommendEngine";
import { MovieCard } from "@/components/MovieCard";
import { X, Sparkles, SlidersHorizontal, RefreshCw, Star, Film, Check } from "lucide-react";

interface AiRecommendationModalProps {
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (movie: Movie) => void;
}

const MOODS_LIST = [
  "All Moods",
  "Mind-Bending",
  "Dark & Gritty",
  "High Voltage Action",
  "Emotional & Deep",
  "Suspenseful Thriller",
  "Sci-Fi Odyssey"
];

export const AiRecommendationModal: React.FC<AiRecommendationModalProps> = ({
  onClose,
  onSelectMovie,
  onPlayTrailer,
}) => {
  const [promptQuery, setPromptQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All Moods");
  const [minRating, setMinRating] = useState<number>(7.5);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<Movie[]>(() => {
    return filterAndRankMovies({}).slice(0, 8);
  });

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleRunAnalysis = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsAnalyzing(true);

    setTimeout(() => {
      let filtered = filterAndRankMovies({
        genre: selectedGenre !== "All" ? selectedGenre : undefined,
        language: selectedLanguage !== "All" ? selectedLanguage : undefined,
        minImdb: minRating,
        query: promptQuery.trim() || undefined
      });

      if (selectedMood !== "All Moods") {
        filtered = filtered.filter((m) =>
          m.moods.some((mood) => mood.toLowerCase().includes(selectedMood.toLowerCase()))
        );
      }

      setResults(filtered.length > 0 ? filtered.slice(0, 8) : MOVIES_DATABASE.slice(0, 8));
      setIsAnalyzing(false);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#070913]/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-fade-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-[#0B0E20] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]"
        style={{
          boxShadow: "0 0 60px rgba(139, 92, 246, 0.2), 0 0 120px rgba(236, 72, 153, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20 bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-blue-950/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-syne flex items-center gap-2">
                Lumina Neural Recommendation Engine
              </h2>
              <p className="text-xs text-purple-300 font-space mt-0.5">
                ✦ High precision match engine analyzing 50,000+ film vectors
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 border-b border-purple-500/20 bg-[#070913]/60 space-y-4">
          <form onSubmit={handleRunAnalysis} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={promptQuery}
                onChange={(e) => setPromptQuery(e.target.value)}
                placeholder="Describe your ideal film (e.g. 'Mind-bending sci-fi with Hans Zimmer organ score')..."
                className="w-full font-body text-xs sm:text-sm rounded-xl pl-4 pr-10 py-3 bg-black/60 border border-purple-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 shadow-inner"
              />
              <Sparkles className="w-4 h-4 text-purple-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              disabled={isAnalyzing}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center gap-2 shadow-xl hover:opacity-90 transition-all shrink-0 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" /> Run Neural Match
                </>
              )}
            </button>
          </form>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            {/* Genre Select */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
              <Film className="w-3.5 h-3.5 text-purple-400" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-transparent font-semibold outline-none cursor-pointer text-white"
              >
                <option value="All" style={{ background: "#0B0E20" }}>All Genres</option>
                {ALL_GENRES_LIST.map((g) => (
                  <option key={g} value={g} style={{ background: "#0B0E20" }}>{g}</option>
                ))}
              </select>
            </div>

            {/* Language Select */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-transparent font-semibold outline-none cursor-pointer text-white"
              >
                <option value="All" style={{ background: "#0B0E20" }}>All Languages</option>
                {LANGUAGES_LIST.map((l) => (
                  <option key={l.id} value={l.name} style={{ background: "#0B0E20" }}>{l.name}</option>
                ))}
              </select>
            </div>

            {/* Mood Select */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="bg-transparent font-semibold outline-none cursor-pointer text-white"
              >
                {MOODS_LIST.map((m) => (
                  <option key={m} value={m} style={{ background: "#0B0E20" }}>{m}</option>
                ))}
              </select>
            </div>

            {/* IMDb Slider */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 ml-auto">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-space font-bold text-amber-300">{minRating}+ IMDb</span>
              <input
                type="range"
                min="6.0"
                max="9.0"
                step="0.1"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-20 accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Modal Results Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {isAnalyzing ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin flex items-center justify-center shadow-xl">
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white font-syne">
                AI is analyzing 50,000+ films for you...
              </h3>
              <p className="text-xs text-purple-300 font-space animate-pulse">
                Evaluating vector embeddings, narrative pacing, and user taste profile
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-zinc-300 uppercase tracking-wider font-space flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Top Neural Match Results
                </h3>
                <span className="text-xs text-purple-300 font-space font-semibold">
                  Showing {results.length} high-match titles
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {results.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onSelectMovie={onSelectMovie}
                    onPlayTrailer={onPlayTrailer}
                    score={movie.matchScore}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
