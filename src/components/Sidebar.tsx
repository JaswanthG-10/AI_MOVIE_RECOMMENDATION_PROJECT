"use client";

import React, { useState, useEffect } from "react";
import {
  Home, Compass, Sparkles, Flame, Film, PlayCircle,
  History, Bookmark, Calendar, Settings,
  ChevronLeft, ChevronRight, Dices, Scale, Clapperboard,
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
  { id: "search",    label: "Lumina AI Search",   icon: Sparkles },
  { id: "trending",  label: "Trending",           icon: Flame },
  { id: "genres",    label: "Genres",             icon: Film },
  { id: "continue",  label: "Continue Watching",  icon: PlayCircle },
  { id: "history",   label: "Watch History",      icon: History },
  { id: "watchlist", label: "Watchlist",          icon: Bookmark },
  { id: "motd",      label: "Movie of the Day",   icon: Calendar },
  { id: "settings",  label: "Settings",           icon: Settings },
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
      <aside className="w-64 h-screen sticky top-0 bg-[#0B0E20] border-r border-[#181E40]" />
    );
  }

  return (
    <aside
      className={`relative z-30 h-screen sticky top-0 glass-panel border-r flex flex-col justify-between transition-all duration-300 ease-in-out select-none ${
        isCollapsed ? "w-20" : "w-64"
      }`}
      style={{ borderColor: "rgba(37, 99, 235, 0.22)" }}
    >
      {/* ── BRAND LOGO ── */}
      <div
        className="p-4 flex items-center justify-between transition-all duration-300"
        style={{ borderBottom: "1px solid rgba(37, 99, 235, 0.2)" }}
      >
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 group text-left outline-none overflow-hidden"
        >
          {/* Logo mark - Pink/Blue gradient */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
              boxShadow: "0 4px 16px rgba(236, 72, 153, 0.3)",
            }}
          >
            <Clapperboard className="w-4.5 h-4.5 text-[#F1F3FA]" />
          </div>

          {/* Logo text */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              isCollapsed ? "w-0 opacity-0" : "w-36 opacity-100"
            }`}
          >
            <h1 className="font-heading text-lg tracking-wider text-[#F1F3FA] leading-none">
              Lumina <span style={{ color: "#EC4899" }}>AI</span>
            </h1>
            <span className="font-mono-num text-[9px] text-[#6A7194] tracking-widest block mt-0.5">
              PREMIERE v3.0
            </span>
          </div>
        </button>

        {/* Toggle button */}
        <button
          onClick={handleToggleCollapse}
          className="p-1.5 rounded-lg bg-[#111530] border border-[#181E40] text-[#B0B6D0] hover:text-[#EC4899] hover:border-[#EC4899]/50 transition-all cursor-pointer shrink-0"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* ── NAVIGATION LIST ── */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-1.5 scrollbar-none overflow-x-visible">
        {!isCollapsed && (
          <p className="font-mono-num text-[9px] text-[#6A7194] uppercase tracking-[0.2em] px-3 pb-2.5">
            Discover Vault
          </p>
        )}

        <div className="space-y-1">
          {navItems.map((item, i) => {
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
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-xs font-body font-semibold transition-all duration-200 outline-none relative group cursor-pointer ${
                  isActive ? "nav-item-active" : "text-[#B0B6D0] hover:bg-[#111530] hover:text-[#F1F3FA]"
                } ${isCollapsed ? "justify-center" : ""}`}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-105 ${isActive ? "text-[#EC4899]" : "text-[#6A7194]"}`} />

                <span
                  className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap text-left ${
                    isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-40 opacity-100"
                  }`}
                  style={{ transitionDelay: isCollapsed ? "0ms" : "50ms" }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── SMART FEATURES ── */}
        <div className="pt-5 mt-2 space-y-1" style={{ borderTop: "1px solid rgba(37, 99, 235, 0.15)" }}>
          {!isCollapsed && (
            <p className="font-mono-num text-[9px] text-[#6A7194] uppercase tracking-[0.2em] px-3 pb-2">
              Smart Actions
            </p>
          )}

          <button
            onClick={onOpenSpinWheel}
            onMouseEnter={(e) => {
              if (isCollapsed) {
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredItem({ label: "Surprise Me Wheel", y: rect.top });
              }
              e.currentTarget.style.background = "rgba(236, 72, 153, 0.08)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.25)";
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-xs font-body font-semibold transition-all duration-200 outline-none border border-transparent cursor-pointer"
            style={{ color: "#EC4899" }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <Dices className="w-4 h-4 shrink-0 text-[#EC4899]" />
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
              e.currentTarget.style.background = "rgba(37, 99, 235, 0.08)";
              e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.25)";
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-xs font-body font-semibold transition-all duration-200 outline-none border border-transparent cursor-pointer"
            style={{ color: "#60A5FA" }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "transparent";
            }}
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

      {/* ── USER PROFILE SECTION ── */}
      <div
        className="p-3.5 cursor-pointer group transition-colors"
        style={{ borderTop: "1px solid rgba(37, 99, 235, 0.15)" }}
        onClick={() => setActiveTab("settings")}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "rgba(37, 99, 235, 0.05)";
          if (isCollapsed) {
            const rect = e.currentTarget.getBoundingClientRect();
            setHoveredItem({ label: "Lumina User (Settings)", y: rect.top });
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "";
          setHoveredItem(null);
        }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar initial badge - Pink to Blue */}
          <div
            className="w-8 h-8 rounded-full font-body font-bold text-xs flex items-center justify-center border transition-all shrink-0"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
              borderColor: "rgba(236, 72, 153, 0.4)",
              color: "#F1F3FA",
              boxShadow: "0 0 12px rgba(236, 72, 153, 0.3)",
            }}
          >
            LA
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              isCollapsed ? "w-0 opacity-0" : "w-32 opacity-100"
            }`}
          >
            <span className="font-body text-xs font-bold text-[#F1F3FA] block truncate">
              Lumina User
            </span>
            <span className="font-mono-num text-[9px] text-[#EC4899] block tracking-wide">
              PRO MEMBER ✦
            </span>
          </div>

          {!isCollapsed && (
            <Settings className="w-3.5 h-3.5 text-[#6A7194] ml-auto group-hover:text-[#EC4899] transition-colors" />
          )}
        </div>
      </div>

      {/* ── PORTAL FLOATING TOOLTIP FOR COLLAPSED HOVER ── */}
      {isCollapsed && hoveredItem && (
        <div
          className="fixed px-3 py-2 rounded-lg text-[10px] font-mono-num font-semibold shadow-2xl border pointer-events-none z-50 animate-fade-up"
          style={{
            top: hoveredItem.y + 6,
            left: "88px",
            background: "#0B0E20",
            borderColor: "rgba(236, 72, 153, 0.35)",
            color: "#F1F3FA",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(236, 72, 153, 0.08)",
          }}
        >
          {hoveredItem.label.toUpperCase()}
        </div>
      )}
    </aside>
  );
};
