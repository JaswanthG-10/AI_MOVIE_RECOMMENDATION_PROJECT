"use client";

import React from "react";
import { 
  Sparkles, 
  Film, 
  Award, 
  PieChart as PieChartIcon, 
  TrendingUp, 
  User, 
  Clock 
} from "lucide-react";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis 
} from "recharts";

export const TasteProfileView: React.FC = () => {
  const genreData = [
    { name: "Sci-Fi", value: 38, color: "#8b5cf6" },
    { name: "Thriller", value: 26, color: "#3b82f6" },
    { name: "Drama", value: 18, color: "#ec4899" },
    { name: "Comedy", value: 12, color: "#f59e0b" },
    { name: "Animation", value: 6, color: "#10b981" }
  ];

  const directorData = [
    { name: "C. Nolan", count: 14 },
    { name: "D. Villeneuve", count: 9 },
    { name: "D. Chazelle", count: 7 },
    { name: "Bong Joon Ho", count: 6 },
    { name: "H. Miyazaki", count: 5 }
  ];

  const preferredActors = [
    { name: "Leonardo DiCaprio", count: "12 Movies", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
    { name: "Ryan Gosling", count: "9 Movies", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
    { name: "Anne Hathaway", count: "8 Movies", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8">
      {/* Top Banner Header */}
      <div className="p-6 rounded-3xl glass-panel bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-blue-950/40 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-purple-950">
            <Sparkles className="w-8 h-8 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white font-poppins">AI Taste Profile</h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold font-space">
                97.4% Precision
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              Lumina AI continually trains on your ratings, prompt keywords, and watch history to construct your personalized neural movie fingerprint.
            </p>
          </div>
        </div>

        {/* Stats Pills */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-3 rounded-2xl glass-card text-center">
            <div className="text-xs text-zinc-400 font-medium">Films Rated</div>
            <div className="text-xl font-bold text-white font-space">142</div>
          </div>
          <div className="px-4 py-3 rounded-2xl glass-card text-center">
            <div className="text-xs text-zinc-400 font-medium">Avg Rating</div>
            <div className="text-xl font-bold text-amber-400 font-space">8.6 ⭐</div>
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Genre Affinity Pie Chart */}
        <div className="p-6 rounded-3xl glass-card border border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <PieChartIcon className="w-4 h-4 text-purple-400" /> Genre Affinity
            </h3>
            <span className="text-xs text-zinc-500 font-medium">Based on 142 titles</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genreData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genreData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#181820",
                    borderColor: "#3f3f46",
                    borderRadius: "12px",
                    color: "#fff"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {genreData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5 text-xs text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                <span>{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Directors Bar Chart */}
        <div className="p-6 rounded-3xl glass-card border border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base text-white flex items-center gap-2">
              <Film className="w-4 h-4 text-blue-400" /> Favorite Directors
            </h3>
            <span className="text-xs text-zinc-500 font-medium font-space">Top 5 matched</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={directorData} layout="vertical">
                <XAxis type="number" stroke="#71717a" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#e4e4e7" fontSize={12} width={100} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#181820",
                    borderColor: "#3f3f46",
                    borderRadius: "12px",
                    color: "#fff"
                  }}
                />
                <Bar dataKey="count" fill="#7c3aed" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Actors & Runtime Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Preferred Runtime */}
        <div className="p-5 rounded-3xl glass-card border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
            <Clock className="w-4 h-4 text-purple-400" /> Preferred Runtime
          </div>
          <div className="text-2xl font-bold text-white font-space">2h 15m - 2h 45m</div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            You show a 84% preference for extended epic narratives with rich world-building.
          </p>
        </div>

        {/* Top Actor Affinity */}
        <div className="md:col-span-2 p-5 rounded-3xl glass-card border border-zinc-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
              <User className="w-4 h-4 text-blue-400" /> Top Actor Affinity
            </div>
            <span className="text-xs text-zinc-500">Highest watched</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {preferredActors.map((actor) => (
              <div key={actor.name} className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <img
                  src={actor.image}
                  alt={actor.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-semibold text-white">{actor.name}</h4>
                  <span className="text-[10px] text-purple-400 font-space font-medium">{actor.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
