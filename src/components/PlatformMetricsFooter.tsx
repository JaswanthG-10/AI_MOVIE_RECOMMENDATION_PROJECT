"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export const PlatformMetricsFooter: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-purple-500/20 bg-[#070913]/90 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* ══ FOOTER NAVIGATION & BRANDING ══ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
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
