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
  CheckCheck
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

  const matchPct = score ?? movie.matchScore;

  return (
    <div
      onClick={() => onSelectMovie(movie)}
      className="glass-card rounded-xl overflow-hidden group cursor-pointer flex flex-col relative"
    >
      {/* === POSTER === */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0F1220]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1220] via-[#0F1220]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Top row: Match dial + IMDb */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {/* Match dial */}
          <div
            className="match-dial"
            style={{ "--pct": matchPct } as React.CSSProperties}
            title={`${matchPct}% AI Match`}
          >
            <span className="match-dial-label">{matchPct}</span>
          </div>

          {/* IMDb chip */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[#0F1220]/80 backdrop-blur-sm border border-[#E8A33D]/30">
            <Star className="w-2.5 h-2.5 text-[#E8A33D] fill-[#E8A33D]" />
            <span className="font-mono-num text-[10px] font-600 text-[#E8A33D]">{movie.imdbRating}</span>
          </div>
        </div>

        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-11 h-11 rounded-full bg-[#E8A33D] text-[#0F1220] flex items-center justify-center shadow-xl shadow-[#E8A33D]/40 scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-4 h-4 ml-0.5 fill-[#0F1220]" />
          </div>
        </div>

        {/* Language tag bottom-left */}
        <div className="absolute bottom-2 left-2 pointer-events-none">
          <span className="font-mono-num text-[9px] text-[#A9AABF] bg-[#0F1220]/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-[#33395a]/60">
            {movie.language}
          </span>
        </div>
      </div>

      {/* === CARD BODY === */}
      <div className="p-3 flex flex-col gap-2 bg-[#171B2E]/80 flex-1">
        {/* Year + runtime */}
        <div className="flex items-center justify-between text-[10px] font-mono-num text-[#6B6E8A]">
          <span>{movie.year}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            <span>{movie.runtime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-sm text-[#F2F0E6] group-hover:text-[#E8A33D] transition-colors leading-tight line-clamp-1">
          {movie.title}
        </h3>

        {/* Genre chips */}
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="text-[9px] font-body px-1.5 py-0.5 rounded bg-[#262C48] text-[#A9AABF] border border-[#33395a]/60"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* AI Insight box */}
        {showAiReasoning && movie.aiReasoning && (
          <div className="p-2 rounded-lg bg-[#3FA796]/08 border border-[#3FA796]/25 flex gap-1.5">
            <Sparkles className="w-3 h-3 text-[#3FA796] shrink-0 mt-0.5" />
            <p className="text-[10px] text-[#A9AABF] leading-relaxed line-clamp-2 italic">
              {movie.aiReasoning}
            </p>
          </div>
        )}

        {/* Action bar */}
        <div className="flex items-center justify-between pt-1 border-t border-[#33395a]/50 mt-auto">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectMovie(movie); }}
            className="text-[10px] font-heading text-[#E8A33D] hover:text-[#FFD580] flex items-center gap-1 transition-colors"
          >
            <Play className="w-2.5 h-2.5 fill-current" /> Details
          </button>

          <div className="flex items-center gap-1">
            {/* Watchlist */}
            <button
              onClick={(e) => { e.stopPropagation(); if (onToggleWatchlist) onToggleWatchlist(movie); }}
              title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
              className={`p-1.5 rounded-md border transition-all ${
                isWatchlisted
                  ? "bg-[#E8A33D]/20 border-[#E8A33D]/50 text-[#E8A33D]"
                  : "bg-[#1E2338] border-[#33395a] text-[#6B6E8A] hover:text-[#F2F0E6]"
              }`}
            >
              <Bookmark className={`w-3 h-3 ${isWatchlisted ? "fill-[#E8A33D]" : ""}`} />
            </button>

            {/* Like */}
            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              title="Like"
              className={`p-1.5 rounded-md border transition-all ${
                liked
                  ? "bg-[#C75146]/20 border-[#C75146]/50 text-[#C75146]"
                  : "bg-[#1E2338] border-[#33395a] text-[#6B6E8A] hover:text-[#F2F0E6]"
              }`}
            >
              <Heart className={`w-3 h-3 ${liked ? "fill-[#C75146]" : ""}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              title="Share"
              className="p-1.5 rounded-md bg-[#1E2338] border border-[#33395a] text-[#6B6E8A] hover:text-[#F2F0E6] transition-all relative"
            >
              {copied
                ? <CheckCheck className="w-3 h-3 text-[#3FA796]" />
                : <Share2 className="w-3 h-3" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
