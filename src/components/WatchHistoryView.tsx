"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Clock, Trash2 } from "lucide-react";

interface WatchHistoryViewProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist?: (movie: Movie) => void;
  watchlist?: Movie[];
  onPlayTrailer?: (trailerId: string) => void;
}

export const WatchHistoryView: React.FC<WatchHistoryViewProps> = ({
  onSelectMovie,
  onToggleWatchlist = () => {},
  watchlist = [],
  onPlayTrailer = () => {}
}) => {
  const watchHistoryList = MOVIES_DATABASE.filter((m) => m.watchHistoryTimestamp || m.continueWatching);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6 pb-24 font-inter">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-syne">
            <Clock className="w-6 h-6 text-purple-400" /> Watch History
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            Films and series you have recently streamed on Lumina AI.
          </p>
        </div>

        <button className="text-xs text-zinc-500 hover:text-red-400 font-semibold flex items-center gap-1">
          <Trash2 className="w-3.5 h-3.5" /> Clear History
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {watchHistoryList.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onSelectMovie(movie)}
            className="glass-card rounded-2xl p-4 flex gap-4 items-center cursor-pointer group border border-zinc-800 hover:border-purple-500/40"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-16 h-22 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex-1 space-y-1 min-w-0">
              <h4 className="font-bold text-sm text-white truncate group-hover:text-purple-300">
                {movie.title}
              </h4>
              <p className="text-xs text-purple-400 font-medium">
                {movie.watchHistoryTimestamp || movie.continueWatching?.lastWatched}
              </p>
              <div className="text-[11px] text-zinc-400">
                {movie.runtime} • {movie.genres.slice(0, 2).join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
