"use client";

import React, { useState } from "react";
import { LANGUAGES_LIST } from "@/data/movies";
import { Search, Globe, Bell, Dices, Sparkles } from "lucide-react";

interface HeaderProps {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  onSearchSubmit: (query: string) => void;
  onOpenSpinWheel: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  onSearchSubmit,
  onOpenSpinWheel
}) => {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-20 w-full bg-[#0F1220]/90 backdrop-blur-md border-b border-[#33395a] px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
      {/* Search Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSearchSubmit(query);
        }}
        className="relative flex-1 max-w-md"
      >
        <Search className="w-4 h-4 text-[#E8A33D] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Ask Lumina AI e.g. "Best Tamil thrillers" or "Mind blowing sci-fi"...'
          className="w-full bg-[#171B2E] text-xs text-[#F2F0E6] placeholder-[#6B6E8A] rounded-lg pl-9 pr-4 py-2 border border-[#33395a] focus:border-[#E8A33D] outline-none transition-all"
        />
      </form>

      {/* Right Controls: Language Selector & Surprise Wheel */}
      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <div className="flex items-center gap-1.5 bg-[#171B2E] px-3 py-1.5 rounded-lg border border-[#33395a]">
          <Globe className="w-3.5 h-3.5 text-[#3FA796]" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent text-xs font-semibold text-[#F2F0E6] outline-none cursor-pointer"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} className="bg-[#171B2E] text-[#F2F0E6]">
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Surprise Wheel Button */}
        <button
          onClick={onOpenSpinWheel}
          className="px-3 py-1.5 rounded-lg bg-[#E8A33D]/15 border border-[#E8A33D]/40 text-[#E8A33D] hover:bg-[#E8A33D] hover:text-[#0F1220] transition-all text-xs font-bold flex items-center gap-1.5"
        >
          <Dices className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Surprise Me</span>
        </button>
      </div>
    </header>
  );
};
