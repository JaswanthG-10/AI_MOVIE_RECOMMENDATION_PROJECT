"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Compass, Search } from "lucide-react";

interface DiscoverViewProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  watchlist: Movie[];
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({
  onSelectMovie,
  onToggleWatchlist,
  watchlist
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const allGenres = ["All", ...Array.from(new Set(MOVIES_DATABASE.flatMap((m) => m.genres)))];

  const filteredMovies = MOVIES_DATABASE.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.cast.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesGenre = selectedGenre === "All" || movie.genres.includes(selectedGenre);

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-8 space-y-6 pb-24 md:pb-16">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 font-poppins">
            <Compass className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" /> Discover Films
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Browse our full neural movie database ({filteredMovies.length} titles)
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search title, actor, director..."
              className="bg-zinc-900 text-xs text-white placeholder-zinc-500 rounded-xl pl-9 pr-3 py-2 border border-zinc-800 focus:border-purple-500 outline-none w-full sm:w-56"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {allGenres.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenre(g)}
                className={`text-xs px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all ${
                  selectedGenre === g
                    ? "bg-purple-600 text-white shadow-md shadow-purple-950"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelectMovie={onSelectMovie}
            onToggleWatchlist={onToggleWatchlist}
            isWatchlisted={watchlist.some((w) => w.id === movie.id)}
            showAiReasoning={false}
          />
        ))}
      </div>
    </div>
  );
};
