"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { 
  X, 
  Star, 
  Sparkles, 
  Play, 
  Clock, 
  Film, 
  User, 
  Tv, 
  Bookmark, 
  Heart,
  MessageSquare
} from "lucide-react";

interface MovieDetailsModalProps {
  movie: Movie | null;
  onClose: () => void;
  onToggleWatchlist: (movie: Movie) => void;
  isWatchlisted: boolean;
}

export const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  movie,
  onClose,
  onToggleWatchlist,
  isWatchlisted
}) => {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [localReviews, setLocalReviews] = useState(movie?.reviews || []);

  if (!movie) return null;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newRev = {
      id: Date.now().toString(),
      user: "Sophia Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      date: "Just now",
      comment: userComment
    };

    setLocalReviews([newRev, ...localReviews]);
    setUserComment("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Modal Card */}
      <div className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden border border-zinc-700/60 shadow-2xl relative max-h-[92vh] flex flex-col my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner / Video Player */}
        <div className="relative aspect-video max-h-[380px] w-full bg-zinc-950 overflow-hidden">
          {isPlayingTrailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${movie.trailerId}?autoplay=1`}
              title={`${movie.title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>

              {/* Play Trailer CTA */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingTrailer(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold flex items-center gap-2 shadow-2xl shadow-purple-900/80 hover:scale-105 transition-transform"
                >
                  <Play className="w-5 h-5 fill-white" /> Watch Trailer
                </button>
              </div>
            </>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold font-space flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-purple-400" /> {movie.matchScore}% Match
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-space flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400" /> IMDb {movie.imdbRating}
                </span>
                <span className="text-xs text-zinc-400 font-medium">{movie.year}</span>
                <span className="text-xs text-zinc-400 flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3" /> {movie.runtime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {movie.title}
              </h2>
            </div>

            {/* Watchlist Toggle CTA */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleWatchlist(movie)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 border transition-all ${
                  isWatchlisted
                    ? "bg-purple-600/30 border-purple-500 text-purple-300"
                    : "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isWatchlisted ? "fill-purple-400" : ""}`} />
                {isWatchlisted ? "Saved in Watchlist" : "Add to Watchlist"}
              </button>
            </div>
          </div>

          {/* AI Match Explanation Panel */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-blue-950/30 border border-purple-500/30">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" /> Lumina AI Reasoning
            </div>
            <p className="text-sm text-purple-100 leading-relaxed italic">
              "{movie.aiReasoning}"
            </p>
          </div>

          {/* Synopsis */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Synopsis
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Genres & Streaming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Genres */}
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 mb-2">
                <Film className="w-3.5 h-3.5 text-purple-400" /> Genres
              </div>
              <div className="flex flex-wrap gap-1.5">
                {movie.genres.map((g) => (
                  <span
                    key={g}
                    className="text-xs px-2.5 py-1 rounded-lg bg-purple-950/40 text-purple-200 border border-purple-800/40"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Streaming Availability */}
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 mb-2">
                <Tv className="w-3.5 h-3.5 text-blue-400" /> Available on Streaming
              </div>
              <div className="flex flex-wrap gap-1.5">
                {movie.streamingOn.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-lg bg-blue-950/40 text-blue-200 border border-blue-800/40 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cast & Director */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <div className="text-xs">
              <span className="font-semibold text-zinc-400">Director: </span>
              <span className="text-zinc-200">{movie.director}</span>
            </div>
            <div className="text-xs">
              <span className="font-semibold text-zinc-400">Cast: </span>
              <span className="text-zinc-200">{movie.cast.join(", ")}</span>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="pt-4 border-t border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" /> Community Reviews
            </h3>

            {/* Add Review Input */}
            <form onSubmit={handleAddReview} className="mb-4 flex gap-2">
              <input
                type="text"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                placeholder="Share your thoughts on this movie..."
                className="flex-1 bg-zinc-900 text-xs text-white placeholder-zinc-500 px-3 py-2 rounded-xl border border-zinc-800 focus:border-purple-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
              >
                Post
              </button>
            </form>

            {/* Reviews List */}
            <div className="space-y-3">
              {localReviews.map((rev) => (
                <div key={rev.id} className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex items-start gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-zinc-200">{rev.user}</span>
                      <span className="text-[10px] text-zinc-500">{rev.date}</span>
                    </div>
                    <div className="flex items-center gap-1 my-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-300 mt-1">{rev.comment}</p>
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
