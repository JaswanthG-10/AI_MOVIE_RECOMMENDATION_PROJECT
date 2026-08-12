"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { X, Scale, Star, Trophy, Clock } from "lucide-react";

interface MovieComparisonModalProps {
  onClose: () => void;
}

export const MovieComparisonModal: React.FC<MovieComparisonModalProps> = ({ onClose }) => {
  const [movieA, setMovieA] = useState<Movie>(MOVIES_DATABASE[0]); // Vikram
  const [movieB, setMovieB] = useState<Movie>(MOVIES_DATABASE[10]); // Inception

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl reel-container bg-[#171B2E] border border-[#33395a] shadow-2xl p-6 sm:p-8 space-y-6 relative rounded-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#33395a] pb-4">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-[#E8A33D]" />
            <h2 className="font-heading text-xl text-[#F2F0E6]">Lumina Movie Comparison Matrix</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#A9AABF] hover:text-[#F2F0E6]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dropdown Selectors */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-mono-num text-[#A9AABF] block mb-1">Film A</label>
            <select
              value={movieA.id}
              onChange={(e) => setMovieA(MOVIES_DATABASE.find((m) => m.id === e.target.value) || MOVIES_DATABASE[0])}
              className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-2.5 rounded-lg border border-[#33395a] outline-none"
            >
              {MOVIES_DATABASE.map((m) => (
                <option key={m.id} value={m.id}>{m.title} ({m.year}) - {m.language}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono-num text-[#A9AABF] block mb-1">Film B</label>
            <select
              value={movieB.id}
              onChange={(e) => setMovieB(MOVIES_DATABASE.find((m) => m.id === e.target.value) || MOVIES_DATABASE[1])}
              className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-2.5 rounded-lg border border-[#33395a] outline-none"
            >
              {MOVIES_DATABASE.map((m) => (
                <option key={m.id} value={m.id}>{m.title} ({m.year}) - {m.language}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 gap-6 pt-2">
          {/* Movie A Card */}
          <div className="p-4 rounded-xl bg-[#1E2338] border border-[#33395a] space-y-3">
            <img src={movieA.posterUrl} alt={movieA.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="font-heading text-lg text-[#F2F0E6]">{movieA.title}</h3>
            <div className="space-y-2 text-xs text-[#A9AABF]">
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>IMDb Rating</span>
                <span className="font-bold text-[#E8A33D] font-mono-num">★ {movieA.imdbRating}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Language</span>
                <span className="font-bold text-[#F2F0E6]">{movieA.language}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Runtime</span>
                <span className="font-mono-num">{movieA.runtime}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Director</span>
                <span>{movieA.director}</span>
              </div>
            </div>
          </div>

          {/* Movie B Card */}
          <div className="p-4 rounded-xl bg-[#1E2338] border border-[#33395a] space-y-3">
            <img src={movieB.posterUrl} alt={movieB.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="font-heading text-lg text-[#F2F0E6]">{movieB.title}</h3>
            <div className="space-y-2 text-xs text-[#A9AABF]">
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>IMDb Rating</span>
                <span className="font-bold text-[#E8A33D] font-mono-num">★ {movieB.imdbRating}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Language</span>
                <span className="font-bold text-[#F2F0E6]">{movieB.language}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Runtime</span>
                <span className="font-mono-num">{movieB.runtime}</span>
              </div>
              <div className="flex justify-between border-b border-[#33395a] pb-1">
                <span>Director</span>
                <span>{movieB.director}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
