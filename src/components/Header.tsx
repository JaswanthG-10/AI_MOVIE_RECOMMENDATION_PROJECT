"use client";

import React, { useState } from "react";
import { LANGUAGES_LIST } from "@/data/movies";
import { Search, Globe, Dices, Sparkles } from "lucide-react";

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
    <header
      className="sticky top-0 z-20 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 transition-all duration-300"
      style={{
        background: "rgba(6, 8, 19, 0.85)",
        backdropFilter: "blur(28px) saturate(1.4)",
        borderBottom: "1px solid rgba(37, 99, 235, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 60px rgba(37, 99, 235, 0.05)",
      }}
    >
      {/* ── AI SEARCH BAR ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSearchSubmit(query);
        }}
        className={`relative flex-1 max-w-xl rounded-2xl transition-all duration-300 ${
          focused
            ? "shadow-[0_0_25px_rgba(236,72,153,0.25)] border-[#EC4899]"
            : "border-[#2563EB]/25 hover:border-[#2563EB]/50"
        }`}
        style={{ border: "1px solid" }}
      >
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          {focused ? (
            <Sparkles className="w-4 h-4 animate-pulse text-[#EC4899]" />
          ) : (
            <Search className="w-4 h-4 text-[#6A7194]" />
          )}
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Ask Lumina AI — "emotional dramas", "mind-bending thrillers", "Tamil action"...'
          className="w-full font-body text-xs sm:text-sm rounded-2xl pl-10 pr-20 py-2.5 text-[#F1F3FA] placeholder-[#6A7194] bg-[#0B0E20]/90 outline-none transition-all"
        />

        {query && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-xl font-heading text-[10px] font-bold tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
              color: "#F1F3FA",
            }}
          >
            SEARCH
          </button>
        )}
      </form>

      {/* ── CONTROLS ── */}
      <div className="flex items-center gap-3">
        {/* Language selector */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all border"
          style={{
            background: "rgba(17, 21, 48, 0.8)",
            borderColor: "rgba(37, 99, 235, 0.3)",
          }}
        >
          <Globe className="w-4 h-4 shrink-0 text-[#60A5FA]" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent font-body text-xs font-bold outline-none cursor-pointer text-[#F1F3FA]"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} style={{ background: "#0B0E20", color: "#F1F3FA" }}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Surprise Me Button */}
        <button
          onClick={onOpenSpinWheel}
          className="px-3.5 py-2 rounded-xl font-body text-xs font-bold flex items-center gap-2 border border-[#EC4899]/30 bg-[#EC4899]/10 text-[#F472B6] hover:bg-[#EC4899]/20 hover:border-[#EC4899]/60 transition-all cursor-pointer shadow-md"
          title="Surprise Me — Spin the Wheel"
        >
          <Dices className="w-4 h-4 text-[#EC4899] animate-bounce" />
          <span className="hidden sm:inline">Surprise</span>
        </button>
      </div>
    </header>
  );
};
