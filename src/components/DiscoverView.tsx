"use client";

import React, { useState } from "react";
import { Movie, ALL_GENRES_LIST, LANGUAGES_LIST } from "@/data/movies";
import { filterAndRankMovies } from "@/lib/recommendEngine";
import { MovieCard } from "@/components/MovieCard";
import { Filter, Sliders, RefreshCw, Trophy, Star } from "lucide-react";

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
    <div className="max-w-7xl mx-auto space-y-6 p-4 sm:p-8 font-sora">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#33395a] pb-4">
        <div>
          <h2 className="font-heading text-3xl text-[#F2F0E6] flex items-center gap-2">
            <Filter className="w-6 h-6 text-[#E8A33D]" /> Advanced Discover Vault
          </h2>
          <p className="text-xs text-[#A9AABF] mt-1">
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
          className="px-3 py-1.5 rounded-lg bg-[#1E2338] border border-[#33395a] text-xs font-semibold text-[#A9AABF] hover:text-[#F2F0E6] flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Filters
        </button>
      </div>

      {/* Filter Control Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-[#171B2E] border border-[#33395a]">
        {/* Genre Selector */}
        <div>
          <label className="text-xs font-mono-num text-[#A9AABF] block mb-1">Genre</label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-2.5 rounded-lg border border-[#33395a] outline-none"
          >
            <option value="All">All Genres</option>
            {ALL_GENRES_LIST.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Language Selector */}
        <div>
          <label className="text-xs font-mono-num text-[#A9AABF] block mb-1">Language</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-2.5 rounded-lg border border-[#33395a] outline-none"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id}>{lang.flag} {lang.name}</option>
            ))}
          </select>
        </div>

        {/* Minimum IMDb Rating */}
        <div>
          <label className="text-xs font-mono-num text-[#A9AABF] block mb-1">Min IMDb Rating: {minImdb > 0 ? minImdb : "Any"}</label>
          <select
            value={minImdb}
            onChange={(e) => setMinImdb(Number(e.target.value))}
            className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-2.5 rounded-lg border border-[#33395a] outline-none"
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
            className={`w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
              isOscarOnly
                ? "bg-[#E8A33D] text-[#0F1220] border-[#E8A33D]"
                : "bg-[#1E2338] text-[#A9AABF] border-[#33395a] hover:text-[#F2F0E6]"
            }`}
          >
            <Trophy className="w-4 h-4" /> Oscar Winners Only
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="space-y-3">
        <span className="text-xs font-mono-num text-[#3FA796] block">
          Found {filteredMovies.length} matching films
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredMovies.map((m) => (
            <MovieCard key={m.id} movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};
