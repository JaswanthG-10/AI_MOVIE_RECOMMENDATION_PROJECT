"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { Bell, X, Sparkles, Star, Film, CheckCircle2 } from "lucide-react";

interface NotificationsModalProps {
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  onClose,
  onSelectMovie,
}) => {
  const notifications = [
    {
      id: "1",
      title: "✦ High AI Match Alert",
      message: "Lumina AI found a 98% match for your taste: Leo (2023)",
      time: "10 mins ago",
      movie: MOVIES_DATABASE.find((m) => m.id === "tamil-leo") || MOVIES_DATABASE[0],
      unread: true,
    },
    {
      id: "2",
      title: "⭐ Top Rated Masterpiece",
      message: "Amaran (IMDb 8.7) was added to Kollywood Spotlight",
      time: "2 hours ago",
      movie: MOVIES_DATABASE.find((m) => m.id === "tamil-amaran") || MOVIES_DATABASE[1],
      unread: true,
    },
    {
      id: "3",
      title: "🎬 Watchlist Reminder",
      message: "Interstellar is waiting in your watchlist queue",
      time: "1 day ago",
      movie: MOVIES_DATABASE.find((m) => m.id === "english-interstellar") || MOVIES_DATABASE[2],
      unread: false,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#070913]/80 backdrop-blur-md flex items-start justify-end p-4 sm:p-8 animate-fade-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#0B0E20] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden mt-14"
        style={{
          boxShadow: "0 0 50px rgba(139, 92, 246, 0.2), 0 20px 50px rgba(0,0,0,0.8)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#070913]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-sm text-white">Lumina Notifications</h3>
              <p className="text-[10px] text-purple-300 font-mono-num">Real-time neural updates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="p-3 space-y-2 max-h-[70vh] overflow-y-auto">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => {
                onSelectMovie(notif.movie);
                onClose();
              }}
              className="p-3.5 rounded-2xl bg-[#111530]/80 border border-purple-500/15 hover:border-purple-500/40 transition-all cursor-pointer flex gap-3 items-start group"
            >
              <img
                src={notif.movie.posterUrl}
                alt={notif.movie.title}
                className="w-12 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-purple-300 truncate">
                    {notif.title}
                  </span>
                  <span className="text-[9px] font-mono-num text-zinc-500">
                    {notif.time}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-snug line-clamp-2">
                  {notif.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
