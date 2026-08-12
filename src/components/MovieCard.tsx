"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { 
  Star, 
  Sparkles, 
  Play, 
  Bookmark, 
  Heart, 
  Share2, 
  Clock, 
  Info 
} from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist?: (movie: Movie) => void;
  isWatchlisted?: boolean;
  showAiReasoning?: boolean;
  score?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onSelectMovie,
  onToggleWatchlist,
  isWatchlisted = false,
  showAiReasoning = true,
  score
}) => {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={() => onSelectMovie(movie)}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.01]"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

        {/* Top Badges: AI Match Score & IMDb Rating */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-purple-500/40 text-xs font-bold text-white flex items-center gap-1 shadow-lg shadow-purple-950/50">
            <Sparkles className="w-3 h-3 text-purple-400 fill-purple-400" />
            <span className="text-gradient font-space">{movie.matchScore}% Match</span>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-bold text-amber-400 flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400" />
            <span className="font-space">{movie.imdbRating}</span>
          </div>
        </div>

        {/* Hover Quick Action Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl shadow-purple-900/50 transform group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 ml-0.5 fill-white" />
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-zinc-900/40">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1 font-medium">
            <span>{movie.year}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{movie.runtime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-white tracking-tight group-hover:text-purple-300 transition-colors line-clamp-1">
            {movie.title}
          </h3>

          {/* Genres Chips */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {movie.genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* AI Explanation Banner */}
          {showAiReasoning && (
            <div className="mt-3 p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200/90 leading-relaxed relative">
              <div className="flex items-center gap-1 text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-1">
                <Info className="w-3 h-3 text-purple-400" /> AI Insight
              </div>
              <p className="line-clamp-2 italic text-[11px]">
                "{movie.aiReasoning}"
              </p>
            </div>
          )}

          {/* Similar Tags */}
          <div className="flex flex-wrap gap-1 mt-2.5">
            {movie.similarTags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] text-zinc-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions Bar */}
        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMovie(movie);
            }}
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
          >
            <Play className="w-3 h-3 fill-current" /> Watch Trailer
          </button>

          <div className="flex items-center gap-1.5">
            {/* Watchlist toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onToggleWatchlist) onToggleWatchlist(movie);
              }}
              title={isWatchlisted ? "Remove from Watchlist" : "Save to Watchlist"}
              className={`p-1.5 rounded-lg border transition-all ${
                isWatchlisted
                  ? "bg-purple-600/30 border-purple-500 text-purple-300"
                  : "bg-zinc-800/60 border-zinc-700/50 text-zinc-400 hover:text-white"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isWatchlisted ? "fill-purple-400" : ""}`} />
            </button>

            {/* Like Toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              title="Like"
              className={`p-1.5 rounded-lg border transition-all ${
                liked
                  ? "bg-rose-600/30 border-rose-500 text-rose-400"
                  : "bg-zinc-800/60 border-zinc-700/50 text-zinc-400 hover:text-white"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? "fill-rose-400" : ""}`} />
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              title="Share"
              className="p-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:text-white transition-all relative"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-purple-600 text-[9px] text-white whitespace-nowrap shadow">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
