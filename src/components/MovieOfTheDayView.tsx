"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { Sparkles, Play, Bookmark, Star, Calendar, Film } from "lucide-react";

interface MovieOfTheDayViewProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  isWatchlisted: boolean;
}

export const MovieOfTheDayView: React.FC<MovieOfTheDayViewProps> = ({
  onSelectMovie,
  onToggleWatchlist,
  isWatchlisted
}) => {
  const movie = MOVIES_DATABASE[1]; // Interstellar

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8 pb-24 font-inter">
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-purple-500/40 shadow-2xl p-6 sm:p-12">
        <div className="absolute inset-0 z-0">
          <img
            src={movie.backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-56 sm:w-64 aspect-[2/3] object-cover rounded-2xl shadow-2xl border border-purple-500/30 shrink-0"
          />

          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-space">
              🏆 Movie of the Day
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white font-syne">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300">
              <span className="px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 font-bold font-space border border-purple-500/40">
                {movie.matchScore}% AI Match
              </span>
              <span className="text-amber-400 font-bold font-space flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-amber-400" /> {movie.imdbRating}
              </span>
              <span>{movie.year}</span>
              <span>{movie.runtime}</span>
              <span>{movie.genres.join(", ")}</span>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {movie.synopsis}
            </p>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-sm text-purple-200 italic space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 uppercase tracking-wider not-italic">
                <Sparkles className="w-4 h-4" /> AI Selection Reason
              </div>
              <p>"Selected as Movie of the Day because it perfectly bridges deep psychological suspense with groundbreaking cinematic direction and Hans Zimmer's unforgettable organ score."</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onSelectMovie(movie)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-xl shadow-purple-950 hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Trailer
              </button>

              <button
                onClick={() => onToggleWatchlist(movie)}
                className="px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs flex items-center gap-2 hover:bg-zinc-800 transition-colors"
              >
                <Bookmark className="w-4 h-4" /> {isWatchlisted ? "In Watchlist" : "Save to Watchlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
