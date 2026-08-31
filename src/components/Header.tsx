"use client";

import React, { useState } from "react";
import { LANGUAGES_LIST } from "@/data/movies";
import { 
  Search, Globe, Dices, Sparkles, Bell, Film, Clapperboard, 
  Menu, X, Compass, Home, Flame, Bookmark, History, Calendar, 
  Settings, User, Scale, PlayCircle 
} from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  onSearchSubmit: (query: string) => void;
  onOpenSpinWheel: () => void;
  onOpenAiModal: () => void;
  onOpenNotifications?: () => void;
  onOpenComparison?: () => void;
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
  onOpenComparison,
}) => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "ai-modal", label: "AI Recommendations", isSpecial: true },
    { id: "genres", label: "Genres" },
    { id: "trending", label: "Trending" },
  ];

  const handleMobileNavClick = (tabId: string) => {
    setIsMobileMenuOpen(false);
    if (tabId === "ai-modal") {
      onOpenAiModal();
    } else {
      setActiveTab(tabId);
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3 transition-all duration-300 bg-[#070913]/90 backdrop-blur-2xl border-b border-white/10"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.7), 0 0 60px rgba(59, 130, 246, 0.05)",
        }}
      >
        {/* ── LEFT: LOGO + MOBILE HAMBURGER TOGGLE ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-2 group cursor-pointer outline-none"
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
            <span className="font-heading text-lg font-extrabold tracking-tight text-white inline-block">
              Lumina <span className="text-gradient-amber">AI</span>
            </span>
          </button>
        </div>

        {/* ── CENTER: NAVIGATION LINKS (DESKTOP) ── */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            if (link.isSpecial) {
              return (
                <button
                  key={link.id}
                  onClick={onOpenAiModal}
                  className="px-3.5 py-1.5 rounded-xl font-body text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white hover:opacity-90 hover:scale-105 min-h-[36px]"
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
                className={`px-3.5 py-1.5 rounded-xl font-body text-xs font-semibold transition-all cursor-pointer min-h-[36px] ${
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

        {/* ── RIGHT: QUICK SEARCH + LANGUAGE + NOTIFICATIONS + PROFILE ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger input (Desktop/Tablet) */}
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
              className="w-32 md:w-44 font-body text-xs rounded-xl pl-8 pr-3 py-1.5 text-white placeholder-zinc-500 bg-black/40 outline-none"
            />
          </form>

          {/* Quick Search Trigger Icon (Mobile Only) */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className="sm:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
            title="Search"
          >
            <Search className="w-4 h-4 text-purple-400" />
          </button>

          {/* Language selector */}
          <div className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 rounded-xl bg-white/5 border border-white/10">
            <Globe className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent font-body text-xs font-semibold outline-none cursor-pointer text-white max-w-[95px] sm:max-w-none truncate"
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
            className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
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
            className="relative cursor-pointer group shrink-0"
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

      {/* ── MOBILE SEARCH INPUT EXPANDABLE BAR ── */}
      {isMobileSearchOpen && (
        <div className="sm:hidden sticky top-[57px] z-30 px-4 py-2.5 bg-[#070913]/95 border-b border-purple-500/30 backdrop-blur-xl animate-fade-up">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) {
                onSearchSubmit(query);
                setIsMobileSearchOpen(false);
              }
            }}
            className="relative flex items-center w-full"
          >
            <Search className="w-4 h-4 text-purple-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, genres, actors..."
              autoFocus
              className="w-full font-body text-xs rounded-xl pl-9 pr-10 py-2 text-white placeholder-zinc-500 bg-black/60 border border-purple-500/40 outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 text-purple-400 font-bold text-xs p-1"
            >
              Go
            </button>
          </form>
        </div>
      )}

      {/* ── MOBILE SLIDE-OVER DRAWER MENU ── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#070913]/80 backdrop-blur-md flex justify-start animate-fade-up md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-xs h-full bg-[#0B0E20] border-r border-purple-500/30 p-5 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 flex items-center justify-center text-white font-bold">
                    ✦
                  </div>
                  <span className="font-heading font-extrabold text-base text-white">Lumina Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Nav Items */}
              <div className="space-y-1">
                <p className="text-[10px] font-mono-num font-bold text-purple-400 uppercase tracking-wider px-2 pb-1">
                  Discover Cinema
                </p>
                <button
                  onClick={() => handleMobileNavClick("home")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "home" ? "bg-purple-600/30 text-purple-300 border border-purple-500/40" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Home className="w-4 h-4 text-purple-400" /> Home
                </button>

                <button
                  onClick={() => handleMobileNavClick("discover")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "discover" ? "bg-purple-600/30 text-purple-300 border border-purple-500/40" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Compass className="w-4 h-4 text-blue-400" /> Discover Vault
                </button>

                <button
                  onClick={() => handleMobileNavClick("search")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "search" ? "bg-purple-600/30 text-purple-300 border border-purple-500/40" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-pink-400" /> Lumina AI Search
                </button>

                <button
                  onClick={() => handleMobileNavClick("trending")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "trending" ? "bg-purple-600/30 text-purple-300 border border-purple-500/40" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Flame className="w-4 h-4 text-amber-400" /> Trending Movies
                </button>

                <button
                  onClick={() => handleMobileNavClick("genres")}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "genres" ? "bg-purple-600/30 text-purple-300 border border-purple-500/40" : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <Film className="w-4 h-4 text-emerald-400" /> All Genres
                </button>
              </div>

              {/* Library Items */}
              <div className="space-y-1 border-t border-white/10 pt-4">
                <p className="text-[10px] font-mono-num font-bold text-blue-400 uppercase tracking-wider px-2 pb-1">
                  Your Library
                </p>
                <button
                  onClick={() => handleMobileNavClick("continue")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-white/5"
                >
                  <PlayCircle className="w-4 h-4 text-purple-400" /> Continue Watching
                </button>

                <button
                  onClick={() => handleMobileNavClick("watchlist")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-white/5"
                >
                  <Bookmark className="w-4 h-4 text-pink-400" /> Watchlist
                </button>

                <button
                  onClick={() => handleMobileNavClick("history")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-white/5"
                >
                  <History className="w-4 h-4 text-blue-400" /> Watch History
                </button>

                <button
                  onClick={() => handleMobileNavClick("motd")}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:bg-white/5"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" /> Movie of the Day
                </button>
              </div>

              {/* AI Interactive Tools */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <p className="text-[10px] font-mono-num font-bold text-pink-400 uppercase tracking-wider px-2 pb-1">
                  Interactive Tools
                </p>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSpinWheel();
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-pink-500/15 text-pink-300 border border-pink-500/30 hover:bg-pink-500/25"
                >
                  <Dices className="w-4 h-4 text-pink-400 animate-bounce" /> Surprise Me Wheel
                </button>

                {onOpenComparison && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenComparison();
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25"
                  >
                    <Scale className="w-4 h-4 text-blue-400" /> Compare Movies
                  </button>
                )}
              </div>
            </div>

            {/* Bottom Settings & Profile Links */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <button
                onClick={() => handleMobileNavClick("settings")}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white"
              >
                <Settings className="w-4 h-4" /> Platform Settings
              </button>

              <button
                onClick={() => handleMobileNavClick("profile")}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white"
              >
                <User className="w-4 h-4" /> Taste Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
