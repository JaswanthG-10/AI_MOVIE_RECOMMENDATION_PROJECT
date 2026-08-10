"use client";

import React from "react";
import { 
  Home, 
  MessageSquare, 
  Compass, 
  Bookmark, 
  PieChart 
} from "lucide-react";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  watchlistCount: number;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  setActiveTab,
  watchlistCount
}) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "ai-assistant", label: "AI Assistant", icon: MessageSquare, badge: "AI" },
    { id: "discover", label: "Discover", icon: Compass },
    { id: "watchlist", label: "Watchlist", icon: Bookmark, count: watchlistCount },
    { id: "taste-profile", label: "Profile", icon: PieChart }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-xl border-t border-zinc-800/80 px-2 py-2 md:hidden flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all relative ${
              isActive
                ? "text-purple-400 font-semibold"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {item.badge && (
                <span className="w-2 h-2 rounded-full bg-purple-500 absolute -top-0.5 -right-0.5 animate-ping"></span>
              )}
              {item.count !== undefined && item.count > 0 && (
                <span className="text-[9px] font-bold px-1 rounded-full bg-purple-600 text-white absolute -top-1.5 -right-2">
                  {item.count}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-tight">{item.label}</span>
            {isActive && (
              <span className="w-4 h-0.5 rounded-full bg-purple-500 absolute bottom-0"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
