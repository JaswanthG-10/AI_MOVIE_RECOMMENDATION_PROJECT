"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { Star, Sparkles, Play, Bookmark, Heart, Share2, Clock, CheckCheck } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist?: (movie: Movie) => void;
  isWatchlisted?: boolean;
  showAiReasoning?: boolean;
  score?: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie, onSelectMovie, onToggleWatchlist,
  isWatchlisted = false, showAiReasoning = true, score,
}) => {
  const [liked, setLiked]   = useState(false);
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
      <div className="relative aspect-[2/3] w-full overflow-hidden" style={{ background: "#07050F" }}>
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Royal gradient overlay */}
        <div
          className="absolute inset-0 opacity-90 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, #07050F 0%, rgba(13,10,30,0.4) 50%, transparent 100%)",
          }}
        />

        {/* Top: Match dial + IMDb */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {/* Royal gold match dial */}
          <div
            className="match-dial"
            style={{ "--pct": matchPct } as React.CSSProperties}
            title={`${matchPct}% AI Match`}
          >
            <span className="match-dial-label">{matchPct}</span>
          </div>

          {/* IMDb chip */}
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-md"
            style={{
              background: "rgba(7,5,15,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(212,175,55,0.35)",
            }}
          >
            <Star className="w-2.5 h-2.5 fill-current" style={{ color: "#D4AF37" }} />
            <span className="font-mono-num text-[10px] font-semibold" style={{ color: "#D4AF37" }}>
              {movie.imdbRating}
            </span>
          </div>
        </div>

        {/* Royal play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              boxShadow: "0 0 32px rgba(212,175,55,0.6)",
            }}
          >
            <Play className="w-5 h-5 ml-0.5" style={{ color: "#07050F", fill: "#07050F" }} />
          </div>
        </div>

        {/* Language tag */}
        <div className="absolute bottom-2 left-2 pointer-events-none">
          <span
            className="font-mono-num text-[9px] px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(7,5,15,0.75)",
              color: "#B8AEDD",
              border: "1px solid rgba(46,36,86,0.7)",
            }}
          >
            {movie.language}
          </span>
        </div>
      </div>

      {/* === CARD BODY === */}
      <div
        className="p-3 flex flex-col gap-2 flex-1"
        style={{ background: "linear-gradient(180deg, rgba(13,10,30,0.9), rgba(19,15,42,0.95))" }}
      >
        {/* Year + runtime */}
        <div className="flex items-center justify-between text-[10px] font-mono-num" style={{ color: "#7A6FA8" }}>
          <span>{movie.year}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" />
            <span>{movie.runtime}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-heading text-sm leading-tight line-clamp-1 transition-colors"
          style={{ color: "#F0ECFF" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLHeadingElement).style.color = "#D4AF37"}
          onMouseLeave={(e) => (e.currentTarget as HTMLHeadingElement).style.color = "#F0ECFF"}
        >
          {movie.title}
        </h3>

        {/* Genre chips */}
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="text-[9px] font-body px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(26,20,56,0.9)",
                color: "#B8AEDD",
                border: "1px solid rgba(46,36,86,0.8)",
              }}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* AI insight */}
        {showAiReasoning && movie.aiReasoning && (
          <div
            className="p-2 rounded-lg flex gap-1.5"
            style={{
              background: "rgba(147,51,234,0.08)",
              border: "1px solid rgba(147,51,234,0.22)",
            }}
          >
            <Sparkles className="w-3 h-3 shrink-0 mt-0.5" style={{ color: "#C084FC" }} />
            <p className="text-[10px] leading-relaxed line-clamp-2 italic" style={{ color: "#B8AEDD" }}>
              {movie.aiReasoning}
            </p>
          </div>
        )}

        {/* Action bar */}
        <div
          className="flex items-center justify-between pt-1 mt-auto"
          style={{ borderTop: "1px solid rgba(46,36,86,0.6)" }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onSelectMovie(movie); }}
            className="text-[10px] font-heading flex items-center gap-1 transition-colors"
            style={{ color: "#D4AF37" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.color = "#F0D060"}
            onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37"}
          >
            <Play className="w-2.5 h-2.5 fill-current" /> Details
          </button>

          <div className="flex items-center gap-1">
            {/* Watchlist */}
            <button
              onClick={(e) => { e.stopPropagation(); if (onToggleWatchlist) onToggleWatchlist(movie); }}
              title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
              className="p-1.5 rounded-md transition-all"
              style={{
                background: isWatchlisted ? "rgba(212,175,55,0.18)" : "rgba(19,15,42,0.9)",
                border: `1px solid ${isWatchlisted ? "rgba(212,175,55,0.5)" : "rgba(46,36,86,0.8)"}`,
                color: isWatchlisted ? "#D4AF37" : "#7A6FA8",
              }}
            >
              <Bookmark className={`w-3 h-3 ${isWatchlisted ? "fill-current" : ""}`} />
            </button>

            {/* Like */}
            <button
              onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
              className="p-1.5 rounded-md transition-all"
              style={{
                background: liked ? "rgba(194,24,91,0.18)" : "rgba(19,15,42,0.9)",
                border: `1px solid ${liked ? "rgba(194,24,91,0.5)" : "rgba(46,36,86,0.8)"}`,
                color: liked ? "#E91E8C" : "#7A6FA8",
              }}
            >
              <Heart className={`w-3 h-3 ${liked ? "fill-current" : ""}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-md transition-all relative"
              style={{
                background: "rgba(19,15,42,0.9)",
                border: "1px solid rgba(46,36,86,0.8)",
                color: copied ? "#C084FC" : "#7A6FA8",
              }}
            >
              {copied ? <CheckCheck className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
