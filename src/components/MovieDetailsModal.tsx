"use client";

import React, { useState, useEffect } from "react";
import { Movie } from "@/data/movies";
import { filterAndRankMovies, getMovieSimilarity } from "@/lib/recommendEngine";
import { fetchTrailerForMovie, TrailerResult } from "@/lib/trailerService";
import { 
  X, 
  Star, 
  Sparkles, 
  Play, 
  Clock, 
  Film, 
  Tv, 
  Bookmark, 
  Heart,
  MessageSquare,
  DollarSign,
  Award,
  Building
} from "lucide-react";

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
  onToggleWatchlist: (movie: Movie) => void;
  isWatchlisted: boolean;
  onSelectMovie: (movie: Movie) => void;
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  movie,
  onClose,
  onToggleWatchlist,
  isWatchlisted,
  onSelectMovie
}) => {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [localReviews, setLocalReviews] = useState(movie?.reviews || []);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [trailerResult, setTrailerResult] = useState<TrailerResult | null>(null);
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);

  useEffect(() => {
    if (movie) {
      setIsPlayingTrailer(false);
      setLocalReviews(movie.reviews || []);
      // Fetch similar movies based on our genuine similarity engine
      const similar = filterAndRankMovies({ similarToMovieId: movie.id }).slice(0, 5);
      setSimilarMovies(similar);
    }
  }, [movie]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!movie) return null;

  const handlePlayTrailerClick = () => {
    const ytUrl = movie.trailerId 
      ? `https://www.youtube.com/watch?v=${movie.trailerId}` 
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " " + movie.year + " official trailer")}`;
    window.open(ytUrl, "_blank");
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newRev = {
      id: Date.now().toString(),
      user: "Lumina Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Just now",
      comment: userComment
    };

    setLocalReviews([newRev, ...localReviews]);
    setUserComment("");
  };

  const matchPct = movie.matchScore;

  return (
    <div className="fixed inset-0 z-50 bg-[#060813]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300" onClick={onClose}>
      {/* Modal Card with Neon glow borders */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col my-auto transition-all"
        style={{
          borderColor: "rgba(37, 99, 235, 0.3)",
          boxShadow: "0 0 50px rgba(37, 99, 235, 0.15), 0 0 100px rgba(236, 72, 153, 0.1)"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0B0E20]/90 backdrop-blur-md border border-rgba(37,99,235,0.4) text-[#F1F3FA] hover:text-[#EC4899] hover:border-[#EC4899] flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner / Video Player */}
        <div className="relative aspect-video max-h-[380px] w-full bg-black overflow-hidden shrink-0">
          {isPlayingTrailer && trailerResult?.youtubeKey ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${trailerResult.youtubeKey}?autoplay=1&rel=0`}
              title={`${movie.title} Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          ) : (
            <>
              <img
                src={movie.backdropUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060813] via-[#060813]/40 to-transparent"></div>

              {/* Play Trailer CTA */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                {isLoadingTrailer ? (
                  <div className="w-16 h-16 rounded-full bg-[#2563EB]/50 animate-pulse flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#EC4899]/50 animate-pulse" />
                  </div>
                ) : trailerResult?.youtubeKey === null ? (
                  <div className="px-4 py-2 rounded bg-black/60 backdrop-blur-md text-[#F1F3FA] text-sm border border-[#EC4899]/50">
                    No official trailer available
                  </div>
                ) : (
                  <button
                    onClick={handlePlayTrailerClick}
                    className="px-6 py-3.5 rounded-xl font-heading text-xs font-bold text-[#F1F3FA] flex items-center gap-2 cursor-pointer shadow-2xl transition-transform hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
                      boxShadow: "0 4px 24px rgba(236, 72, 153, 0.4)"
                    }}
                  >
                    <Play className="w-4.5 h-4.5 fill-[#F1F3FA] text-[#F1F3FA]" /> Watch Official Trailer
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 scrollbar-none">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="badge-teal">
                  <Sparkles className="w-3 h-3 text-[#F472B6] animate-pulse" /> {matchPct}% Match
                </span>
                <span className="badge-amber">
                  <Star className="w-3 h-3 fill-[#FBBF24] text-[#FBBF24]" /> IMDb {movie.imdbRating}
                </span>
                <span className="text-xs text-[#B0B6D0] font-medium">{movie.year}</span>
                <span className="text-xs text-[#B0B6D0] flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3 text-[#2563EB]" /> {movie.runtime}
                </span>
                <span className="text-xs px-2 py-0.5 rounded border border-[#2563EB]/35 bg-[#2563EB]/10 text-[#60A5FA] font-bold">
                  {movie.language.toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#F1F3FA] tracking-tight leading-tight">
                {movie.title}
              </h2>
              {movie.tagline && (
                <p className="text-xs font-semibold italic text-[#EC4899] mt-1.5 tracking-wide">
                  "{movie.tagline}"
                </p>
              )}
            </div>

            {/* Watchlist Toggle CTA */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleWatchlist(movie)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 border transition-all cursor-pointer ${
                  isWatchlisted
                    ? "bg-[#EC4899]/20 border-[#EC4899] text-[#F472B6]"
                    : "bg-[#111530] border-[#2563EB]/35 text-[#F1F3FA] hover:border-[#EC4899]/50"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isWatchlisted ? "fill-current" : ""}`} />
                {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>

          {/* AI Match Explanation Panel */}
          <div 
            className="p-4 rounded-2xl flex items-start gap-2.5"
            style={{
              background: 'linear-gradient(90deg, rgba(37,99,235,0.08), rgba(236,72,153,0.04))',
              border: '1px solid rgba(37, 99, 235, 0.25)'
            }}
          >
            <Sparkles className="w-4.5 h-4.5 shrink-0 mt-0.5 text-[#EC4899] animate-pulse" />
            <div>
              <div className="text-[10px] font-mono-num font-bold text-[#EC4899] uppercase tracking-wider mb-1">
                Lumina AI Smart Recommendation Reason
              </div>
              <p className="text-xs text-[#B0B6D0] leading-relaxed italic">
                "{movie.aiReasoning}"
              </p>
            </div>
          </div>

          {/* Synopsis */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-body font-bold text-[#EC4899] uppercase tracking-widest">
              Synopsis
            </h3>
            <p className="text-xs sm:text-sm text-[#B0B6D0] leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Details Grid (Budget, Revenue, Production Company, Awards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1">
            <div className="p-3 rounded-xl bg-[#111530] border border-[#2563EB]/20">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#60A5FA] uppercase mb-1">
                <DollarSign className="w-3 h-3" /> Budget
              </span>
              <span className="font-mono-num text-xs font-bold text-[#F1F3FA]">{movie.budget || "N/A"}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111530] border border-[#2563EB]/20">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#60A5FA] uppercase mb-1">
                <DollarSign className="w-3 h-3" /> Revenue
              </span>
              <span className="font-mono-num text-xs font-bold text-[#F1F3FA]">{movie.revenue || "N/A"}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111530] border border-[#2563EB]/20">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#60A5FA] uppercase mb-1">
                <Building className="w-3 h-3" /> Production
              </span>
              <span className="font-body text-xs font-bold text-[#F1F3FA] truncate block">{movie.productionCompany || "Independent"}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111530] border border-[#2563EB]/20">
              <span className="flex items-center gap-1 text-[10px] font-bold text-[#60A5FA] uppercase mb-1">
                <Award className="w-3 h-3" /> Awards
              </span>
              <span className="font-body text-xs font-bold text-[#F1F3FA] truncate block">
                {movie.awards ? movie.awards[0] : "Nominated"}
              </span>
            </div>
          </div>

          {/* Genres & Streaming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Genres */}
            <div className="p-4 rounded-xl bg-[#111530]/60 border border-[#2563EB]/15">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#EC4899] uppercase tracking-wide mb-2">
                <Film className="w-4.5 h-4.5" /> Genre Spectrum
              </div>
              <div className="flex flex-wrap gap-1.5">
                {movie.genres.slice(0, 4).map((g) => (
                  <span
                    key={g}
                    className="text-[10px] px-2.5 py-1 rounded-lg bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/30 font-semibold"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Streaming Availability */}
            <div className="p-4 rounded-xl bg-[#111530]/60 border border-[#2563EB]/15">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] uppercase tracking-wide mb-2">
                <Tv className="w-4.5 h-4.5" /> Stream Platforms
              </div>
              <div className="flex flex-wrap gap-1.5">
                {movie.streamingOn.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2.5 py-1 rounded-lg bg-[#EC4899]/10 text-[#F472B6] border border-[#EC4899]/30 font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cast & Director */}
          <div className="p-4 rounded-xl bg-[#111530]/60 border border-[#2563EB]/15 space-y-2 text-xs">
            <div>
              <span className="font-bold text-[#60A5FA]">Director: </span>
              <span className="text-[#F1F3FA] font-medium">{movie.director}</span>
            </div>
            <div>
              <span className="font-bold text-[#60A5FA]">Starring Cast: </span>
              <span className="text-[#F1F3FA] font-medium">{movie.cast.join(", ")}</span>
            </div>
          </div>

          {/* ── Genuine Similar Movies Row ── */}
          {similarMovies.length > 0 && (
            <div className="pt-2">
              <h3 className="text-xs font-body font-bold text-[#EC4899] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Similar Movies You May Like
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {similarMovies.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => {
                      // Trigger loading new details
                      onToggleWatchlist(movie); // dummy state update trigger if needed
                      onClose();
                      setTimeout(() => onSelectMovie(sim), 100);
                    }}
                    className="group cursor-pointer text-center space-y-1.5 relative"
                  >
                    <div className="aspect-[2/3] w-full rounded-lg overflow-hidden border border-[#2563EB]/20 group-hover:border-[#EC4899] transition-colors relative">
                      <img
                        src={sim.posterUrl}
                        alt={sim.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-1 right-1 px-1 py-0.5 rounded text-[8px] font-mono-num font-bold bg-[#0B0E20]/90 text-[#EC4899] border border-[#EC4899]/35">
                        {getMovieSimilarity(movie, sim)}%
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#F1F3FA] line-clamp-1 group-hover:text-[#EC4899] transition-colors">
                      {sim.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Section */}
          <div className="pt-4 border-t border-[#33303A]">
            <h3 className="text-xs font-body font-bold text-[#EC4899] uppercase tracking-widest mb-4 flex items-center gap-2">
              <MessageSquare className="w-4.5 h-4.5" /> Community Critic Reviews
            </h3>

            {/* Add Review Input */}
            <form onSubmit={handleAddReview} className="mb-4 flex gap-2">
              <input
                type="text"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                placeholder="Share your thoughts on this movie..."
                className="flex-1 bg-[#111530] text-xs text-[#F1F3FA] placeholder-[#6A7194] px-4 py-2.5 rounded-xl border border-[#2563EB]/25 focus:border-[#EC4899] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#EC4899] text-[#F1F3FA] text-xs font-semibold cursor-pointer hover:shadow-lg transition-shadow"
              >
                Post
              </button>
            </form>

            {/* Reviews List */}
            <div className="space-y-3">
              {localReviews.map((rev) => (
                <div key={rev.id} className="p-3.5 rounded-xl bg-[#111530]/40 border border-[#2563EB]/15 flex items-start gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.user}
                    className="w-8 h-8 rounded-full object-cover border border-[#2563EB]/35"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#F1F3FA]">{rev.user}</span>
                      <span className="text-[10px] text-[#6A7194] font-mono-num">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5 my-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" />
                      ))}
                    </div>
                    <p className="text-xs text-[#B0B6D0] mt-1 leading-relaxed">{rev.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
