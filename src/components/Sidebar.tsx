"use client";

import React, { useState } from "react";
import { 
  Home, 
  Compass, 
  Sparkles, 
  Flame, 
  Star, 
  Clock, 
  Bookmark, 
  Award, 
  Settings,
  Search,
  ChevronRight,
  History
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  watchlistCount: number;
  onSearchSubmit: (query: string) => void;
  onOpenProfileDropdown?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  watchlistCount,
  onSearchSubmit,
  onOpenProfileDropdown
}) => {
  const [sidebarSearch, setSidebarSearch] = useState("");

  const mainNavItems = [
    { id: "home", label: "Dashboard", icon: Home },
    { id: "discover", label: "Discover Catalog", icon: Compass },
    { id: "ai-assistant", label: "AI Recommendations", icon: Sparkles, badge: "GEMINI 2.5" },
    { id: "trending", label: "Trending Today", icon: Flame },
    { id: "top-rated", label: "Top Rated", icon: Star },
    { id: "watch-history", label: "Watch History", icon: History },
    { id: "continue-watching", label: "Continue Watching", icon: Clock },
    { id: "watchlist", label: "My Watchlist", icon: Bookmark, count: watchlistCount },
    { id: "movie-of-the-day", label: "Movie of the Day", icon: Award },
    { id: "settings", label: "Platform Settings", icon: Settings }
  ];

  const handleSidebarSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarSearch.trim()) {
      onSearchSubmit(sidebarSearch);
      setActiveTab("ai-assistant");
    }
  };

  return (
    <aside className="w-[270px] h-screen sticky top-0 bg-[#09090b]/95 backdrop-blur-2xl border-r border-zinc-800/80 flex flex-col justify-between p-4 z-40 hidden lg:flex select-none">
      <div className="flex-1 overflow-y-auto pr-1 space-y-5 scrollbar-none">
        {/* Top Brand Logo Section */}
        <div 
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 px-2 py-3 cursor-pointer group"
          role="button"
          aria-label="Go to Home Dashboard"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 p-0.5 shadow-xl shadow-purple-950/60 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/lumina_logo.png"
              alt="Lumina AI Logo"
              className="w-full h-full rounded-[14px] object-cover"
            />
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tight text-white flex items-center gap-1.5 font-syne">
              LUMINA <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-space font-bold">AI</span>
            </h1>
            <p className="text-[10px] text-zinc-400 font-semibold tracking-wider uppercase">Neural Cinema Engine</p>
          </div>
        </div>

        {/* Sidebar Search Input */}
        <form onSubmit={handleSidebarSearchSubmit} className="relative">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={sidebarSearch}
            onChange={(e) => setSidebarSearch(e.target.value)}
            placeholder="Quick search AI prompt..."
            className="w-full bg-zinc-900/90 text-xs text-white placeholder-zinc-500 rounded-xl pl-8 pr-3 py-2 border border-zinc-800 focus:border-purple-500 outline-none transition-all"
          />
        </form>

        {/* Navigation Section */}
        <div className="space-y-1">
          <p className="px-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
            Platform Menu
          </p>
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/25 to-blue-600/15 text-white border border-purple-500/40 shadow-lg shadow-purple-950/40"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/70"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-purple-400" : "text-zinc-500"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow">
                    {item.badge}
                  </span>
                )}
                {item.count !== undefined && item.count > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 font-space font-bold">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* User Profile Footer (Clean UX Initials Icon, No External Photo) */}
      <div 
        onClick={onOpenProfileDropdown}
        className="pt-3 border-t border-zinc-800/80 flex items-center justify-between px-1 cursor-pointer hover:bg-zinc-900/40 rounded-xl transition-colors p-1"
        role="button"
        aria-label="User profile options"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center font-bold text-xs text-purple-300 font-space shrink-0 shadow">
            UX
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white truncate">UserX</h4>
            <p className="text-[10px] text-purple-400 font-medium truncate">VIP Neural Plan</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-zinc-500" />
      </div>
    </aside>
  );
};
