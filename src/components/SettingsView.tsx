"use client";

import React, { useState } from "react";
import {
  Sliders,
  Bell,
  Shield,
  User,
  Tv,
  Globe,
  Check,
  Sparkles
} from "lucide-react";

export const SettingsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState("general");
  const [theme, setTheme] = useState("Dark Cosmic");
  const [language, setLanguage] = useState("English");
  const [adultFilter, setAdultFilter] = useState(true);
  const [preferredRuntime, setPreferredRuntime] = useState("Standard (90-150m)");
  const [trailerAutoplay, setTrailerAutoplay] = useState(true);

  const [username, setUsername] = useState("Lumina Critic");
  const [email, setEmail] = useState("critic@lumina.ai");

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-6 font-body">
      <div className="flex items-center justify-between border-b border-[#2563EB]/25 pb-4">
        <div>
          <h2 className="font-heading text-3xl text-[#F1F3FA]">Platform Settings</h2>
          <p className="text-xs text-[#B0B6D0] mt-1">
            Manage your Lumina AI preferences, playback quality, privacy controls, and account details.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-lg text-[#F1F3FA] font-heading font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
            boxShadow: "0 4px 16px rgba(236, 72, 153, 0.25)"
          }}
        >
          {savedSuccess ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4 fill-current" />}
          {savedSuccess ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Navigation Tabs */}
        <div className="space-y-1 bg-[#111530]/80 p-2 rounded-xl border border-[#2563EB]/20 h-fit">
          {[
            { id: "general", label: "General", icon: Globe },
            { id: "recommendations", label: "Recommendations", icon: Sliders },
            { id: "notifications", label: "Notifications", icon: Bell },
            { id: "playback", label: "Playback", icon: Tv },
            { id: "privacy", label: "Privacy & Data", icon: Shield },
            { id: "account", label: "Account Profile", icon: User }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#EC4899] text-[#F1F3FA] font-bold shadow-md shadow-[#EC4899]/20"
                    : "text-[#B0B6D0] hover:bg-[#181E40] hover:text-[#F1F3FA]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Details Panel */}
        <div className="md:col-span-3 p-6 rounded-xl bg-[#111530]/50 border border-[#2563EB]/20 space-y-6">
          {activeSection === "general" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F1F3FA]">General Preferences</h3>
              
              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#B0B6D0]">Interface Theme</label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-[#181E40] text-xs text-[#F1F3FA] p-3 rounded-lg border border-[#2563EB]/20 outline-none"
                >
                  <option value="Dark Cosmic">Dark Cosmic Neon (Blue & Pink Accent)</option>
                  <option value="Midnight OLED">Midnight OLED (Pitch Black)</option>
                  <option value="System">System Match</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#B0B6D0]">Primary Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-[#181E40] text-xs text-[#F1F3FA] p-3 rounded-lg border border-[#2563EB]/20 outline-none"
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
              <h3 className="font-heading text-lg text-[#F1F3FA]">Recommendation Engine Tuning</h3>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[#181E40] border border-[#2563EB]/15">
                <div>
                  <span className="text-xs font-bold text-[#F1F3FA] block">Adult Content Filter</span>
                  <span className="text-[11px] text-[#B0B6D0]">Filter out mature horror and R-rated content from recommendations</span>
                </div>
                <input
                  type="checkbox"
                  checked={adultFilter}
                  onChange={(e) => setAdultFilter(e.target.checked)}
                  className="w-4 h-4 accent-[#EC4899]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#B0B6D0]">Preferred Runtime</label>
                <select
                  value={preferredRuntime}
                  onChange={(e) => setPreferredRuntime(e.target.value)}
                  className="w-full bg-[#181E40] text-xs text-[#F1F3FA] p-3 rounded-lg border border-[#2563EB]/20 outline-none"
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
              <h3 className="font-heading text-lg text-[#F1F3FA]">Video & Trailer Playback</h3>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[#181E40] border border-[#2563EB]/15">
                <div>
                  <span className="text-xs font-bold text-[#F1F3FA] block">Trailer Autoplay</span>
                  <span className="text-[11px] text-[#B0B6D0]">Automatically play high-definition trailer previews in modal views</span>
                </div>
                <input
                  type="checkbox"
                  checked={trailerAutoplay}
                  onChange={(e) => setTrailerAutoplay(e.target.checked)}
                  className="w-4 h-4 accent-[#EC4899]"
                />
              </div>
            </div>
          )}

          {activeSection === "account" && (
            <div className="space-y-4">
              <h3 className="font-heading text-lg text-[#F1F3FA]">Account Profile</h3>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#B0B6D0]">Display Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#181E40] text-xs text-[#F1F3FA] p-3 rounded-lg border border-[#2563EB]/20 outline-none font-bold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono-num text-[#B0B6D0]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#181E40] text-xs text-[#F1F3FA] p-3 rounded-lg border border-[#2563EB]/20 outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
