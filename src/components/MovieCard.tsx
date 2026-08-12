"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { Star, Play, Bookmark, Heart, Share2, Clock, CheckCheck, Sparkles } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer?: (movie: Movie) => void;
  onToggleWatchlist?: (movie: Movie) => void;
  isWatchlisted?: boolean;
  showAiReasoning?: boolean; // Default to false for premium poster-forward layout
  score?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onSelectMovie,
  onToggleWatchlist,
  onPlayTrailer,
  isWatchlisted = false,
  showAiReasoning = false,
  score,
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
      className="glass-card rounded-xl overflow-hidden group cursor-pointer flex flex-col relative w-full h-full transition-transform duration-300 hover:scale-[1.08] hover:-translate-y-1"
    >
      {/* === HERO POSTER IMAGE === */}
      <div 
        className="relative aspect-[2/3] w-full overflow-hidden bg-[#060813] shrink-0"
        onClick={(e) => {
          if (onPlayTrailer) {
            e.stopPropagation();
            onPlayTrailer(movie);
          }
        }}
      >
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Cinematic Gradient overlay */}
        <div
          className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, #060813 0%, rgba(6, 8, 19, 0.3) 60%, transparent 100%)",
          }}
        />

        {/* Top Floating Stats: Match Dial + Rating */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
          {/* Conic Match Dial */}
          <div
            className="match-dial"
            style={{ "--pct": matchPct } as React.CSSProperties}
            title={`${matchPct}% Match`}
          >
            <span className="match-dial-label">{matchPct}%</span>
          </div>

          {/* Rating */}
          <div
            className="flex items-center gap-1 px-2 py-0.5 rounded-md"
            style={{
              background: "rgba(6, 8, 19, 0.85)",
              border: "1px solid rgba(236, 72, 153, 0.35)",
            }}
          >
            <Star className="w-2.5 h-2.5 fill-[#EC4899] text-[#EC4899]" />
            <span className="font-mono-num text-[10px] font-bold text-[#F1F3FA]">
              {movie.imdbRating}
            </span>
          </div>
        </div>

        {/* Play hover state */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 bg-black/10 backdrop-blur-[1px]">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300 relative"
            style={{
              background: "linear-gradient(135deg, #2563EB, #EC4899)",
            }}
          >
            <div className="absolute inset-0 rounded-full animate-pulse" style={{ boxShadow: "0 0 24px rgba(236, 72, 153, 0.5)" }} />
            <Play className="w-6 h-6 ml-1 fill-[#F1F3FA] text-[#F1F3FA] z-10" />
          </div>
          <span className="text-[10px] font-heading text-[#F1F3FA] mt-1.5 tracking-wider uppercase">Play Trailer</span>
        </div>

        {/* Left Bottom Language Tag */}
        <div className="absolute bottom-2.5 left-2.5 z-10 pointer-events-none">
          <span
            className="font-mono-num text-[8px] font-semibold px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(17, 21, 48, 0.8)",
              color: "#B0B6D0",
              border: "1px solid rgba(37, 99, 235, 0.25)",
            }}
          >
            {movie.language.toUpperCase()}
          </span>
        </div>
      </div>

      {/* === CARD BODY (Poster-Forward Title & Info) === */}
      <div className="p-3.5 flex flex-col gap-2 flex-1 justify-between bg-[#111530]/90">
        <div className="space-y-1">
          {/* Year and runtime */}
          <div className="flex items-center justify-between text-[10px] font-mono-num text-[#B0B6D0]">
            <span>{movie.year}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-[#2563EB]" />
              <span>{movie.runtime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="font-heading text-base leading-snug line-clamp-1 group-hover:text-[#EC4899] transition-colors"
            style={{ color: "#F1F3FA" }}
          >
            {movie.title}
          </h3>

          {/* Genres */}
          <div className="flex flex-wrap gap-1 pt-0.5">
            {movie.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-[9px] font-body px-1.5 py-0.5 rounded"
                style={{
                  background: "rgba(17, 21, 48, 0.6)",
                  color: "#B0B6D0",
                  border: "1px solid rgba(37, 99, 235, 0.15)",
                }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* AI Insight Box (Only visible in search/chat when requested) */}
        {showAiReasoning && movie.aiReasoning && (
          <div
            className="p-2 rounded-lg flex gap-1.5 text-[10px] italic leading-relaxed"
            style={{
              background: "rgba(236, 72, 153, 0.08)",
              border: "1px solid rgba(236, 72, 153, 0.25)",
              color: "#B0B6D0",
            }}
          >
            <Sparkles className="w-3 h-3 text-[#EC4899] shrink-0 mt-0.5" />
            <p className="line-clamp-2">
              "{movie.aiReasoning}"
            </p>
          </div>
        )}

        {/* Action bar */}
        <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#2563EB]/15">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMovie(movie);
            }}
            className="text-[10px] font-heading text-[#60A5FA] hover:text-[#EC4899] flex items-center gap-1 transition-colors"
          >
            <Play className="w-2.5 h-2.5 fill-current" /> Watch Details
          </button>

          <div className="flex items-center gap-1">
            {/* Save to watchlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onToggleWatchlist) onToggleWatchlist(movie);
              }}
              title={isWatchlisted ? "Remove from Watchlist" : "Save to Watchlist"}
              className="p-1.5 rounded-md transition-all cursor-pointer animate-in zoom-in-95 duration-100"
              style={{
                background: isWatchlisted ? "rgba(236, 72, 153, 0.15)" : "rgba(17, 21, 48, 0.6)",
                border: `1px solid ${isWatchlisted ? "rgba(236, 72, 153, 0.4)" : "rgba(37, 99, 235, 0.15)"}`,
                color: isWatchlisted ? "#EC4899" : "#6A7194",
              }}
            >
              <Bookmark className={`w-3 h-3 ${isWatchlisted ? "fill-current" : ""}`} />
            </button>

            {/* Like button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              title="Like"
              className="p-1.5 rounded-md transition-all cursor-pointer"
              style={{
                background: liked ? "rgba(236, 72, 153, 0.15)" : "rgba(17, 21, 48, 0.6)",
                border: `1px solid ${liked ? "rgba(236, 72, 153, 0.4)" : "rgba(37, 99, 235, 0.15)"}`,
                color: liked ? "#EC4899" : "#6A7194",
              }}
            >
              <Heart className={`w-3 h-3 ${liked ? "fill-current" : ""}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              title="Share"
              className="p-1.5 rounded-md transition-all relative cursor-pointer"
              style={{
                background: "rgba(17, 21, 48, 0.6)",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                color: copied ? "#EC4899" : "#6A7194",
              }}
            >
              {copied ? <CheckCheck className="w-3 h-3 text-[#EC4899]" /> : <Share2 className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
