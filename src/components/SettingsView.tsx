"use client";

import React, { useState } from "react";
import { 
  Settings, 
  User, 
  Sliders, 
  Moon, 
  Bell, 
  PlaySquare, 
  ShieldCheck, 
  Info, 
  Check, 
  Trash2, 
  Download, 
  Sparkles,
  Globe,
  Film
} from "lucide-react";

export const SettingsView: React.FC = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("English (US)");
  const [region, setRegion] = useState("North America");
  const [adultFilter, setAdultFilter] = useState(true);
  const [trailerAutoplay, setTrailerAutoplay] = useState(true);
  const [quality, setQuality] = useState("4K Ultra HD");
  const [subtitles, setSubtitles] = useState("English [CC]");

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState("");

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleClearHistory = (type: string) => {
    setNoticeMessage(`${type} successfully cleared.`);
    setTimeout(() => setNoticeMessage(""), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 space-y-8 pb-24 font-inter">
      {/* Page Header */}
      <div className="pb-4 border-b border-zinc-800">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-syne">
          <Settings className="w-6 h-6 text-purple-400" /> Platform Settings
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Customize your Lumina AI experience, recommendations, account settings, and privacy.
        </p>
      </div>

      {noticeMessage && (
        <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4" /> {noticeMessage}
        </div>
      )}

      {/* 1. GENERAL SETTINGS */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-4">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <Globe className="w-4 h-4 text-purple-400" /> General Settings
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs text-zinc-400 font-medium">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500"
            >
              <option value="dark">Dark Cinema (Default)</option>
              <option value="midnight">Midnight OLED</option>
              <option value="system">System Preference</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-zinc-400 font-medium">Interface Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500"
            >
              <option value="English (US)">English (US)</option>
              <option value="Japanese">Japanese (日本語)</option>
              <option value="Spanish">Spanish (Español)</option>
              <option value="Korean">Korean (한국어)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-zinc-400 font-medium">Content Region</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500"
            >
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia Pacific">Asia Pacific</option>
              <option value="Global">Global Catalog</option>
            </select>
          </div>
        </div>
      </section>

      {/* 2. RECOMMENDATION PREFERENCES */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-4">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <Sliders className="w-4 h-4 text-blue-400" /> Recommendation Preferences
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-white">Adult Content Filter</h4>
              <p className="text-[11px] text-zinc-400">Filter out mature R-rated titles from general recommendations</p>
            </div>
            <button
              onClick={() => setAdultFilter(!adultFilter)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${adultFilter ? "bg-purple-600" : "bg-zinc-800"}`}
            >
              <span className={`w-5 h-5 rounded-full bg-white block transition-transform ${adultFilter ? "translate-x-6" : "translate-x-0"}`}></span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Preferred Runtime</label>
              <select className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none">
                <option>Any Runtime</option>
                <option>Under 90 mins (Short & Fast)</option>
                <option>90 - 120 mins (Standard)</option>
                <option>Feature Epics (150+ mins)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-zinc-400 font-medium">Recommendation History</label>
              <button
                onClick={() => handleClearHistory("Recommendation History")}
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-xs text-purple-400 border border-zinc-800 rounded-xl px-3 py-2.5 text-left font-semibold"
              >
                Reset Recommendation Fingerprint
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLAYBACK OPTIONS */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-4">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <PlaySquare className="w-4 h-4 text-emerald-400" /> Playback & Streaming
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center justify-between sm:col-span-3 pb-2 border-b border-zinc-800/80">
            <div>
              <h4 className="text-xs font-bold text-white">Autoplay Movie Trailers</h4>
              <p className="text-[11px] text-zinc-400">Automatically play trailer previews when viewing details</p>
            </div>
            <button
              onClick={() => setTrailerAutoplay(!trailerAutoplay)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${trailerAutoplay ? "bg-purple-600" : "bg-zinc-800"}`}
            >
              <span className={`w-5 h-5 rounded-full bg-white block transition-transform ${trailerAutoplay ? "translate-x-6" : "translate-x-0"}`}></span>
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-zinc-400 font-medium">Video Quality</label>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none"
            >
              <option value="4K Ultra HD">4K Ultra HD (HDR)</option>
              <option value="1080p Full HD">1080p Full HD</option>
              <option value="720p HD">720p HD</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-zinc-400 font-medium">Subtitles & Captions</label>
            <select
              value={subtitles}
              onChange={(e) => setSubtitles(e.target.value)}
              className="w-full bg-zinc-900 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none"
            >
              <option value="English [CC]">English [CC]</option>
              <option value="Off">Off</option>
              <option value="Spanish">Spanish</option>
              <option value="Japanese">Japanese</option>
            </select>
          </div>
        </div>
      </section>

      {/* 4. PRIVACY & DATA */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-4">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" /> Privacy & Data Controls
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleClearHistory("Watch History")}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 font-semibold flex items-center gap-2"
          >
            <Trash2 className="w-3.5 h-3.5 text-red-400" /> Clear Watch History
          </button>

          <button
            onClick={() => handleClearHistory("Search History")}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 font-semibold flex items-center gap-2"
          >
            <Trash2 className="w-3.5 h-3.5 text-amber-400" /> Clear Search History
          </button>

          <button
            onClick={() => handleClearHistory("UserData export (JSON)")}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-purple-400 font-semibold flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" /> Export User Data
          </button>
        </div>
      </section>

      {/* 5. ACCOUNT */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-4">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <User className="w-4 h-4 text-purple-400" /> Account Management
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs text-zinc-400 font-medium">Username</label>
            <input
              type="text"
              value="UserX"
              disabled
              className="w-full bg-zinc-900/80 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none opacity-80"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-zinc-400 font-medium">Email Address</label>
            <input
              type="email"
              value="userx@lumina.ai"
              disabled
              className="w-full bg-zinc-900/80 text-xs text-white border border-zinc-800 rounded-xl px-3 py-2.5 outline-none opacity-80"
            />
          </div>
        </div>
      </section>

      {/* 6. ABOUT */}
      <section className="p-6 rounded-3xl glass-card border border-zinc-800 space-y-2">
        <h3 className="font-bold text-sm text-white font-syne flex items-center gap-2">
          <Info className="w-4 h-4 text-zinc-400" /> About Lumina AI
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Lumina AI Movie Recommendation Platform v2.5.0 Pro • Engine: Gemini 2.5 Neural AI. Built for movie lovers.
        </p>
      </section>

      {/* Save Button */}
      <div className="flex items-center justify-between pt-4">
        {savedSuccess ? (
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 animate-in fade-in">
            <Check className="w-4 h-4" /> Settings updated successfully!
          </span>
        ) : (
          <span></span>
        )}

        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xs hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-950 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" /> Save Preferences
        </button>
      </div>
    </div>
  );
};
