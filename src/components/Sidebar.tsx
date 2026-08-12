"use client";

import React, { useState } from "react";
import {
  Home, Compass, Sparkles, Flame, Film, PlayCircle,
  History, Bookmark, Calendar, Settings,
  ChevronLeft, ChevronRight, Dices, Scale, Crown,
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpinWheel: () => void;
  onOpenComparison: () => void;
}

const navItems = [
  { id: "home",      label: "Home",              icon: Home },
  { id: "discover",  label: "Discover",           icon: Compass },
  { id: "search",    label: "AI Recommendations", icon: Sparkles },
  { id: "trending",  label: "Trending",           icon: Flame },
  { id: "genres",    label: "Genres",             icon: Film },
  { id: "continue",  label: "Continue Watching",  icon: PlayCircle },
  { id: "history",   label: "Watch History",      icon: History },
  { id: "watchlist", label: "Watchlist",          icon: Bookmark },
  { id: "motd",      label: "Movie of the Day",   icon: Calendar },
  { id: "settings",  label: "Settings",           icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab, setActiveTab, onOpenSpinWheel, onOpenComparison,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`relative z-30 h-screen sticky top-0 glass-panel border-r flex flex-col justify-between transition-all duration-300 select-none ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      style={{ borderColor: "rgba(147,51,234,0.25)" }}
    >
      {/* ── Brand ── */}
      <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(147,51,234,0.2)" }}>
        {!isCollapsed && (
          <button onClick={() => setActiveTab("home")} className="flex items-center gap-2.5 group">
            {/* Royal crown logo */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-[#07050F] text-sm shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F0D060 60%, #D4AF37 100%)",
                boxShadow: "0 4px 20px rgba(212,175,55,0.5), 0 0 0 1px rgba(240,208,96,0.3) inset",
              }}
            >
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading text-base tracking-widest leading-none" style={{ color: "#F0ECFF" }}>
                LUMINA <span style={{ color: "#C084FC" }}>AI</span>
              </div>
              <div className="font-mono-num text-[9px] mt-0.5 tracking-wider" style={{ color: "#7A6FA8" }}>
                v2.5 ROYAL
              </div>
            </div>
          </button>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-1.5 rounded-lg transition-all ${isCollapsed ? "mx-auto" : ""}`}
          style={{
            background: "rgba(19,15,42,0.9)",
            border: "1px solid rgba(147,51,234,0.3)",
            color: "#B8AEDD",
          }}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* ── Navigation ── */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
        {!isCollapsed && (
          <p className="font-mono-num text-[9px] uppercase tracking-[0.15em] px-3 pb-2" style={{ color: "#7A6FA8" }}>
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
                isActive ? "nav-item-active" : ""
              } ${isCollapsed ? "justify-center" : ""}`}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(147,51,234,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#F0ECFF";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.background = "";
                  (e.currentTarget as HTMLButtonElement).style.color = "";
                }
              }}
            >
              <Icon className="w-4 h-4 shrink-0" style={{ color: isActive ? "#D4AF37" : "#7A6FA8" }} />
              {!isCollapsed && (
                <span style={{ color: isActive ? "#D4AF37" : "#B8AEDD" }}>{item.label}</span>
              )}
            </button>
          );
        })}

        {/* ── Smart Tools ── */}
        {!isCollapsed && (
          <div className="pt-4 space-y-1 mt-2" style={{ borderTop: "1px solid rgba(147,51,234,0.2)" }}>
            <p className="font-mono-num text-[9px] uppercase tracking-[0.15em] px-3 pb-1" style={{ color: "#7A6FA8" }}>
              Smart Tools
            </p>
            <button
              onClick={onOpenSpinWheel}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all"
              style={{ color: "#D4AF37", border: "1px solid transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.10)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,175,55,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              }}
            >
              <Dices className="w-4 h-4 shrink-0" />
              <span>Surprise Me Wheel</span>
            </button>
            <button
              onClick={onOpenComparison}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all"
              style={{ color: "#C084FC", border: "1px solid transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(147,51,234,0.10)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(147,51,234,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              }}
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
          className="p-3 cursor-pointer group transition-colors"
          style={{ borderTop: "1px solid rgba(147,51,234,0.2)" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLDivElement).style.background = "rgba(147,51,234,0.08)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLDivElement).style.background = ""}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full font-heading font-bold text-xs flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #6D28D9 0%, #9333EA 60%, #C084FC 100%)",
                border: "1px solid rgba(147,51,234,0.6)",
                color: "#F0ECFF",
                boxShadow: "0 0 16px rgba(147,51,234,0.5)",
              }}
            >
              UX
            </div>
            <div className="overflow-hidden">
              <span className="font-body text-xs font-bold block truncate" style={{ color: "#F0ECFF" }}>UserX</span>
              <span className="font-mono-num text-[9px] block" style={{ color: "#D4AF37" }}>Royal Member ✦</span>
            </div>
            <Settings className="w-3.5 h-3.5 ml-auto transition-colors" style={{ color: "#7A6FA8" }} />
          </div>
        </div>
      )}
    </aside>
  );
};
