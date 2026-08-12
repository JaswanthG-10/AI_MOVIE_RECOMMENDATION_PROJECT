"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Sparkles, Flame, Star, Trophy, Film, Compass, Clapperboard, Heart, Award } from "lucide-react";

interface HomeDashboardProps {
  selectedLanguage: string;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (trailerId: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  selectedLanguage,
  onSelectMovie,
  onPlayTrailer
}) => {
  let movies = [...MOVIES_DATABASE];

  if (selectedLanguage !== "All") {
    movies = movies.filter((m) =>
      m.language.toLowerCase().includes(selectedLanguage.toLowerCase())
    );
  }

  const heroMovie = movies[0] || MOVIES_DATABASE[0];
  const popularTamil = MOVIES_DATABASE.filter((m) => m.language === "Tamil");
  const topRated = [...movies].sort((a, b) => b.imdbRating - a.imdbRating);
  const trendingToday = [...movies].filter((m) => m.matchScore >= 95);
  const nolanCollection = MOVIES_DATABASE.filter((m) => m.collection === "Christopher Nolan Collection");
  const lcuCollection = MOVIES_DATABASE.filter((m) => m.collection === "Lokesh Cinematic Universe");
  const oscarWinners = MOVIES_DATABASE.filter((m) => m.isOscarWinner);

  return (
    <div className="space-y-10 p-4 sm:p-8 max-w-7xl mx-auto font-sora">
      {/* Hero Banner Module */}
      <section className="relative rounded-2xl overflow-hidden bg-[#171B2E] border border-[#33395a] shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMovie.backdropUrl}
            alt={heroMovie.title}
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171B2E] via-[#171B2E]/90 to-transparent" />
        </div>

        <div className="relative z-10 space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A33D]/20 text-[#E8A33D] border border-[#E8A33D]/40 text-xs font-mono-num font-bold">
            <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" /> LUMINA FEATURED SPOTLIGHT
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl text-[#F2F0E6] tracking-wide">
            {heroMovie.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#A9AABF] line-clamp-2 leading-relaxed">
            {heroMovie.synopsis}
          </p>

          <div className="p-4 rounded-xl bg-[#1E2338]/90 border border-[#3FA796]/40 text-xs text-[#F2F0E6] italic">
            "{heroMovie.aiReasoning}"
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onPlayTrailer(heroMovie.trailerId)}
              className="px-6 py-2.5 rounded-lg bg-[#E8A33D] text-[#0F1220] font-heading font-bold text-xs hover:bg-[#E8A33D]/90 transition-all shadow-lg shadow-[#E8A33D]/20"
            >
              Watch Trailer
            </button>
            <button
              onClick={() => onSelectMovie(heroMovie)}
              className="px-6 py-2.5 rounded-lg bg-[#1E2338] border border-[#33395a] text-[#F2F0E6] font-heading font-bold text-xs hover:border-[#E8A33D] transition-all"
            >
              View Full Details
            </button>
          </div>
        </div>

        <div className="relative z-10 shrink-0 cursor-pointer" onClick={() => onSelectMovie(heroMovie)}>
          <img
            src={heroMovie.posterUrl}
            alt={heroMovie.title}
            className="w-40 sm:w-48 aspect-[2/3] object-cover rounded-xl shadow-2xl border border-[#33395a] hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Row 1: Popular Tamil Cinema */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl text-[#F2F0E6] flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#E8A33D]" /> Popular Tamil Cinema (Kollywood)
          </h3>
          <span className="text-xs font-mono-num text-[#3FA796]">{popularTamil.length} Films</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
          {popularTamil.map((m) => (
            <div key={m.id} className="w-44 sm:w-52 shrink-0 snap-start">
              <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            </div>
          ))}
        </div>
      </section>

      {/* Row 2: Lokesh Cinematic Universe (LCU) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl text-[#F2F0E6] flex items-center gap-2">
            <Clapperboard className="w-5 h-5 text-[#3FA796]" /> Lokesh Cinematic Universe (LCU)
          </h3>
          <span className="text-xs font-mono-num text-[#A9AABF]">Vikram • Leo • Kaithi</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
          {lcuCollection.map((m) => (
            <div key={m.id} className="w-44 sm:w-52 shrink-0 snap-start">
              <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            </div>
          ))}
        </div>
      </section>

      {/* Row 3: IMDb Top Rated Masterpieces */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl text-[#F2F0E6] flex items-center gap-2">
            <Star className="w-5 h-5 text-[#E8A33D]" /> IMDb Top Rated Masterpieces
          </h3>
          <span className="text-xs font-mono-num text-[#A9AABF]">Score 8.0+</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
          {topRated.map((m) => (
            <div key={m.id} className="w-44 sm:w-52 shrink-0 snap-start">
              <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            </div>
          ))}
        </div>
      </section>

      {/* Row 4: Oscar Winners & Award Winners */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-xl text-[#F2F0E6] flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#E8A33D]" /> Oscar & National Award Winners
          </h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x">
          {oscarWinners.map((m) => (
            <div key={m.id} className="w-44 sm:w-52 shrink-0 snap-start">
              <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
