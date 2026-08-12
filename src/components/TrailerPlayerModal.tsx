"use client";

import React from "react";
import { X } from "lucide-react";

interface TrailerPlayerModalProps {
  trailerId: string;
  onClose: () => void;
}

export const TrailerPlayerModal: React.FC<TrailerPlayerModalProps> = ({
  trailerId,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl bg-[#171B2E] border border-[#33395a] rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="flex items-center justify-between p-3 bg-[#0F1220] border-b border-[#33395a]">
          <span className="font-heading text-xs text-[#E8A33D] uppercase tracking-wider">
            Lumina Cinematic Trailer Preview
          </span>
          <button onClick={onClose} className="p-1 rounded text-[#A9AABF] hover:text-[#F2F0E6]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
            title="Movie Trailer"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
