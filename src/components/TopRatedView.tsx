"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Star, Award } from "lucide-react";

interface TopRatedViewProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist?: (movie: Movie) => void;
  watchlist?: Movie[];
  onPlayTrailer?: (movie: Movie) => void;
}

export const TopRatedView: React.FC<TopRatedViewProps> = ({
  onSelectMovie,
  onToggleWatchlist = () => {},
  watchlist = [],
  onPlayTrailer
}) => {
  const topRatedMovies = MOVIES_DATABASE.filter((m) => m.imdbRating >= 8.4).sort(
    (a, b) => b.imdbRating - a.imdbRating
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6 pb-24 font-inter">
      <div className="pb-4 border-b border-zinc-800">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-syne">
          <Star className="w-6 h-6 text-amber-400 fill-amber-400" /> Top Rated Masterpieces
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Critically acclaimed cinematic legends rated 8.4+ on IMDb with highest neural accuracy scores.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {topRatedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelectMovie={onSelectMovie}
            onToggleWatchlist={onToggleWatchlist}
            isWatchlisted={watchlist.some((w) => w.id === movie.id)}
            onPlayTrailer={onPlayTrailer}
            showAiReasoning={false}
          />
        ))}
      </div>
    </div>
  );
};
