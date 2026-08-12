"use client";

import React, { useState } from "react";
import { Movie, ALL_GENRES_LIST, LANGUAGES_LIST } from "@/data/movies";
import { filterAndRankMovies } from "@/lib/recommendEngine";
import { MovieCard } from "@/components/MovieCard";
import { Filter, RefreshCw, Trophy, Star } from "lucide-react";

interface DiscoverViewProps {
  onSelectMovie: (movie: Movie) => void;
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({ onSelectMovie }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [minImdb, setMinImdb] = useState(0);
  const [isOscarOnly, setIsOscarOnly] = useState(false);

  const filteredMovies = filterAndRankMovies({
    genre: selectedGenre,
    language: selectedLanguage,
    minImdb: minImdb > 0 ? minImdb : undefined,
    isOscarWinner: isOscarOnly || undefined
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6 sm:p-10">
      {/* Title section */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4"
        style={{ borderBottom: "1px solid rgba(212, 175, 106, 0.15)" }}
      >
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#F7F5F0] flex items-center gap-2">
            <Filter className="w-6 h-6 text-[#D4AF6A]" /> Discover Film Vault
          </h2>
          <p className="font-body text-xs text-[#C5C2B9] mt-1">
            Filter movies instantly by genre, language, minimum IMDb rating, and awards.
          </p>
        </div>

        <button
          onClick={() => {
            setSelectedGenre("All");
            setSelectedLanguage("All");
            setMinImdb(0);
            setIsOscarOnly(false);
          }}
          className="px-3 py-2 rounded-lg bg-[#1A191E] border text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer text-[#C5C2B9] hover:text-[#F7F5F0] hover:border-[#D4AF6A]/45"
          style={{ borderColor: "rgba(212, 175, 106, 0.15)" }}
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
        </button>
      </div>

      {/* Filter Control Bar */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl border"
        style={{
          background: "rgba(18, 17, 21, 0.95)",
          borderColor: "rgba(212, 175, 106, 0.15)"
        }}
      >
        {/* Genre Selector */}
        <div>
          <label className="text-xs font-mono-num text-[#C5C2B9] block mb-1">Genre</label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full bg-[#1A191E] text-xs text-[#F7F5F0] p-2.5 rounded-lg border outline-none cursor-pointer"
            style={{ borderColor: "rgba(212, 175, 106, 0.18)" }}
          >
            <option value="All">All Genres</option>
            {ALL_GENRES_LIST.map((g) => (
              <option key={g} value={g} className="bg-[#121115]">{g}</option>
            ))}
          </select>
        </div>

        {/* Language Selector */}
        <div>
          <label className="text-xs font-mono-num text-[#C5C2B9] block mb-1">Language</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full bg-[#1A191E] text-xs text-[#F7F5F0] p-2.5 rounded-lg border outline-none cursor-pointer"
            style={{ borderColor: "rgba(212, 175, 106, 0.18)" }}
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} className="bg-[#121115]">{lang.flag} {lang.name}</option>
            ))}
          </select>
        </div>

        {/* Minimum IMDb Rating */}
        <div>
          <label className="text-xs font-mono-num text-[#C5C2B9] block mb-1">Min IMDb Rating: {minImdb > 0 ? minImdb : "Any"}</label>
          <select
            value={minImdb}
            onChange={(e) => setMinImdb(Number(e.target.value))}
            className="w-full bg-[#1A191E] text-xs text-[#F7F5F0] p-2.5 rounded-lg border outline-none cursor-pointer"
            style={{ borderColor: "rgba(212, 175, 106, 0.18)" }}
          >
            <option value={0}>Any Rating</option>
            <option value={7.0}>★ 7.0+ IMDb</option>
            <option value={8.0}>★ 8.0+ IMDb</option>
            <option value={8.5}>★ 8.5+ IMDb</option>
          </select>
        </div>

        {/* Oscar Winners Toggle */}
        <div className="flex items-end">
          <button
            onClick={() => setIsOscarOnly(!isOscarOnly)}
            className="w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer"
            style={{
              background: isOscarOnly ? "linear-gradient(135deg, #D4AF6A 0%, #E8C27D 100%)" : "rgba(36, 34, 41, 0.6)",
              borderColor: isOscarOnly ? "rgba(212, 175, 106, 0.5)" : "rgba(212, 175, 106, 0.15)",
              color: isOscarOnly ? "#0B0A0C" : "#C5C2B9"
            }}
          >
            <Trophy className="w-4 h-4" /> Oscar Winners Only
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-mono-num text-[#D4AF6A] block">
            FOUND {filteredMovies.length} MATCHING FILMS
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((m) => (
            <div key={m.id} className="animate-roll-on">
              <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
