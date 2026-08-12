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
      className="sticky top-0 z-20 w-full px-4 sm:px-8 py-4 flex items-center justify-between gap-4 transition-all duration-300"
      style={{
        background: "rgba(11, 10, 12, 0.92)",
        backdropFilter: "blur(28px) saturate(1.2)",
        borderBottom: "1px solid rgba(212, 175, 106, 0.12)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.6), 0 0 60px rgba(212, 175, 106, 0.02)",
      }}
    >
      {/* ── AI SEARCH BAR ── */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) onSearchSubmit(query);
        }}
        className={`relative flex-1 max-w-xl ai-border rounded-xl transition-all duration-300 ${
          focused ? "shadow-[0_0_32px_rgba(212,175,106,0.15)]" : ""
        }`}
      >
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          {focused ? (
            <Sparkles className="w-4 h-4 animate-pulse text-[#E8C27D]" />
          ) : (
            <Search className="w-4 h-4 text-[#87847B]" />
          )}
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Ask Aether AI — "emotional dramas", "mind-bending thrillers", "Tamil action"...'
          className="glass-input w-full font-body text-xs sm:text-sm rounded-xl pl-10 pr-20 py-2.5 text-[#F7F5F0]"
        />

        {query && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md font-heading text-[10px] font-bold tracking-wide transition-all duration-200 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #D4AF6A, #E8C27D)",
              color: "#0B0A0C",
            }}
          >
            ASK
          </button>
        )}
      </form>

      {/* ── CONTROLS ── */}
      <div className="flex items-center gap-3">
        {/* Language selector */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors border"
          style={{
            background: "rgba(18, 17, 21, 0.9)",
            borderColor: "rgba(212, 175, 106, 0.15)",
          }}
        >
          <Globe className="w-3.5 h-3.5 shrink-0 text-[#D4AF6A]" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent font-body text-xs font-semibold outline-none cursor-pointer text-[#F7F5F0]"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} style={{ background: "#121115", color: "#F7F5F0" }}>
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
          <Dices className="w-3.5 h-3.5 text-[#D4AF6A]" />
          <span className="hidden sm:inline text-[11px] text-[#F7F5F0]">Surprise</span>
        </button>
      </div>
    </header>
  );
};
