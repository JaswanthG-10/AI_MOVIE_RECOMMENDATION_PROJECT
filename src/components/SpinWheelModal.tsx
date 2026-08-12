"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { X, Sparkles, Dices, Play } from "lucide-react";

interface SpinWheelModalProps {
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
}

export const SpinWheelModal: React.FC<SpinWheelModalProps> = ({
  onClose,
  onSelectMovie
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [chosenMovie, setChosenMovie] = useState<Movie | null>(null);

  const handleSpin = () => {
    setIsSpinning(true);
    setChosenMovie(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MOVIES_DATABASE.length);
      setChosenMovie(MOVIES_DATABASE[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-lg reel-container bg-[#171B2E] border border-[#33395a] shadow-2xl p-6 sm:p-8 space-y-6 relative rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E8A33D] text-[#0F1220] flex items-center justify-center font-bold">
              <Dices className="w-5 h-5" />
            </div>
            <h2 className="font-heading text-xl text-[#F2F0E6]">Surprise Me: Spin The Wheel</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded text-[#A9AABF] hover:text-[#F2F0E6]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-[#A9AABF] text-center">
          Can't decide what to watch? Let Lumina AI's randomizer pick a masterpiece for your evening!
        </p>

        {/* Wheel Graphic Container */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          <div
            className={`w-40 h-40 rounded-full border-4 border-[#E8A33D] flex items-center justify-center bg-[#1E2338] shadow-2xl shadow-[#E8A33D]/20 transition-transform duration-1000 ${
              isSpinning ? "animate-spin" : ""
            }`}
          >
            <Sparkles className="w-12 h-12 text-[#E8A33D] animate-pulse" />
          </div>

          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="mt-6 px-8 py-3 rounded-xl bg-[#E8A33D] text-[#0F1220] font-heading font-bold text-sm hover:bg-[#E8A33D]/90 transition-all shadow-lg shadow-[#E8A33D]/30 flex items-center gap-2"
          >
            <Dices className="w-4 h-4" /> {isSpinning ? "Spinning..." : "Spin the Wheel!"}
          </button>
        </div>

        {/* Result Announcement */}
        {chosenMovie && (
          <div className="p-4 rounded-xl bg-[#1E2338] border border-[#3FA796] flex items-center gap-4 animate-in zoom-in-95">
            <img
              src={chosenMovie.posterUrl}
              alt={chosenMovie.title}
              className="w-16 h-24 object-cover rounded-lg"
            />
            <div className="space-y-1 flex-1">
              <span className="text-[10px] font-mono-num px-2 py-0.5 rounded bg-[#3FA796] text-[#0F1220] font-bold">
                LUMINA DECISION
              </span>
              <h4 className="font-heading text-lg text-[#F2F0E6]">{chosenMovie.title}</h4>
              <p className="text-xs text-[#A9AABF] line-clamp-1">{chosenMovie.synopsis}</p>
              <button
                onClick={() => {
                  onSelectMovie(chosenMovie);
                  onClose();
                }}
                className="mt-2 text-xs font-bold text-[#E8A33D] hover:underline flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" /> Open Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
