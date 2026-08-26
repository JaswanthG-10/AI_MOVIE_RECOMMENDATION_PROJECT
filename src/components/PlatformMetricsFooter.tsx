"use client";

import React from "react";
import { Sparkles, Film, Cpu, Star, ShieldCheck, Heart } from "lucide-react";

export const PlatformMetricsFooter: React.FC = () => {
  const metrics = [
    { label: "Films Indexed", value: "50,000+", icon: Film, description: "Worldwide cinema catalog" },
    { label: "AI Match Precision", value: "98.4%", icon: Sparkles, description: "Neural vector accuracy" },
    { label: "Neural Latency", value: "< 200ms", icon: Cpu, description: "Real-time recommendation" },
    { label: "User Rating", value: "4.9 / 5", icon: Star, description: "Over 120,000 film reviews" },
  ];

  return (
    <footer className="mt-20 border-t border-purple-500/20 bg-[#070913]/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
        
        {/* ══ PLATFORM METRICS GRID ══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-card border border-purple-500/20 relative overflow-hidden group hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    LIVE METRIC
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-syne mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-zinc-300 font-space">
                  {m.label}
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {m.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ══ FOOTER NAVIGATION & BRANDING ══ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
              ✦
            </div>
            <div>
              <span className="font-heading text-base font-extrabold text-white">Lumina AI</span>
              <p className="text-[10px] text-zinc-500 font-space">Curated Cinema, Engineered by Intelligence</p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <a href="#home" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-purple-400 transition-colors">API Access</a>
            <a href="#home" className="hover:text-purple-400 transition-colors">TMDB Attribution</a>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-space">
            <span>Powered by Lumina Neural Engine v3.0</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};
