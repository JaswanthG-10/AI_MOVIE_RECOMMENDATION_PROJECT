"use client";

import React from "react";
import { Bell, Sparkles, Film, Award, CheckCircle2, X } from "lucide-react";

interface NotificationItem {
  id: string;
  title: string;
  desc: string;
  time: string;
  icon: any;
  unread: boolean;
}

interface NotificationsModalProps {
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  onClose,
  onNavigateTab
}) => {
  const [notifications, setNotifications] = React.useState<NotificationItem[]>([
    {
      id: "n1",
      title: "3 New AI Picks Ready",
      desc: "Lumina AI generated new recommendations based on your recent Inception rewatch.",
      time: "10 mins ago",
      icon: Sparkles,
      unread: true
    },
    {
      id: "n2",
      title: "Dune: Part Two Available",
      desc: "Now streaming on Max in 4K HDR. Matches 99% of your taste profile.",
      time: "2 hours ago",
      icon: Film,
      unread: true
    },
    {
      id: "n3",
      title: "Weekly Taste Report Updated",
      desc: "Your Sci-Fi preference rose to 38% after watching Blade Runner 2049.",
      time: "Yesterday",
      icon: Award,
      unread: false
    }
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-sm glass-panel rounded-3xl border border-purple-500/30 shadow-2xl p-4 sm:p-6 space-y-4 mt-16 animate-in slide-in-from-top-4"
        role="dialog"
        aria-label="Notifications Panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-purple-400" />
            <h3 className="font-bold text-sm text-white font-syne">Notifications</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={markAllAsRead}
              className="text-[10px] text-purple-400 hover:text-purple-300 font-semibold"
            >
              Mark all as read
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Close notifications"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                onClick={() => {
                  onNavigateTab("home");
                  onClose();
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex gap-3 ${
                  n.unread
                    ? "bg-purple-950/30 border-purple-500/40 hover:border-purple-400"
                    : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-white">{n.title}</h4>
                    <span className="text-[10px] text-zinc-500">{n.time}</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-snug">{n.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
