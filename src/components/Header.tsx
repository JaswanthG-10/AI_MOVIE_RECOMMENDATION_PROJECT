"use client";

import React, { useState } from "react";
import { LANGUAGES_LIST } from "@/data/movies";
import { Search, Globe, Dices, Sparkles, Bell, Film, Clapperboard } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  onSearchSubmit: (query: string) => void;
  onOpenSpinWheel: () => void;
  onOpenAiModal: () => void;
  onOpenNotifications?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedLanguage,
  setSelectedLanguage,
  onSearchSubmit,
  onOpenSpinWheel,
  onOpenAiModal,
  onOpenNotifications,
}) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "ai-modal", label: "AI Recommendations", isSpecial: true },
    { id: "genres", label: "Genres" },
    { id: "trending", label: "Trending" },
  ];

  return (
    <header
      className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 transition-all duration-300 bg-[#070913]/90 backdrop-blur-2xl border-b border-white/10"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7), 0 0 60px rgba(59, 130, 246, 0.05)",
      }}
    >
      {/* ── LEFT: LOGO ── */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-2.5 group cursor-pointer outline-none"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
            }}
          >
            <span className="text-base font-black">✦</span>
          </div>
          <span className="font-heading text-lg font-extrabold tracking-tight text-white hidden sm:inline-block">
            Lumina <span className="text-gradient-amber">AI</span>
          </span>
        </button>
      </div>

      {/* ── CENTER: NAVIGATION LINKS ── */}
      <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          if (link.isSpecial) {
            return (
              <button
                key={link.id}
                onClick={onOpenAiModal}
                className="px-3.5 py-1.5 rounded-xl font-body text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white hover:opacity-90 hover:scale-105"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {link.label}
              </button>
            );
          }
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`px-3.5 py-1.5 rounded-xl font-body text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/40 font-bold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* ── RIGHT: QUICK SEARCH + NOTIFICATIONS + PROFILE ── */}
      <div className="flex items-center gap-3">
        {/* Quick Search trigger input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (query.trim()) onSearchSubmit(query);
          }}
          className={`relative hidden sm:flex items-center max-w-xs rounded-xl transition-all duration-300 ${
            focused
              ? "shadow-[0_0_20px_rgba(139,92,246,0.3)] border-purple-500"
              : "border-white/10 hover:border-white/20"
          }`}
          style={{ border: "1px solid" }}
        >
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Quick search..."
            className="w-36 md:w-44 font-body text-xs rounded-xl pl-8 pr-3 py-1.5 text-white placeholder-zinc-500 bg-black/40 outline-none"
          />
        </form>

        {/* Language selector */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-transparent font-body text-xs font-semibold outline-none cursor-pointer text-white"
          >
            {LANGUAGES_LIST.map((lang) => (
              <option key={lang.id} value={lang.id} style={{ background: "#070913", color: "#F1F3FA" }}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Notification Bell */}
        <button
          onClick={() => {
            setUnreadNotifications(0);
            if (onOpenNotifications) onOpenNotifications();
          }}
          className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-white font-mono-num text-[9px] font-bold flex items-center justify-center border border-[#070913] animate-pulse">
              {unreadNotifications}
            </span>
          )}
        </button>

        {/* User Profile Avatar */}
        <button
          onClick={() => setActiveTab("profile")}
          className="relative cursor-pointer group"
          title="User Profile"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 p-0.5 shadow-md transition-transform group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-[#070913] flex items-center justify-center font-bold text-xs text-white">
              LA
            </div>
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#070913]" />
        </button>
      </div>
    </header>
  );
};
