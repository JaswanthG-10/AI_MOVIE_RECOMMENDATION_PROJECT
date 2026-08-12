"use client";

import React, { useState } from "react";
import {
  Sliders,
  Bell,
  Shield,
  User,
  Tv,
  Globe,
  Trash2,
  Download,
  Info,
  Check,
  Moon,
  Sparkles
} from "lucide-react";

export const SettingsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState("general");
  const [theme, setTheme] = useState("Dark Cinema");
  const [language, setLanguage] = useState("English");
  const [region, setRegion] = useState("India / Global");
  const [adultFilter, setAdultFilter] = useState(true);
  const [preferredRuntime, setPreferredRuntime] = useState("Standard (90-150m)");
  const [trailerAutoplay, setTrailerAutoplay] = useState(true);
  const [videoQuality, setVideoQuality] = useState("4K Ultra HD");

  const [username, setUsername] = useState("UserX");
  const [email, setEmail] = useState("userx@lumina.ai");

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-6 font-sora">
      <div className="flex items-center justify-between border-b border-[#33395a] pb-4">
        <div>
          <h2 className="font-heading text-3xl text-[#F2F0E6]">Platform Settings</h2>
          <p className="text-xs text-[#A9AABF] mt-1">
            Manage your Lumina AI preferences, playback quality, privacy controls, and account details.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-lg bg-[#E8A33D] text-[#0F1220] font-heading font-bold text-xs hover:bg-[#E8A33D]/90 transition-all flex items-center gap-1.5 shadow-md shadow-[#E8A33D]/20"
        >
          {savedSuccess ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4 fill-current" />}
          {savedSuccess ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Navigation Tabs */}
        <div className="space-y-1 bg-[#171B2E] p-2 rounded-xl border border-[#33395a] h-fit">
          {[
            { id: "general", label: "General", icon: Globe },
            { id: "recommendations", label: "Recommendations", icon: Sliders },
            { id: "notifications", label: "Notifications", icon: Bell },
            { id: "playback", label: "Playback", icon: Tv },
            { id: "privacy", label: "Privacy & Data", icon: Shield },
            { id: "account", label: "Account (UserX)", icon: User },
            { id: "about", label: "About", icon: Info }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#E8A33D] text-[#0F1220] font-bold shadow-md shadow-[#E8A33D]/20"
                    : "text-[#A9AABF] hover:bg-[#1E2338] hover:text-[#F2F0E6]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Details Panel */}
        <div className="md:col-span-3 p-6 rounded-xl bg-[#171B2E] border border-[#33395a] space-y-6">
          {activeSection === "general" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F2F0E6]">General Preferences</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#A9AABF]">Interface Theme</label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-3 rounded-lg border border-[#33395a] outline-none"
                >
                  <option value="Dark Cinema">Dark Cinema (Default #0F1220)</option>
                  <option value="Midnight OLED">Midnight OLED (Pitch Black)</option>
                  <option value="System">System Match</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#A9AABF]">Primary Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-3 rounded-lg border border-[#33395a] outline-none"
                >
                  <option value="English">English</option>
                  <option value="Tamil">Tamil (தமிழ்)</option>
                  <option value="Telugu">Telugu (తెలుగు)</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Spanish">Spanish (Español)</option>
                </select>
              </div>
            </div>
          )}

          {activeSection === "recommendations" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F2F0E6]">Recommendation Engine Tuning</h3>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[#1E2338] border border-[#33395a]">
                <div>
                  <span className="text-xs font-bold text-[#F2F0E6] block">Adult Content Filter</span>
                  <span className="text-[11px] text-[#A9AABF]">Filter out mature horror and R-rated content from recommendations</span>
                </div>
                <input
                  type="checkbox"
                  checked={adultFilter}
                  onChange={(e) => setAdultFilter(e.target.checked)}
                  className="w-4 h-4 accent-[#E8A33D]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#A9AABF]">Preferred Runtime</label>
                <select
                  value={preferredRuntime}
                  onChange={(e) => setPreferredRuntime(e.target.value)}
                  className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-3 rounded-lg border border-[#33395a] outline-none"
                >
                  <option value="Short (<90m)">Short Quick Watch (&lt; 90 mins)</option>
                  <option value="Standard (90-150m)">Standard Feature (90 - 150 mins)</option>
                  <option value="Epic Feature (>150m)">Epic Feature Saga (&gt; 150 mins)</option>
                </select>
              </div>
            </div>
          )}

          {activeSection === "playback" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F2F0E6]">Video & Trailer Playback</h3>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[#1E2338] border border-[#33395a]">
                <div>
                  <span className="text-xs font-bold text-[#F2F0E6] block">Trailer Autoplay</span>
                  <span className="text-[11px] text-[#A9AABF]">Automatically play high-definition trailer previews in modal views</span>
                </div>
                <input
                  type="checkbox"
                  checked={trailerAutoplay}
                  onChange={(e) => setTrailerAutoplay(e.target.checked)}
                  className="w-4 h-4 accent-[#E8A33D]"
                />
              </div>
            </div>
          )}

          {activeSection === "account" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F2F0E6]">Account Profile</h3>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#A9AABF]">Display Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-3 rounded-lg border border-[#33395a] outline-none font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#A9AABF]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1E2338] text-xs text-[#F2F0E6] p-3 rounded-lg border border-[#33395a] outline-none"
                />
              </div>
            </div>
          )}

          {activeSection === "about" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F2F0E6]">About Lumina AI</h3>
              <div className="p-4 rounded-xl bg-[#1E2338] border border-[#33395a] space-y-2 text-xs text-[#A9AABF]">
                <p><strong className="text-[#F2F0E6]">Version:</strong> v2.5.0 Pro Production Build</p>
                <p><strong className="text-[#F2F0E6]">Recommendation Engine:</strong> Multi-dimensional Neural Scorer v2.5</p>
                <p><strong className="text-[#F2F0E6]">Status:</strong> All Systems Operational</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
