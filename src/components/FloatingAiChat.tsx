"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { Sparkles, Send, Bot, User, X, RefreshCw, MessageSquare } from "lucide-react";

interface FloatingAiChatProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  watchlist: Movie[];
}

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  recommendations?: Movie[];
}

export const FloatingAiChat: React.FC<FloatingAiChatProps> = ({
  onSelectMovie,
  onToggleWatchlist,
  watchlist
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-floating",
      sender: "ai",
      text: "Hello UserX! I'm Lumina AI. Ask me to compare movies, find films by actor, director, year, language, or mood!"
    }
  ]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsgId = Date.now().toString();
    const newMsgs: ChatMessage[] = [
      ...messages,
      { id: userMsgId, sender: "user", text: textToSend }
    ];

    setMessages(newMsgs);
    setQuery("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: textToSend })
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.recommendations && data.recommendations.length > 0) {
        setMessages([
          ...newMsgs,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: `Top Lumina AI matches for "${textToSend}":`,
            recommendations: data.recommendations.slice(0, 3)
          }
        ]);
      } else {
        setMessages([
          ...newMsgs,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: "I couldn't find an exact match in our catalog. Try searching by actor (e.g. Leonardo DiCaprio) or director (e.g. Christopher Nolan)!"
          }
        ]);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 text-white shadow-2xl shadow-purple-950/80 hover:scale-105 transition-all flex items-center gap-2 border border-purple-400/40 group"
        aria-label="Toggle Lumina AI Floating Chat Assistant"
      >
        <Sparkles className="w-5 h-5 animate-pulse text-purple-200" />
        <span className="font-bold text-xs font-syne hidden sm:inline">Ask Lumina AI</span>
      </button>

      {/* Floating Chat Modal Box */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[540px] glass-panel rounded-3xl border border-purple-500/30 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5"
          role="dialog"
          aria-label="Lumina AI Assistant Chat Window"
        >
          {/* Header */}
          <div className="p-4 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white font-syne flex items-center gap-1">
                  Lumina AI Assistant <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </h4>
                <p className="text-[10px] text-purple-300 font-medium">Neural Companion Active</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "ai" && (
                  <div className="w-6 h-6 rounded-lg bg-purple-600 flex items-center justify-center text-white shrink-0 mt-1">
                    <Bot className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    m.sender === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-zinc-900/90 text-zinc-200 border border-zinc-800 rounded-tl-none"
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Recommendations */}
                  {m.recommendations && (
                    <div className="mt-2.5 space-y-2">
                      {m.recommendations.map((rec) => (
                        <div
                          key={rec.id}
                          onClick={() => {
                            onSelectMovie(rec);
                            setIsOpen(false);
                          }}
                          className="p-2 rounded-xl bg-zinc-950/80 border border-purple-500/30 flex items-center gap-2 cursor-pointer hover:border-purple-400"
                        >
                          <img
                            src={rec.posterUrl}
                            alt={rec.title}
                            className="w-8 h-10 rounded object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <h5 className="font-bold text-[11px] text-white truncate">{rec.title}</h5>
                            <span className="text-[10px] text-purple-400 font-space">{rec.matchScore}% Match</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-purple-400">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Lumina AI is analyzing neural movie clusters...</span>
              </div>
            )}
          </div>

          {/* Quick Preset Queries */}
          <div className="px-3 py-1.5 bg-zinc-950/60 border-t border-zinc-900 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {[
              "Compare Inception vs Interstellar",
              "Leonardo DiCaprio movies",
              "Korean thrillers",
              "Japanese anime"
            ].map((preset) => (
              <button
                key={preset}
                onClick={() => handleSend(preset)}
                className="text-[10px] px-2 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-purple-500 shrink-0"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(query);
            }}
            className="p-3 bg-zinc-950 border-t border-zinc-800 flex gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask by actor, director, year, language, or comparison..."
              className="flex-1 bg-zinc-900 text-xs text-white placeholder-zinc-500 px-3 py-2 rounded-xl border border-zinc-800 focus:border-purple-500 outline-none"
            />
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className="p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-40"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
