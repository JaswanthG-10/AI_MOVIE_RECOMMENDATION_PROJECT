"use client";

import React from "react";
import { LANGUAGES_LIST } from "@/data/movies";
import { Search, Globe, Dices, Sparkles } from "lucide-react";
import { useState } from "react";

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
  onOpenSpinWheel,
}) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full glass-panel border-b border-[#33395a] px-4 sm:px-8 py-3 flex items-center justify-between gap-4">

      {/* ── AI Search Bar ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSearchSubmit(query);
        }}
        className={`relative flex-1 max-w-xl ai-border rounded-lg transition-all duration-300 ${focused ? "shadow-[0_0_24px_rgba(232,163,61,0.15)]" : ""}`}
      >
        {/* Animated icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {focused
            ? <Sparkles className="w-4 h-4 text-[#E8A33D] animate-pulse" />
            : <Search className="w-4 h-4 text-[#6B6E8A]" />
          }
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Ask Lumina AI — "emotional dramas", "mind-bending thrillers", "Tamil action"...'
          className="glass-input w-full text-xs font-body text-[#F2F0E6] placeholder-[#6B6E8A] rounded-lg pl-9 pr-16 py-2.5"
        />

        {/* Submit chip */}
        {query && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#E8A33D] text-[#0F1220] font-heading text-[10px] font-bold tracking-wide hover:bg-[#FFD580] transition-all"
          >
            ASK
          </button>
        )}
      </form>

      {/* ── Right Controls ── */}
      <div className="flex items-center gap-2">

        {/* Language Selector */}
        <div className="flex items-center gap-1.5 bg-[#171B2E] px-3 py-2 rounded-lg border border-[#33395a] hover:border-[#3FA796]/60 transition-colors">
          <Globe className="w-3.5 h-3.5 text-[#3FA796] shrink-0" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent font-body text-xs font-semibold text-[#F2F0E6] outline-none cursor-pointer"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} className="bg-[#171B2E] text-[#F2F0E6]">
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Surprise Me */}
        <button
          onClick={onOpenSpinWheel}
          className="btn-ghost flex items-center gap-1.5 !py-2 !px-3"
          title="Surprise Me — Spin the Wheel"
        >
          <Dices className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">Surprise</span>
        </button>
      </div>
    </header>
  );
};
