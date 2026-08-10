"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Bookmark, Film, Sparkles, ArrowRight } from "lucide-react";

interface WatchlistViewProps {
  watchlist: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  setActiveTab: (tab: string) => void;
}

export const WatchlistView: React.FC<WatchlistViewProps> = ({
  watchlist,
  onSelectMovie,
  onToggleWatchlist,
  setActiveTab
}) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"rating" | "year" | "title">("rating");

  const availableGenres = ["All", ...Array.from(new Set(watchlist.flatMap((m) => m.genres)))];

  const filteredMovies = watchlist
    .filter((m) => selectedGenre === "All" || m.genres.includes(selectedGenre))
    .sort((a, b) => {
      if (sortBy === "rating") return b.imdbRating - a.imdbRating;
      if (sortBy === "year") return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-8 space-y-6 pb-24 md:pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 font-poppins">
            <Bookmark className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400 fill-purple-400" /> My Watchlist
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            {watchlist.length} saved {watchlist.length === 1 ? "film" : "films"} ready to stream
          </p>
        </div>

        {/* Filters & Sorting */}
        {watchlist.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-purple-500"
            >
              {availableGenres.map((g) => (
                <option key={g} value={g}>
                  {g === "All" ? "All Genres" : g}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-zinc-900 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3 py-2 outline-none focus:border-purple-500"
            >
              <option value="rating">Sort by IMDb Rating</option>
              <option value="year">Sort by Release Year</option>
              <option value="title">Sort Alphabetically</option>
            </select>
          </div>
        )}
      </div>

      {/* Empty State */}
      {watchlist.length === 0 ? (
        <div className="py-16 text-center glass-panel rounded-3xl p-6 sm:p-8 max-w-xl mx-auto space-y-4">
          <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto">
            <Film className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">Your Watchlist is Empty</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            You haven't saved any movies yet. Ask CineMind AI for recommendations or explore trending titles to build your watchlist!
          </p>
          <button
            onClick={() => setActiveTab("ai-assistant")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-950 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Get AI Recommendations <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Responsive Movie Grid: 2 columns on mobile */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelectMovie={onSelectMovie}
              onToggleWatchlist={onToggleWatchlist}
              isWatchlisted={true}
              showAiReasoning={false}
            />
          ))}
        </div>
      )}
    </div>
  );
};
