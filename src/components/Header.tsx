"use client";

import React, { useState, useRef } from "react";
import { 
  Sparkles, 
  Mic, 
  Search, 
  Bell, 
  Menu, 
  Settings,
  User as UserIcon,
  Clock,
  Sliders,
  Sun,
  LogOut,
  ChevronDown
} from "lucide-react";
import { MOVIES_DATABASE } from "@/data/movies";

interface HeaderProps {
  onSearchSubmit: (query: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenNotifications: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchSubmit,
  activeTab,
  setActiveTab,
  onOpenNotifications
}) => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Mind-bending thrillers like Inception",
    "Christopher Nolan space epics",
    "Upbeat family comedy movies"
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const autocompleteSuggestions = query.trim()
    ? MOVIES_DATABASE.filter(
        (m) =>
          m.title.toLowerCase().includes(query.toLowerCase()) ||
          m.genres.some((g) => g.toLowerCase().includes(query.toLowerCase())) ||
          m.director.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (!recentSearches.includes(query.trim())) {
        setRecentSearches([query.trim(), ...recentSearches.slice(0, 4)]);
      }
      onSearchSubmit(query);
      setActiveTab("ai-assistant");
      setIsSearchFocused(false);
    }
  };

  const handleRecentClick = (recentText: string) => {
    setQuery(recentText);
    onSearchSubmit(recentText);
    setActiveTab("ai-assistant");
    setIsSearchFocused(false);
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    const sampleVoiceQueries = [
      "I want an emotional movie with a happy ending",
      "Movies like Interstellar with deep space themes",
      "Funny comedy for a rainy family night",
      "Mind-bending psychological thrillers"
    ];
    const randomQuery = sampleVoiceQueries[Math.floor(Math.random() * sampleVoiceQueries.length)];
    
    setTimeout(() => {
      setQuery(randomQuery);
      setIsListening(false);
      onSearchSubmit(randomQuery);
      setActiveTab("ai-assistant");
    }, 1200);
  };

  const handleSearchIconClick = () => {
    inputRef.current?.focus();
    setIsSearchFocused(true);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-[#09090b]/95 backdrop-blur-2xl border-b border-zinc-800/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 select-none">
      {/* Left: Hamburger Menu & Brand Name + Tagline */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setActiveTab(activeTab === "home" ? "discover" : "home")}
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
          role="button"
          aria-label="Lumina AI Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 p-0.5 shadow-lg shadow-purple-950/50 group-hover:scale-105 transition-transform">
            <img
              src="/lumina_logo.png"
              alt="Lumina AI Logo"
              className="w-full h-full rounded-[10px] object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-black text-base tracking-tight text-white font-syne flex items-center gap-1.5">
              LUMINA <span className="text-purple-400">AI</span>
            </h1>
            <p className="text-[10px] text-purple-300/80 font-medium">AI Movie Recommendation Platform</p>
          </div>
        </div>
      </div>

      {/* Center: Search Bar with Autocomplete & Recent Searches Overlay */}
      <div className="flex-1 max-w-xl relative">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <button
            type="button"
            onClick={handleSearchIconClick}
            className="w-4 h-4 text-purple-400 absolute left-4 cursor-pointer hover:text-purple-300"
            aria-label="Focus search input"
          >
            <Search className="w-4 h-4" />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search natural language AI prompt: e.g. mind-bending thriller like Inception..."
            className="w-full bg-zinc-900/90 text-xs text-zinc-100 placeholder-zinc-500 rounded-full pl-10 pr-24 py-2.5 border border-zinc-800 focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
          />

          <div className="absolute right-2 flex items-center gap-1">
            <button
              type="button"
              onClick={handleVoiceSearch}
              title="Voice Search"
              aria-label="Voice Search"
              className={`p-1.5 rounded-full text-zinc-400 hover:text-white transition-all ${
                isListening ? "bg-purple-600/40 text-purple-300 animate-pulse" : "hover:bg-zinc-800"
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
            </button>
            <button
              type="submit"
              className="px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[11px] font-bold hover:from-purple-500 hover:to-blue-500 transition-all flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" /> Match
            </button>
          </div>
        </form>

        {/* Autocomplete & Recent Searches Dropdown Overlay */}
        {isSearchFocused && (
          <div className="absolute left-0 right-0 top-12 z-50 glass-panel rounded-2xl border border-zinc-800 shadow-2xl p-3 space-y-3 animate-in fade-in">
            {/* Live Autocomplete suggestions if typing */}
            {autocompleteSuggestions.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider px-2">Suggestions</p>
                {autocompleteSuggestions.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      setQuery(m.title);
                      onSearchSubmit(m.title);
                      setActiveTab("ai-assistant");
                      setIsSearchFocused(false);
                    }}
                    className="p-2 rounded-xl hover:bg-purple-950/40 cursor-pointer flex items-center justify-between text-xs text-white"
                  >
                    <span className="font-semibold">{m.title}</span>
                    <span className="text-[10px] text-purple-400 font-space">{m.matchScore}% Match</span>
                  </div>
                ))}
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider px-2">Recent Searches</p>
                {recentSearches.map((recText) => (
                  <div
                    key={recText}
                    onClick={() => handleRecentClick(recText)}
                    className="p-2 rounded-xl hover:bg-zinc-800/80 cursor-pointer flex items-center gap-2 text-xs text-zinc-300"
                  >
                    <Clock className="w-3 h-3 text-zinc-500" />
                    <span>{recText}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Utilities & Profile Dropdown */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notifications Icon */}
        <button 
          onClick={onOpenNotifications}
          title="Notifications"
          aria-label="View notifications"
          className="relative p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-purple-500 absolute top-1.5 right-1.5 animate-pulse"></span>
        </button>

        {/* Settings Icon */}
        <button 
          onClick={() => setActiveTab("settings")}
          title="Settings"
          aria-label="Open platform settings"
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* User Profile Section with UX Initials Badge */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1 rounded-xl hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800"
            aria-label="UserX Profile Menu"
          >
            <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center font-bold text-xs text-purple-300 font-space shrink-0 shadow">
              UX
            </div>
            <span className="text-xs font-bold text-white hidden md:inline">UserX</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400 hidden sm:inline" />
          </button>

          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 top-12 z-50 w-56 glass-panel rounded-2xl border border-zinc-800 shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2">
              <div className="p-3 border-b border-zinc-800/80 mb-1">
                <h4 className="font-bold text-xs text-white">UserX</h4>
                <p className="text-[10px] text-purple-400 font-medium">userx@lumina.ai</p>
              </div>

              <button
                onClick={() => {
                  setActiveTab("settings");
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <UserIcon className="w-3.5 h-3.5 text-purple-400" /> Profile
              </button>

              <button
                onClick={() => {
                  setActiveTab("taste-profile");
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <Sliders className="w-3.5 h-3.5 text-blue-400" /> Preferences
              </button>

              <button
                onClick={() => {
                  setActiveTab("watch-history");
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> Watch History
              </button>

              <button
                onClick={() => {
                  setActiveTab("settings");
                  setIsProfileOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" /> Theme Options
              </button>

              <div className="h-[1px] bg-zinc-800/80 my-1"></div>

              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  alert("UserX successfully logged out.");
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-red-400 hover:bg-red-950/30 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
