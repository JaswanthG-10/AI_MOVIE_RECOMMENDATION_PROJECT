"use client";

import React, { useState, useEffect } from "react";
import {
  Home, Compass, Sparkles, Flame, Film, PlayCircle,
  History, Bookmark, Calendar, Settings,
  ChevronLeft, ChevronRight, Dices, Scale, Clapperboard,
  ShieldCheck, User, Sparkle
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSpinWheel: () => void;
  onOpenComparison: () => void;
}

const mainNavItems = [
  { id: "home",      label: "Home",              icon: Home },
  { id: "discover",  label: "Discover",           icon: Compass },
  { id: "search",    label: "Lumina AI Search",   icon: Sparkles },
  { id: "trending",  label: "Trending",           icon: Flame },
  { id: "genres",    label: "Genres",             icon: Film },
];

const libraryNavItems = [
  { id: "continue",  label: "Continue Watching",  icon: PlayCircle },
  { id: "history",   label: "Watch History",      icon: History },
  { id: "watchlist", label: "Watchlist",          icon: Bookmark },
  { id: "motd",      label: "Movie of the Day",   icon: Calendar },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSpinWheel,
  onOpenComparison,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<{ label: string; y: number } | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("sidebar_collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("sidebar_collapsed", String(next));
      return next;
    });
  };

  if (!isMounted) {
    return (
      <aside className="w-64 h-screen sticky top-0 bg-[#060813] border-r border-[#1C2242]" />
    );
  }

  return (
    <aside
      className={`hidden md:flex relative z-30 h-screen sticky top-0 flex-col justify-between transition-all duration-300 ease-in-out select-none bg-[#060813]/95 backdrop-blur-2xl border-r ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{
        borderColor: "rgba(37, 99, 235, 0.22)",
        boxShadow: "10px 0 30px rgba(0, 0, 0, 0.5), inset -1px 0 0 rgba(236, 72, 153, 0.1)"
      }}
    >
      {/* ── BRAND LOGO HEADER ── */}
      <div
        className="p-4 flex items-center justify-between transition-all duration-300 relative"
        style={{ borderBottom: "1px solid rgba(37, 99, 235, 0.18)" }}
      >
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 group text-left outline-none overflow-hidden cursor-pointer"
        >
          {/* Glowing Brand Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
            }}
          >
            <Clapperboard className="w-5 h-5 text-[#F1F3FA]" />
          </div>

          {/* Title */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              isCollapsed ? "w-0 opacity-0" : "w-36 opacity-100"
            }`}
          >
            <h1 className="font-heading text-lg font-extrabold tracking-wider text-[#F1F3FA] leading-none flex items-center gap-1">
              Lumina <span className="text-[#EC4899]">AI</span>
            </h1>
            <span className="font-mono-num text-[9px] text-[#60A5FA] tracking-widest block mt-1 font-semibold uppercase">
              Cinema Hub v3.0
            </span>
          </div>
        </button>

        {/* Toggle Collapse Button */}
        <button
          onClick={handleToggleCollapse}
          className="p-1.5 rounded-lg bg-[#111530] border border-[#2563EB]/25 text-[#B0B6D0] hover:text-[#EC4899] hover:border-[#EC4899]/50 transition-all cursor-pointer shrink-0"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* ── NAVIGATION SECTIONS ── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-6 scrollbar-none">
        
        {/* === MAIN NAVIGATION === */}
        <div className="space-y-1">
          {!isCollapsed && (
            <p className="font-mono-num text-[9px] text-[#60A5FA]/80 uppercase tracking-[0.22em] px-3 pb-2 font-bold flex items-center gap-1">
              <Sparkle className="w-2.5 h-2.5 text-[#EC4899]" /> Main Navigation
            </p>
          )}

          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={(e) => {
                  if (isCollapsed) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredItem({ label: item.label, y: rect.top });
                  }
                }}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-body font-semibold transition-all duration-200 outline-none relative group cursor-pointer ${
                  isActive
                    ? "text-[#F1F3FA] font-bold shadow-lg"
                    : "text-[#B0B6D0] hover:bg-[#111530]/80 hover:text-[#F1F3FA]"
                } ${isCollapsed ? "justify-center" : ""}`}
                style={
                  isActive
                    ? {
                        background: "linear-gradient(90deg, rgba(37, 99, 235, 0.25) 0%, rgba(236, 72, 153, 0.12) 100%)",
                        border: "1px solid rgba(236, 72, 153, 0.35)",
                        boxShadow: "0 4px 20px rgba(37, 99, 235, 0.15)",
                      }
                    : { border: "1px solid transparent" }
                }
              >
                {/* Active Indicator Strip */}
                {isActive && (
                  <div
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                    style={{ background: "linear-gradient(180deg, #2563EB 0%, #EC4899 100%)" }}
                  />
                )}

                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-[#EC4899] filter drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" : "text-[#6A7194]"
                  }`}
                />

                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
                    isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-40 opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* === YOUR LIBRARY === */}
        <div className="space-y-1 pt-2">
          {!isCollapsed && (
            <p className="font-mono-num text-[9px] text-[#60A5FA]/80 uppercase tracking-[0.22em] px-3 pb-2 font-bold">
              Your Library
            </p>
          )}

          {libraryNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={(e) => {
                  if (isCollapsed) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredItem({ label: item.label, y: rect.top });
                  }
                }}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-body font-semibold transition-all duration-200 outline-none relative group cursor-pointer ${
                  isActive
                    ? "text-[#F1F3FA] font-bold shadow-lg"
                    : "text-[#B0B6D0] hover:bg-[#111530]/80 hover:text-[#F1F3FA]"
                } ${isCollapsed ? "justify-center" : ""}`}
                style={
                  isActive
                    ? {
                        background: "linear-gradient(90deg, rgba(37, 99, 235, 0.25) 0%, rgba(236, 72, 153, 0.12) 100%)",
                        border: "1px solid rgba(236, 72, 153, 0.35)",
                        boxShadow: "0 4px 20px rgba(37, 99, 235, 0.15)",
                      }
                    : { border: "1px solid transparent" }
                }
              >
                {isActive && (
                  <div
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                    style={{ background: "linear-gradient(180deg, #2563EB 0%, #EC4899 100%)" }}
                  />
                )}

                <Icon
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                    isActive ? "text-[#EC4899] filter drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" : "text-[#6A7194]"
                  }`}
                />

                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
                    isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-40 opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* === SMART TOOLS === */}
        <div className="space-y-1.5 pt-3" style={{ borderTop: "1px solid rgba(37, 99, 235, 0.15)" }}>
          {!isCollapsed && (
            <p className="font-mono-num text-[9px] text-[#EC4899] uppercase tracking-[0.22em] px-3 pb-1 font-bold">
              AI Tools
            </p>
          )}

          <button
            onClick={onOpenSpinWheel}
            onMouseEnter={(e) => {
              if (isCollapsed) {
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredItem({ label: "Surprise Me Wheel", y: rect.top });
              }
            }}
            onMouseLeave={() => setHoveredItem(null)}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-body font-bold transition-all duration-200 outline-none border border-[#EC4899]/30 bg-[#EC4899]/10 text-[#F472B6] hover:bg-[#EC4899]/20 hover:border-[#EC4899]/60 cursor-pointer shadow-md ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Dices className="w-4 h-4 shrink-0 text-[#EC4899] animate-bounce" />
            <span
              className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
                isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-40 opacity-100"
              }`}
            >
              Surprise Me Wheel
            </span>
          </button>

          <button
            onClick={onOpenComparison}
            onMouseEnter={(e) => {
              if (isCollapsed) {
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredItem({ label: "Compare Movies", y: rect.top });
              }
            }}
            onMouseLeave={() => setHoveredItem(null)}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-body font-bold transition-all duration-200 outline-none border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#60A5FA] hover:bg-[#2563EB]/20 hover:border-[#2563EB]/60 cursor-pointer shadow-md ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <Scale className="w-4 h-4 shrink-0 text-[#60A5FA]" />
            <span
              className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
                isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-40 opacity-100"
              }`}
            >
              Compare Movies
            </span>
          </button>
        </div>
      </div>

      {/* ── USER PROFILE FOOTER ── */}
      <div className="p-3">
        <button
          onClick={() => setActiveTab("settings")}
          className={`w-full flex items-center gap-3 p-2.5 rounded-xl bg-[#111530]/60 border border-[#2563EB]/20 hover:border-[#EC4899]/50 transition-all cursor-pointer group ${
            activeTab === "settings" ? "border-[#EC4899] bg-[#EC4899]/10" : ""
          } ${isCollapsed ? "justify-center" : ""}`}
        >
          {/* Glowing Avatar Initials */}
          <div
            className="w-8 h-8 rounded-full font-body font-bold text-xs flex items-center justify-center shrink-0 border"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
              borderColor: "rgba(236, 72, 153, 0.4)",
              color: "#F1F3FA",
              boxShadow: "0 0 12px rgba(236, 72, 153, 0.4)",
            }}
          >
            LA
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
              isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-32 opacity-100"
            }`}
          >
            <span className="font-body text-xs font-bold text-[#F1F3FA] block truncate group-hover:text-[#EC4899] transition-colors">
              Lumina User
            </span>
            <span className="font-mono-num text-[9px] text-[#60A5FA] flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-2.5 h-2.5 text-[#EC4899]" /> PRO MEMBER
            </span>
          </div>

          {!isCollapsed && (
            <Settings className="w-4 h-4 text-[#6A7194] ml-auto group-hover:text-[#EC4899] transition-colors" />
          )}
        </button>
      </div>

      {/* ── PORTAL FLOATING TOOLTIP FOR COLLAPSED STATE ── */}
      {isCollapsed && hoveredItem && (
        <div
          className="fixed px-3 py-2 rounded-xl text-[10px] font-mono-num font-bold shadow-2xl border pointer-events-none z-50 animate-fade-up"
          style={{
            top: hoveredItem.y + 4,
            left: "92px",
            background: "#0B0E20",
            borderColor: "rgba(236, 72, 153, 0.4)",
            color: "#F1F3FA",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.9), 0 0 20px rgba(236, 72, 153, 0.2)",
          }}
        >
          {hoveredItem.label.toUpperCase()}
        </div>
      )}
    </aside>
  );
};
