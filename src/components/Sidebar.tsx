"use client";

import React, { useState } from "react";
import {
  Home,
  Compass,
  Sparkles,
  Flame,
  Film,
  PlayCircle,
  History,
  Bookmark,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  Dices,
  Scale,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpinWheel: () => void;
  onOpenComparison: () => void;
}

const navItems = [
  { id: "home",      label: "Home",             icon: Home },
  { id: "discover",  label: "Discover",          icon: Compass },
  { id: "search",    label: "AI Recommendations",icon: Sparkles },
  { id: "trending",  label: "Trending",          icon: Flame },
  { id: "genres",    label: "Genres",            icon: Film },
  { id: "continue",  label: "Continue Watching", icon: PlayCircle },
  { id: "history",   label: "Watch History",     icon: History },
  { id: "watchlist", label: "Watchlist",         icon: Bookmark },
  { id: "motd",      label: "Movie of the Day",  icon: Calendar },
  { id: "settings",  label: "Settings",          icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSpinWheel,
  onOpenComparison,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative z-30 h-screen sticky top-0 glass-panel border-r border-[#33395a] flex flex-col justify-between transition-all duration-300 select-none ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* ── Logo / Brand ── */}
      <div className="p-4 flex items-center justify-between border-b border-[#33395a]">
        {!isCollapsed && (
          <button
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            {/* Logo mark */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8A33D] to-[#3FA796] flex items-center justify-center font-heading font-bold text-[#0F1220] shadow-lg shadow-[#E8A33D]/30 group-hover:shadow-[#E8A33D]/50 transition-shadow text-sm">
              L
            </div>
            <div>
              <div className="font-heading text-base tracking-widest text-[#F2F0E6] leading-none">
                LUMINA <span className="text-[#3FA796]">AI</span>
              </div>
              <div className="font-mono-num text-[9px] text-[#6B6E8A] mt-0.5 tracking-wider">
                v2.5 PRO
              </div>
            </div>
          </button>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-1.5 rounded-lg bg-[#1E2338] border border-[#33395a] text-[#A9AABF] hover:text-[#F2F0E6] hover:border-[#E8A33D]/50 transition-all ${isCollapsed ? "mx-auto" : ""}`}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed
            ? <ChevronRight className="w-4 h-4" />
            : <ChevronLeft className="w-4 h-4" />
          }
        </button>
      </div>

      {/* ── Navigation ── */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
        {!isCollapsed && (
          <p className="font-mono-num text-[9px] text-[#6B6E8A] uppercase tracking-[0.15em] px-3 pb-1">
            Navigation
          </p>
        )}

        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={isCollapsed ? item.label : undefined}
              style={{ animationDelay: `${i * 30}ms` }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-body font-semibold transition-all duration-200 animate-roll-left ${
                isActive
                  ? "nav-item-active"
                  : "text-[#A9AABF] hover:bg-[#1E2338] hover:text-[#F2F0E6]"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#E8A33D]" : ""}`} />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}

        {/* ── AI Tools Section ── */}
        {!isCollapsed && (
          <div className="pt-4 space-y-1 border-t border-[#33395a] mt-2">
            <p className="font-mono-num text-[9px] text-[#6B6E8A] uppercase tracking-[0.15em] px-3 pb-1">
              Smart Tools
            </p>

            <button
              onClick={onOpenSpinWheel}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-[#E8A33D] hover:bg-[#E8A33D]/10 hover:border-[#E8A33D]/30 border border-transparent transition-all"
            >
              <Dices className="w-4 h-4 shrink-0" />
              <span>Surprise Me Wheel</span>
            </button>

            <button
              onClick={onOpenComparison}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold text-[#3FA796] hover:bg-[#3FA796]/10 hover:border-[#3FA796]/30 border border-transparent transition-all"
            >
              <Scale className="w-4 h-4 shrink-0" />
              <span>Compare Movies</span>
            </button>
          </div>
        )}
      </div>

      {/* ── User Profile Badge ── */}
      {!isCollapsed && (
        <div
          onClick={() => setActiveTab("settings")}
          className="p-3 border-t border-[#33395a] cursor-pointer hover:bg-[#1E2338] transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            {/* UX initials avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] text-white font-heading font-bold text-xs flex items-center justify-center border border-[#7C3AED]/60 shadow-md shadow-purple-900/50 group-hover:shadow-purple-600/40 transition-shadow">
              UX
            </div>
            <div className="overflow-hidden">
              <span className="font-body text-xs font-bold text-[#F2F0E6] block truncate">UserX</span>
              <span className="font-mono-num text-[9px] text-[#3FA796] block">Pro Member</span>
            </div>
            <Settings className="w-3.5 h-3.5 text-[#6B6E8A] ml-auto group-hover:text-[#E8A33D] transition-colors" />
          </div>
        </div>
      )}
    </aside>
  );
};
