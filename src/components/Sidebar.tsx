"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  Compass,
  Film,
  Globe,
  Flame,
  Star,
  Clock,
  Bookmark,
  Heart,
  History,
  Sparkles,
  Calendar,
  Trophy,
  Settings,
  User,
  HelpCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Dices,
  Scale
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpinWheel: () => void;
  onOpenComparison: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSpinWheel,
  onOpenComparison
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainNav = [
    { id: "home", label: "Home", icon: Home },
    { id: "search", label: "AI Search", icon: Search },
    { id: "discover", label: "Discover", icon: Compass },
    { id: "trending", label: "Trending", icon: Flame },
    { id: "top-rated", label: "Top Rated", icon: Star },
    { id: "latest", label: "Latest Releases", icon: Clock },
    { id: "collections", label: "Collections", icon: Film }
  ];

  const libraryNav = [
    { id: "watchlist", label: "Watchlist", icon: Bookmark },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "history", label: "Watch History", icon: History },
    { id: "recommendations", label: "AI Picks", icon: Sparkles },
    { id: "upcoming", label: "Upcoming", icon: Calendar },
    { id: "awards", label: "Award Winners", icon: Trophy }
  ];

  const systemNav = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "profile", label: "User Profile", icon: User },
    { id: "help", label: "Help Center", icon: HelpCircle }
  ];

  return (
    <aside
      className={`relative z-30 h-screen sticky top-0 bg-[#0F1220]/95 backdrop-blur-xl border-r border-[#33395a] flex flex-col justify-between transition-all duration-300 select-none ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Top Header Logo */}
      <div className="p-4 flex items-center justify-between border-b border-[#33395a]">
        {!isCollapsed && (
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab("home")}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#E8A33D] to-[#3FA796] flex items-center justify-center font-bold text-[#0F1220]">
              L
            </div>
            <div>
              <h1 className="font-heading text-lg tracking-wider text-[#F2F0E6]">
                LUMINA <span className="text-[#3FA796] text-xs">AI</span>
              </h1>
              <p className="text-[9px] font-mono-num text-[#A9AABF] -mt-1">v2.5 Pro</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-[#1E2338] border border-[#33395a] text-[#A9AABF] hover:text-[#F2F0E6] transition-colors mx-auto"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-none">
        {/* Main Section */}
        <div className="space-y-1">
          {!isCollapsed && (
            <span className="text-[10px] font-mono-num text-[#6B6E8A] uppercase tracking-widest px-3 block mb-1">
              Explore
            </span>
          )}
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#E8A33D] text-[#0F1220] font-bold shadow-md shadow-[#E8A33D]/20"
                    : "text-[#A9AABF] hover:bg-[#1E2338] hover:text-[#F2F0E6]"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>

        {/* Smart Features Triggers */}
        {!isCollapsed && (
          <div className="space-y-1 pt-2 border-t border-[#33395a]">
            <span className="text-[10px] font-mono-num text-[#6B6E8A] uppercase tracking-widest px-3 block mb-1">
              Smart Tools
            </span>
            <button
              onClick={onOpenSpinWheel}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-[#E8A33D] hover:bg-[#1E2338]"
            >
              <Dices className="w-4 h-4 shrink-0" />
              <span>Surprise Wheel</span>
            </button>
            <button
              onClick={onOpenComparison}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-[#3FA796] hover:bg-[#1E2338]"
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Compare Movies</span>
            </button>
          </div>
        )}

        {/* Library Section */}
        <div className="space-y-1 pt-2 border-t border-[#33395a]">
          {!isCollapsed && (
            <span className="text-[10px] font-mono-num text-[#6B6E8A] uppercase tracking-widest px-3 block mb-1">
              My Vault
            </span>
          )}
          {libraryNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#E8A33D] text-[#0F1220] font-bold shadow-md shadow-[#E8A33D]/20"
                    : "text-[#A9AABF] hover:bg-[#1E2338] hover:text-[#F2F0E6]"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>

        {/* System Section */}
        <div className="space-y-1 pt-2 border-t border-[#33395a]">
          {systemNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#E8A33D] text-[#0F1220] font-bold shadow-md shadow-[#E8A33D]/20"
                    : "text-[#A9AABF] hover:bg-[#1E2338] hover:text-[#F2F0E6]"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* User Profile Badge at bottom */}
      {!isCollapsed && (
        <div className="p-3 border-t border-[#33395a] bg-[#171B2E]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center border border-purple-400">
              UX
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-[#F2F0E6] block truncate">UserX</span>
              <span className="text-[10px] font-mono-num text-[#3FA796] block">Pro Member</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
