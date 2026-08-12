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
  selectedLanguage, setSelectedLanguage, onSearchSubmit, onOpenSpinWheel,
}) => {
  const [query, setQuery]     = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <header
      className="sticky top-0 z-20 w-full px-4 sm:px-8 py-3 flex items-center justify-between gap-4"
      style={{
        background: "rgba(7,5,15,0.92)",
        backdropFilter: "blur(28px) saturate(1.5)",
        borderBottom: "1px solid rgba(147,51,234,0.2)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5), 0 0 60px rgba(147,51,234,0.04)",
      }}
    >
      {/* ── Royal AI Search Bar ── */}
      <form
        onSubmit={(e) => { e.preventDefault(); if (query.trim()) onSearchSubmit(query); }}
        className={`relative flex-1 max-w-xl ai-border rounded-xl transition-all duration-300 ${
          focused ? "shadow-[0_0_32px_rgba(212,175,55,0.12)]" : ""
        }`}
      >
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
          {focused
            ? <Sparkles className="w-4 h-4 animate-pulse" style={{ color: "#D4AF37" }} />
            : <Search className="w-4 h-4" style={{ color: "#7A6FA8" }} />
          }
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder='Ask Lumina AI — "emotional dramas", "mind-bending thrillers", "Tamil action"...'
          className="glass-input w-full font-body text-xs sm:text-sm rounded-xl pl-10 pr-20 py-2.5"
          style={{ color: "#F0ECFF" }}
        />

        {query && (
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md font-heading text-[10px] font-bold tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F0D060)",
              color: "#07050F",
            }}
          >
            ASK
          </button>
        )}
      </form>

      {/* ── Right Controls ── */}
      <div className="flex items-center gap-2">

        {/* Language selector */}
        <div
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors"
          style={{
            background: "rgba(13,10,30,0.9)",
            border: "1px solid rgba(46,36,86,0.9)",
          }}
        >
          <Globe className="w-3.5 h-3.5 shrink-0" style={{ color: "#C084FC" }} />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent font-body text-xs font-semibold outline-none cursor-pointer"
            style={{ color: "#F0ECFF" }}
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} style={{ background: "#0D0A1E", color: "#F0ECFF" }}>
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
